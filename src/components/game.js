// This code is based on: https://github.com/doebi/liquidfun.js-demo

import React, { Component } from 'react'
import * as PIXI from 'pixi.js'
import Script from 'react-load-script'
import LiquidfunRenderer from '../utils/liquidfun_renderer'

// Elapsed time between frames
const TARGET_MS = 1000/60;
const MAX_MS = 1000/30;

// Simulation parameters
const PTM = 30; //Pixels per meter
const MAX_PARTICLES = 1000;
const GRAVITY = [0, 9.81];

// Using a customized renderer for the liquidfun particles
PIXI.Renderer.registerPlugin('LiquidfunRenderer', LiquidfunRenderer);

class Game extends Component {
  constructor(props) {
    super(props);

    this.allLoaded = false;
  }

  componentDidMount() {  }

  render() {
    return (<>
              <Script
                url="scripts/liquidfun.js"
                onLoad={ this.setup.bind(this) }
              />
            </>)
  }

  // --- GAME LOGIC ---

  // Liquidfun and Pixi initializations
  setup() {
    // Pixi initialization
    this.app = new PIXI.Application({width: 800, height: 600, transparent: true});

    this.fake_background = document.getElementsByClassName("fake-background")[0];
    this.onResize();

    this.fake_background.appendChild(this.app.view);
    this.app.view.id = 'game-canvas';

    let gravity = new window.b2Vec2(GRAVITY[0], GRAVITY[1]);
    this.world = new window.b2World(gravity);
    window.world = this.world;
    this.createParticleSystem();

    this.accumulator = 0;
    this.sprites = [];

    // Sync Pixi with Liquidfun
    this.app.renderer.plugins.LiquidfunRenderer.setup(this.particleSystem, this.app.stage, PTM);
    PIXI.Ticker.shared.add(this.update.bind(this));

    // Show the canvas only when the physics are completely loaded
    this.app.view.style.opacity = '1';

    this.app.view.addEventListener('click', this.onClick.bind(this));
    this.app.view.addEventListener('resize', this.onResize.bind(this));

    this.allLoaded = true;
  }

  onClick(e) {
    if (!this.allLoaded) return null;

    let x = ((e.clientX - this.app.view.offsetLeft) - this.app.view.scrollWidth/2) / PTM;
    let y = -(-(e.clientY - this.app.view.offsetTop) + this.app.view.scrollHeight/2) / PTM;

    this.spawnParticles(1, x, y);
    //this.createBox(x, y, 1, 1);
  }

  onResize() {
    if (!this.allLoaded) return null;

    this.w = this.fake_background.scrollWidth;
    this.h = this.fake_background.scrollHeight;

    this.app.stage.position.x = this.w/2;
    this.app.stage.position.y = this.h/2;

    this.app.renderer.resize(this.w, this.h);
  }

  // Updates the physics and graphics. Called by PIXI.Ticker.shared
  update() {
    if (!this.allLoaded) return null;

    // Using an accumulator to guarantee (as much as possible)
    // physics stability even with low framerates
    this.accumulator += PIXI.Ticker.shared.elapsedMS;
    while (this.accumulator >= TARGET_MS) {
      this.world.Step(TARGET_MS/1000, 8, 3);
      this.accumulator -= TARGET_MS;
    }

    // Sync the sprites with their physical bodies
    this.sprites.forEach(function(sprite, i, array){
      let pos = sprite.body.GetPosition();
      sprite.position.set(pos.x * PTM, pos.y * PTM);
      sprite.rotation = -sprite.body.GetAngle();
    });
  }


  createParticleSystem() {
    let psd = new window.b2ParticleSystemDef();
    psd.radius = 0.1;
    this.particleSystem = this.world.CreateParticleSystem(psd);
  }

  spawnParticles(radius, x, y) {
    // Don't spawn more particles if the limit is surpassed or the frame rate
    // drops too much
    if (this.particleSystem.GetParticleCount() >= MAX_PARTICLES
          || PIXI.Ticker.elapsedMS >= MAX_MS)
      return null;

    let color = new window.b2ParticleColor(0, 0, 255, 255);
    let flags = (0<<0);

    let pgd = new window.b2ParticleGroupDef();
    let shape = new window.b2CircleShape();
    shape.radius = radius;
    pgd.shape = shape;
    pgd.color = color;
    pgd.flags = flags;
    shape.position = new window.b2Vec2(x, y);
    let group = this.particleSystem.CreateParticleGroup(pgd);

    return group;
  }


createBox(x, y, w, h) {
    let bd = new window.b2BodyDef();
    bd.position = new window.b2Vec2(x, y);
    let body = this.world.CreateBody(bd);

    let shape = new window.b2PolygonShape();
    shape.SetAsBoxXY(w, h);
    body.CreateFixtureFromShape(shape, 1.0);

    let sprite = PIXI.Sprite.from(PIXI.Texture.WHITE);
    sprite.width = w * PTM * 2;
    sprite.height = h * PTM * 2;
    sprite.position.set(x * PTM * 2, y * PTM * 2);
    sprite.anchor.set(0.5);
    sprite.body = body;
    this.app.stage.addChild(sprite);
    this.sprites.push(sprite);
    return body;
  }
}

export default Game;
