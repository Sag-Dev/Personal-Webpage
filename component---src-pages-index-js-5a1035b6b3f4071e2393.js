(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{157:function(e,t,a){"use strict";a.r(t);var i=a(8),n=a.n(i),r=a(0),o=a.n(r),s=a(170),l=a.n(s),c=a(191),m=a.n(c),d=(a(192),a(193),a(175)),h=a(167),u=function(){function e(){}return e.scrollTo=function(e,t){void 0===t&&(t=600);var a=document.querySelector(e);if(null!=a){var i=a.getBoundingClientRect().top,n=window.pageYOffset,r=null;requestAnimationFrame(function e(a){null==r&&(r=a);var o=a-r,s=function(e){return e*(2-e)}(Math.min(1,o/t));window.scrollTo(0,Math.ceil(n+s*i)),o<t&&requestAnimationFrame(e)})}},e}(),w=["welcome","about","work","skills","contact"],p=function(e){function t(t){var a;return(a=e.call(this,t)||this).currentSection=0,a.section_divs=[],a.section_navelements=[],a}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;window.addEventListener("scroll",function(){return e.onScroll()}),this.section_divs=w.map(function(e){return document.querySelector("#"+e+"-section")}),this.section_navelements=w.map(function(e){return document.querySelector("#"+e+"-navelement")}),this.onScroll()},a.onScroll=function(){for(var e=this,t=0;t<this.section_divs.length;t++){var a=this.section_divs[t].getBoundingClientRect().top;if(a>=-window.innerHeight/2&&a<window.innerHeight/2){window.requestAnimationFrame(function(){e.section_navelements[e.currentSection].classList.remove("active-navelement"),e.section_navelements[t].classList.add("active-navelement"),e.currentSection=t});break}}},a.render=function(){return o.a.createElement("div",{className:"navbar"},w.map(function(e){return o.a.createElement("div",{key:e+"-navelement",id:e+"-navelement",className:"navbar-element",onClick:function(){return u.scrollTo("#"+e+"-section")}})}))},t}(r.Component),v=a(5),g=a.n(v),f=a(165),y=a(194),M=a.n(y),A=a(195),I=a.n(A),E=a(196),b=a.n(E),C=function(){return o.a.createElement("div",{className:"flags"},o.a.createElement(f.a,{to:"/"}," ",o.a.createElement("img",{alt:"en",className:"flag",src:I.a})," "),o.a.createElement(f.a,{to:"/gl"}," ",o.a.createElement("img",{alt:"gl",className:"flag",src:M.a})," "),o.a.createElement(f.a,{to:"/es"}," ",o.a.createElement("img",{alt:"es",className:"flag",src:b.a})," "))};function k(e,t){var a=e.filter(function(e){return e.node.frontmatter.title===t})[0];return null!=a?a.node.html:"MISSING CONTENT!!!"}var S=function(e){function t(){return e.apply(this,arguments)||this}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;window.addEventListener("scroll",function(){return e.onScroll()}),this.title=document.querySelector(".title"),this.title_lower_caps=this.title.getElementsByClassName("title-lower-caps"),this.subtitle=this.title.querySelector(".subtitle"),this.title_placeholder=document.querySelector(".title-placeholder"),this.title_as_logo=!1,this.maintitle_helper=this.title.querySelector(".maintitle-helper"),this.maintitle_helper.onclick=function(){return u.scrollTo("#welcome-section")},this.welcomeImage=document.querySelector(".welcome-image"),this.sections=document.getElementsByClassName("container"),this.welcome_section=document.querySelector("#welcome-section")},a.title_to_logo=function(){this.title.classList.add("title-logo"),[].forEach.call(this.title_lower_caps,function(e){return e.classList.add("inactive-title")}),this.subtitle.classList.add("inactive-title"),this.maintitle_helper.classList.add("maintitle-clickable"),this.title_as_logo=!0},a.logo_to_title=function(){this.title.classList.remove("title-logo"),[].forEach.call(this.title_lower_caps,function(e){return e.classList.remove("inactive-title")}),this.subtitle.classList.remove("inactive-title"),this.maintitle_helper.classList.remove("maintitle-clickable"),this.title_as_logo=!1},a.onScroll=function(){var e=this.title.getBoundingClientRect().top,t=this.title_placeholder.getBoundingClientRect().top;e<=0&&!this.title_as_logo?window.requestAnimationFrame(this.title_to_logo.bind(this)):t>0&&this.title_as_logo&&window.requestAnimationFrame(this.logo_to_title.bind(this))},a.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"title-placeholder"}),o.a.createElement("div",{"data-aos":"zoom-out","data-aos-once":"true","data-aos-mirror":"false","data-aos-duration":"1800",className:"title"},o.a.createElement("h1",{className:"maintitle"},o.a.createElement("div",{className:"maintitle-helper"},o.a.createElement("span",{className:"title-upper-caps"},"S"),o.a.createElement("span",{className:"title-lower-caps"},"ergio "),o.a.createElement("span",{className:"title-upper-caps"},"A"),o.a.createElement("span",{className:"title-lower-caps"},"breu "),o.a.createElement("span",{className:"title-upper-caps"},"G"),o.a.createElement("span",{className:"title-lower-caps"},"arcía"))),o.a.createElement("br",null),o.a.createElement("h2",{className:"subtitle",dangerouslySetInnerHTML:{__html:k(this.props.files,"subtitle")}})))},t}(r.Component),N=(a(179),a(198),a(41),a(174)),_=a(213),D=a.n(_),x=a(214),z=a.n(x);function T(e){this.minimum_alpha=e,N.d.call(this,N.d.defaultVertexSrc,"\n    varying vec2 vTextureCoord;\n    uniform sampler2D uSampler;\n    uniform float minimum_alpha;\n\n    void main(void)\n    {\n      vec4 sample = texture2D(uSampler, vTextureCoord);\n\n      if (sample.a < minimum_alpha) discard;\n\n      gl_FragColor = vec4(vec3(sample), 1);\n    }",{minimum_alpha:this.minimum_alpha}),this.blendMode=N.b.MULTIPLY}l.a||(T.prototype=Object.create(N.d.prototype)),T.prototype.constructor=T;var P=T,L=a(215),j=a(216);function B(){N.c.call(this),this.radius=1,this.fixedCount=0,this.texture=N.f.from(z.a),this.particleSystem=null}l.a||(B.prototype=Object.create(N.c.prototype)),B.prototype.constructor=B,B.prototype.setup=function(e,t,a){this.particleSystem=e,this.PTM=t,this.color=a,this.radius=Math.max(this.particleSystem.radius*t,5),this.filters=[new N.h.BlurFilter(5,5,1,11),new P(.85),new L.a(0,this.color,1),new j.a(25,2.5,0,this.color,.1)]},B.prototype.setPTM=function(e){this.PTM=e,this.radius=Math.max(this.particleSystem.radius*e,5);for(var t=0;t<this.fixedCount;t++)this.children[t].width=this.children[t].height=4*this.radius},B.prototype.render=function(e){null!==this.particleSystem&&(this.updateParticlePos(),N.c.prototype.render.call(this,e))},B.prototype.updateParticlePos=function(){for(var e=this.particleSystem.GetPositionBuffer(),t=0;t<this.fixedCount;t++)this.children[t].position.set(e[2*t]*this.PTM,e[2*t+1]*this.PTM)},B.prototype.updateCount=function(){this.fixedCount=this.particleSystem.GetParticleCount()/2;var e=this.children.length;return this.fixedCount<e?this.removeChildren(this.fixedCount,e):this.fixedCount>e&&this.addParticles(this.fixedCount-e),this.fixedCount},B.prototype.addParticles=function(e){for(var t=0;t<e;t++){var a=new N.e(this.texture);a.width=a.height=4*this.radius,a.blendMode=N.b.NORMAL,a.anchor.set(.5),this.addChild(a)}};var Z=B,G=a(217),W=a.n(G),H=[0,9.81],R={x:0,y:0,active:!1,growth:.1,speed:10,maxSpeed:40,angle:.5,size:20},q=function(e){function t(t){var a;return(a=e.call(this,t)||this).allLoaded=!1,a}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){},a.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(D.a,{url:"scripts/liquidfun.js",onLoad:this.setup.bind(this)}))},a.setup=function(){this.app=new N.a({transparent:!0}),this.visible=!1,this.fake_background=document.getElementsByClassName("fake-background")[0],this.fake_floor=document.getElementsByClassName("fake-floor")[0],this.w=this.fake_background.scrollWidth,this.h=this.fake_background.scrollHeight,this.PTM=this.w/60,this.fake_background.appendChild(this.app.view),this.app.view.id="game-canvas";var e=new window.b2Vec2(H[0],H[1]);this.world=new window.b2World(e),window.world=this.world,this.createParticleSystem(),this.my_tornado=Object.assign({},R),this.defaultContainer=new N.c,this.app.stage.addChild(this.defaultContainer),this.accumulator=1e3/60,this.sprites=[],this.createWalls(60,20,250,.1),N.g.shared.add(this.update.bind(this),75),this.app.view.style.opacity="0",window.addEventListener("resize",this.onResize.bind(this)),this.app.view.addEventListener("mousedown",this.onMouseDown.bind(this)),this.app.view.addEventListener("mouseup",this.onMouseUp.bind(this)),this.app.view.addEventListener("mousemove",this.updateMouseCoords.bind(this)),this.allLoaded=!0,this.onResize(),this.spawnParticles(0,-2,30,2),this.spawnBoat(0,-this.h/this.PTM-20,4,3.488),this.randomizeParticleIndexes()},a.updateMouseCoords=function(e){this.mouseX=(e.clientX-this.app.view.offsetLeft-this.app.view.scrollWidth/2)/this.PTM,this.mouseY=-(-(e.clientY-this.app.view.offsetTop)+this.app.view.scrollHeight)/this.PTM},a.onMouseDown=function(e){if(!this.allLoaded)return null;this.updateMouseCoords(e),this.my_tornado=Object.assign({},R),this.my_tornado.active=!0},a.onMouseUp=function(e){if(!this.allLoaded)return null;this.my_tornado.active=!1},a.onResize=function(){if(!this.allLoaded)return null;this.w=this.fake_background.scrollWidth,this.h=this.fake_background.scrollHeight,this.PTM=this.w/60,this.app.renderer.resize(this.w,this.h),this.app.stage.position.set(this.w/2,this.h),this.particleContainer.setPTM(this.PTM),this.sprites.forEach(function(e,t,a){e.width=e.bodyWidth*this.PTM*2,e.height=e.bodyHeight*this.PTM*2;var i=e.body.GetPosition();e.position.set(i.x*this.PTM,i.y*this.PTM),e.rotation=e.body.GetAngle()}.bind(this))},a.update=function(){if(!this.allLoaded||!document.hasFocus())return null;for(this.accumulator+=N.g.shared.elapsedMS;this.accumulator>=1e3/60;)this.world.Step(1e3/60/1e3,8,3),this.accumulator-=1e3/60;this.sprites.forEach(function(e,t,a){var i=e.body.GetPosition();e.position.set(i.x*this.PTM,i.y*this.PTM),e.rotation=e.body.GetAngle()}.bind(this)),this.updateTornado(),this.visible||(this.app.view.classList.add("visible-canvas"),this.visible=!0)},a.createParticleSystem=function(){var e=new window.b2ParticleSystemDef;e.radius=.17,this.particleSystem=this.world.CreateParticleSystem(e),this.particleContainer=new Z,this.particleContainer.setup(this.particleSystem,this.PTM,15129276),this.app.stage.addChild(this.particleContainer)},a.spawnParticles=function(e,t,a,i){var n=new window.b2ParticleGroupDef,r=new window.b2PolygonShape;r.SetAsBoxXY(a,i),n.shape=r,n.flags=window.b2_tensileParticle,n.position=new window.b2Vec2(e,t),n.strength=.1;var o=this.particleSystem.CreateParticleGroup(n);return this.particleContainer.updateCount(),o},a.createBox=function(e,t,a,i,n,r){void 0===r&&(r=!0);var o=new window.b2BodyDef;o.position=new window.b2Vec2(e,t),n||(o.type=2);var s=this.world.CreateBody(o),l=new window.b2PolygonShape;if(l.SetAsBoxXY(a,i),s.CreateFixtureFromShape(l,.3),!r)return s;var c=N.e.from(N.f.WHITE);return c.tint=15129276,c.anchor.set(.5),c.bodyWidth=a,c.bodyHeight=i,c.width=a*this.PTM*2,c.height=i*this.PTM*2,c.position.set(e*this.PTM*2,t*this.PTM*2),c.body=s,this.defaultContainer.addChild(c),this.sprites.push(c),s},a.spawnBoat=function(e,t,a,i){var n=window.b2Vec2,r=new window.b2BodyDef;r.position=new n(e,t),r.type=2;var o=this.world.CreateBody(r),s=new window.b2PolygonShape;s.SetAsBoxXYCenterAngle(a/1.4,i/5,new n(0,i/1.3),0),o.CreateFixtureFromShape(s,.1),s.SetAsBoxXYCenterAngle(a/7,i/1.7,new n(0,-i/4),0),o.CreateFixtureFromShape(s,.2),s.SetAsBoxXYCenterAngle(a/6,i/3,new n(a/1.7,i/2),Math.PI/4),o.CreateFixtureFromShape(s,.3),s.SetAsBoxXYCenterAngle(a/6,i/3,new n(-a/1.7,i/2),-Math.PI/4),o.CreateFixtureFromShape(s,.3);var l=N.e.from(W.a);return l.anchor.set(.5),l.bodyWidth=a,l.bodyHeight=i,l.width=a*this.PTM*2,l.height=i*this.PTM*2,l.position.set(e*this.PTM*2,t*this.PTM*2),l.body=o,this.defaultContainer.addChild(l),this.sprites.push(l),this.boat=l,o},a.createWalls=function(e,t,a,i){this.walls=[this.createBox(0,t+i,a,t,!0,!1)],this.walls[1]=this.createBox(e/2+t+i,0,t,a,!0,!1),this.walls[2]=this.createBox(-e/2-t-i,0,t,a,!0,!1)},a.updateTornado=function(){if(this.my_tornado.active){this.my_tornado.size+=this.my_tornado.growth*this.my_tornado.size*N.g.shared.elapsedMS/1e3,this.my_tornado.speed<this.my_tornado.maxSpeed&&(this.my_tornado.speed+=this.my_tornado.growth/3*this.my_tornado.speed*N.g.shared.elapsedMS/1e3),this.my_tornado.x=this.mouseX,this.my_tornado.y=this.mouseY;for(var e=this.particleSystem.GetPositionBuffer(),t=this.particleSystem.GetVelocityBuffer(),a=0;a<this.my_tornado.size;a++){var i=this.my_tornado.y-e[2*a+1],n=-(this.my_tornado.x-e[2*a]);i=Math.cos(this.my_tornado.angle)*i-Math.sin(this.my_tornado.angle)*n,n=Math.sin(this.my_tornado.angle)*i+Math.cos(this.my_tornado.angle)*n;var r=Math.sqrt(Math.pow(i,2)+Math.pow(n,2));i=i/r*this.my_tornado.speed,n=n/r*this.my_tornado.speed,t[2*a]=i,t[2*a+1]=n}}},a.randomizeParticleIndexes=function(){for(var e=this.particleSystem.GetParticleCount()/2,t=this.particleSystem.GetPositionBuffer(),a=this.particleSystem.GetVelocityBuffer(),i=0;i<e;i++){var n=Math.floor(Math.random()*(e+1)),r=t[2*i],o=t[2*i+1];t[2*i]=t[2*n],t[2*i+1]=t[2*n+1],t[2*n]=r,t[2*n+1]=o,r=a[2*i],o=a[2*i+1],a[2*i]=a[2*n],a[2*i+1]=a[2*n+1],a[2*n]=r,a[2*n+1]=o}},t}(r.Component),O=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(S,{files:this.props.files}),o.a.createElement("div",{"data-aos":"zoom-out","data-aos-once":"true","data-aos-mirror":"false","data-aos-duration":"1800",id:"welcome-section",className:"container welcome"},o.a.createElement(C,null),o.a.createElement("div",{className:"fake-background"},o.a.createElement("div",{className:"fake-floor"}),o.a.createElement(q,null),o.a.createElement("hr",null))))},t}(r.Component);O.propTypes={files:g.a.array.isRequired};var Y=O,F=function(e){var t=e.target_id;return o.a.createElement("div",{onClick:function(){return u.scrollTo("#"+t)},className:"section-arrow"})};F.propTypes={target_id:g.a.string.isRequired};var X=F,J=a(218),Q=a.n(J),V=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){return o.a.createElement("div",{id:"about-section",className:"container about"},o.a.createElement("div",{"data-aos":"fade-down",className:"section-title"},o.a.createElement("h1",null,o.a.createElement("span",{className:"section-title-capital"},"W"),"ho I am")),o.a.createElement("div",{className:"about-content"},o.a.createElement("div",{"data-aos":"fade-right",className:"about-text",dangerouslySetInnerHTML:{__html:k(this.props.files,"about")}}),o.a.createElement("div",{"data-aos":"zoom-in",className:"about-image"},o.a.createElement("img",{alt:"Welcome",src:Q.a}))),o.a.createElement(X,{target_id:"work-section"}))},t}(r.Component);V.propTypes={files:g.a.array.isRequired};var U=V,K=a(219),$=a.n(K),ee=function(e){function t(){return e.apply(this,arguments)||this}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.work_elements=document.getElementsByClassName("work-element"),this.work_overlay=document.querySelector(".work-overlay"),this.work_overlay_title=this.work_overlay.querySelector(".work-overlay-title"),this.work_overlay_description=this.work_overlay.querySelector(".work-overlay-description"),this.work_overlay_image=this.work_overlay.querySelector(".work-overlay-image img"),this.overlay_cross=this.work_overlay.querySelector(".work-overlay-cross"),this.overlay_active=!1,Array.prototype.forEach.call(this.work_elements,function(t){return t.onclick=e.zoomElement.bind(e,t)}),this.overlay_cross.onclick=this.setOverlayActive.bind(this,!1),window.addEventListener("keydown",function(t){e.overlay_active&&"Escape"===t.key&&e.setOverlayActive(!1)})},a.zoomElement=function(e){this.overlay_active||this.setOverlayActive(!0,e)},a.setOverlayActive=function(e,t){!this.overlay_active&&e?(this.work_overlay.classList.add("work-overlay-active"),this.overlay_active=!0,this.work_overlay_title.innerHTML=t.querySelector(".work-element-title").innerHTML,this.work_overlay_description.innerHTML=t.querySelector(".work-element-content").innerHTML,this.work_overlay_image.src=t.querySelector(".work-element-image img").src):this.overlay_active&&!e&&(this.work_overlay.classList.remove("work-overlay-active"),this.overlay_active=!1)},a.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"work-overlay"},o.a.createElement("div",{className:"work-overlay-cross"},o.a.createElement("img",{alt:"cross",src:$.a})),o.a.createElement("div",{className:"work-overlay-wrapper"},o.a.createElement("div",{className:"work-overlay-image"},o.a.createElement("img",{alt:"Project",src:""})),o.a.createElement("div",{className:"work-overlay-text"},o.a.createElement("h1",{className:"work-overlay-title"}),o.a.createElement("p",{className:"work-overlay-description"})))),o.a.createElement("div",{id:"work-section",className:"container work"},o.a.createElement("div",{"data-aos":"fade-down",className:"section-title"},o.a.createElement("h1",null,o.a.createElement("span",{className:"section-title-capital"},"L"),"et the work do the talk")),o.a.createElement("div",{className:"work-container"},this.props.files.filter(function(e){return"work"===e.node.frontmatter.tag}).map(function(e){return o.a.createElement("div",{"data-aos":"fade-left",key:e.node.frontmatter.title,className:"work-element-wrapper"},o.a.createElement("div",{className:"work-element",id:e.node.frontmatter.title},o.a.createElement("div",{className:"work-element-content",dangerouslySetInnerHTML:{__html:e.node.html}}),o.a.createElement("div",{className:"work-element-title",dangerouslySetInnerHTML:{__html:e.node.frontmatter.beautifulTitle}}),o.a.createElement("div",{className:"work-element-image"},o.a.createElement("img",{alt:e.node.frontmatter.title,src:Object(f.c)("/images/work/"+e.node.frontmatter.title+".png")}))))})),o.a.createElement(X,{target_id:"skills-section"})))},t}(r.Component);ee.propTypes={files:g.a.array.isRequired};var te=ee,ae=(a(220),{mail:o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z"})),telegram:o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},o.a.createElement("path",{id:"telegram-1",d:"M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"})),linkedin:o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})),github:o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})),teamwork:o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z"})),technologies:o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M10 2h-2v-2h2v2zm-8 6h-2v2h2v-2zm0-5c0-.551.448-1 1-1h4v-2h-4c-1.657 0-3 1.343-3 3v4h2v-4zm0 8h-2v2h2v-2zm14-11h-2v2h2v-2zm-3 0h-2v2h2v-2zm-11 14h-2v2h2v-2zm18-2.042h-2.277l-2.36 5.386-2.883-7.93-2.442 5.78-2.071-4.14-1.129 1.966h-2.838v6.98h16v-8.042zm-16 .063h2.259l1.768-3.081 1.935 3.866 2.589-6.126 2.899 7.976 1.62-3.697h2.93v-6.959h-16v8.021zm10 11.979h2v-2h-2v2zm8-11h2v-2h-2v2zm-20 8v-4h-2v4c0 1.657 1.343 3 3 3h4v-2h-4c-.552 0-1-.449-1-1zm20 0c0 .551-.448 1-1 1h-4v2h4c1.657 0 3-1.343 3-3v-4h-2v4zm0-11h2v-2h-2v2zm0 6h2v-2h-2v2zm2-13c0-1.657-1.343-3-3-3h-4v2h4c.552 0 1 .449 1 1v4h2v-4zm-16 21h2v-2h-2v2zm3 0h2v-2h-2v2z"})),opensource:o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})),platforms:o.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"},o.a.createElement("path",{d:"M22 10h-1v-2h-11v13h5v1.617c0 .524.121 1.058.502 1.383h-5.002c-.398 0-.779-.158-1.061-.439-.281-.282-.439-.663-.439-1.061v-15c0-.398.158-.779.439-1.061.282-.281.663-.439 1.061-.439h10c.398 0 .779.158 1.061.439.281.282.439.663.439 1.061v2.5zm2 2.25c0-.69-.56-1.25-1.25-1.25h-5.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h5.5c.69 0 1.25-.56 1.25-1.25v-10.5zm-15.407 11.75h-6.593l2.599-3h3.401v1.804c0 .579.337 1.09.593 1.196zm11.407-1c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm3-3v-6.024h-6v6.024h6zm-2-15h-2v-3h-17v15h6v2h-8v-19h21v5zm-.5 7h-1c-.276 0-.5.224-.5.5s.224.5.5.5h1c.275 0 .5-.224.5-.5s-.225-.5-.5-.5z"})),languages:o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M18.604 16.111c.018.276.048.531.092.758-.583.106-.606-.469-.092-.758zm-4.354.16h.996l-.498-1.43-.498 1.43zm2.75-6.105c3.697 0 7 2.465 7 5.837 0 1.196-.432 2.37-1.193 3.281-.033 1.068.596 2.6 1.162 3.715-1.518-.274-3.676-.88-4.654-1.48-5.387 1.313-9.315-1.984-9.315-5.516 0-3.39 3.326-5.837 7-5.837zm-.437 7.584l-1.44-3.792h-.76l-1.447 3.792h.812l.312-.875h1.422l.313.875h.788zm3.988-2.296l.079-.353-.642-.125-.064.292c-.215-.032-.445-.036-.679-.012l.028-.458h.717v-.608h-.631l.084-.335-.627-.188c-.046.154-.084.304-.123.523h-.715v.608h.638c-.018.196-.026.399-.03.605-.704.259-1.002.751-1.002 1.198 0 .528.416.992 1.074.932.817-.074 1.362-.691 1.682-1.45.332.19.471.511.346.807-.115.275-.455.536-1.104.523v.654c.721.011 1.429-.262 1.707-.923.27-.647-.041-1.352-.738-1.69zm-1.25 1.073c.17-.177.305-.401.407-.626-.147-.013-.306-.009-.462.012.011.22.028.425.055.614zm-10.492 2.703c-1.887-.271-3.571-1.165-4.827-2.478-.182-.189-.315-.636-.019-.819l.302-.078c.235-.199-.221-1.009-.04-1.14.561-.401.295-.893-.051-1.299-.146-.172-.948-1-1.038-.853.067-.226-.146-.772-.274-.987-.217-.362-.502-.585-.617-.982-.046-.158-.046-.64-.139-.751-.038-.045-.327-.167-.317-.233.278-1.655 1.044-3.143 2.149-4.318l.746-.301c.468-.703.495-.158.916-.341.141 0 .301-.578.452-.667.261-.169.062-.169.013-.245-.104-.168 2.191-1.003 2.229-.853.032.127-1.135.734-1.007.716-.296.039-.352.571-.297.568.147-.005 1.074-.704 1.506-.555.423.146 1.183-.336 1.48-.582.149-.125.286-.344.483-.344.909 0 2.268.374 2.579.56.474.283-.204.263-.277.447-.058.142-.19.335-.249.412-.102.133-.399.077-.341-.082.059-.167.348-.231-.086-.271-.445-.041-.568-.341-1.014.034-.134.113-.234.286-.321.433-.123.21-.42.201-.544.396-.12.192.07.512.304.371.062-.038.765.645.674.095-.059-.364.196-.612.201-.887.003-.184.28-.066.206.03-.097.121-.203.534.051.554.096.008.339-.158.425-.084-.096-.002-.315.383-.3.376-.108.048-.233-.021-.15.21.074.228-.408.201-.495.247-.037.02-.417-.114-.408-.028-.131-.109.037-.379-.072-.422-.11.168-.058.512-.294.512-.202 0-.482.229-.604.369-.087.097-.609.308-.666.302.299.031.286.25.261.437-.06.433-.995.032-.956.196.038.158-.107.586-.139.724-.029.125.402.205.378.267.002-.007.583-.199.64-.25l.131-.293c.11-.073.226-.133.35-.179l.149-.258c.05-.02.645-.112.686-.092.149.068.428.353.532.483.036.047.227.117.227.188.069.107-.051.148-.006.223.104.193.132-.401.087-.29 0-.189.142.071.174.049l-.657-.654c-.204-.342.543.183.64.247.096.063.285.629.537.501.158-.08-.004-.139.106-.229l.449-.09c-.357.261.279.602.182.556.16.074.254-.058.354-.021.057.022.663.015.566-.082.151.076.082.748-.044.851-.204.169-1.182.1-1.399-.057-.361-.262-.297.279-.473.352-.344.142-.857-.463-1.218-.482.176.026.015-.445.015-.478-.139-.171-1.02.019-1.252.05-.434.058-.89.052-1.223.324-.234.189-.237.5-.477.651-.156.095-.325.064-.456.189-.234.222-.504.552-.637.845-.054.123.072.416.041.574-.307.967.076 2.308 1.248 2.456.25.032.506.144.759.117 1.332-2.88 4.568-4.92 8.347-4.92.932 0 1.831.124 2.678.354-1.105-4.322-5.012-7.521-9.678-7.521-5.523 0-10 4.477-10 10s4.477 10 10 10l.074-.004c-.509-.533-.931-1.128-1.265-1.766zm4.778-13.035c.068-.008-.089.138-.089.138.027.212.183.327.479.435.36.129.03.375-.176.317-.114-.032-.704-.21-.725.021 0 .138-.56.001-.473-.145.061-.098.041-.319.152-.464.16-.21.313-.096.318.026.002.327.332-.306.514-.328zm-4.532-.292c.08.113.688-.163.591-.146.187-.094.024-.104-.082-.159-.035-.179-.065-.456-.177-.566l.074-.085c-.173-.249-.301.302-.301.302l.09-.026-.042.113c.071.129.019.207.007.277l-.124.077c-.045.055.215.062.217.071.009.028-.313.074-.253.142zm-.396-.286c-.069.071.002.116.073.085.104-.045.244-.044.26-.183l.066-.084c.029-.043-.057-.114-.092-.121l-.124.086-.061.016-.056.072.006.04-.072.089zm2.634 2.107c-.055 0-.369.029-.34.084.178.293.403-.076.34-.084z"})),programming:o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z"}))}),ie=function(e){return ae[e.name]?ae[e.name]:"Missing icon: "+e.name},ne=!0,re=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){return o.a.createElement("div",{id:"skills-section",className:"container skills"},o.a.createElement("hr",null),o.a.createElement("div",{"data-aos":"fade-down",className:"section-title"},o.a.createElement("h1",null,o.a.createElement("span",{className:"section-title-capital"},"W"),"hat I can do")),o.a.createElement("div",{className:"skills-wrapper"},this.props.files.filter(function(e){return"skills"===e.node.frontmatter.tag}).map(function(e){return ne=!ne,o.a.createElement("div",{"data-aos":"fade-right",key:e.node.frontmatter.title,className:"skills-element-wrapper"},o.a.createElement("div",{className:"skills-element "+(ne?"skills-odd-element":"")},o.a.createElement("div",{"data-aos":"svg-animation",className:"skills-element-image"},o.a.createElement(ie,{name:e.node.frontmatter.title})),o.a.createElement("div",{className:"skills-element-content",dangerouslySetInnerHTML:{__html:e.node.html}})))})),o.a.createElement(X,{target_id:"contact-section"}))},t}(r.Component);re.propTypes={files:g.a.array.isRequired};var oe=re,se=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){return o.a.createElement("div",{id:"contact-section",className:"container contact"},o.a.createElement("div",{"data-aos":"fade-down",className:"section-title"},o.a.createElement("h1",null,o.a.createElement("span",{className:"section-title-capital"},"C"),"ontact me!")),o.a.createElement("div",{className:"contact-wrapper"},o.a.createElement("div",{"data-aos":"fade-right",className:"contact-email"}," ",o.a.createElement("a",{href:"mailto:sergio@sag-dev.com",rel:"noopener noreferrer"}," ",o.a.createElement(ie,{name:"mail"})," ")," "),o.a.createElement("div",{className:"contact-right-wrapper"},o.a.createElement("div",{"data-aos":"fade-down",dangerouslySetInnerHTML:{__html:k(this.props.files,"contact")}}),o.a.createElement("div",{className:"contact-icons"},o.a.createElement("a",{"data-aos":"fade-up",href:"https://t.me/sag_dev",target:"_blank",rel:"noopener noreferrer"}," ",o.a.createElement(ie,{name:"telegram"})," "),o.a.createElement("a",{"data-aos":"fade-up",href:"https://www.linkedin.com/in/sergio-abreu-garc%C3%ADa-826520159/",target:"_blank",rel:"noopener noreferrer"}," ",o.a.createElement(ie,{name:"linkedin"})," "),o.a.createElement("a",{"data-aos":"fade-up",href:"https://github.com/sag-dev",target:"_blank",rel:"noopener noreferrer"}," ",o.a.createElement(ie,{name:"github"})," ")))))},t}(r.Component);se.propTypes={files:g.a.array.isRequired};var le=se;a.d(t,"pageQuery",function(){return me}),l.a||m.a.init({offset:70,delay:0,duration:900,easing:"ease",once:!1,mirror:!1,anchorPlacement:"top-bottom"});var ce=function(e){function t(t){var a;return(a=e.call(this,t)||this).files=t.data.allMarkdownRemark.edges,a.lang=a.files[0].node.frontmatter.lang,a}return n()(t,e),t.prototype.render=function(){return o.a.createElement(d.a,null,o.a.createElement(h.a,{lang:this.lang}),o.a.createElement(p,null),o.a.createElement(Y,{files:this.files}),o.a.createElement(U,{files:this.files}),o.a.createElement(te,{files:this.files}),o.a.createElement(oe,{files:this.files}),o.a.createElement(le,{files:this.files}))},t}(r.Component),me=(t.default=ce,"1132802233")},165:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var i=a(0),n=a.n(i),r=a(5),o=a.n(r),s=a(40),l=a.n(s);a.d(t,"a",function(){return l.a}),a.d(t,"c",function(){return s.withPrefix});a(166);var c=n.a.createContext({});function m(e){var t=e.staticQueryData,a=e.data,i=e.query,r=e.render,o=a?a.data:t[i]&&t[i].data;return n.a.createElement(n.a.Fragment,null,o&&r(o),!o&&n.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,i=e.render,r=e.children;return n.a.createElement(c.Consumer,null,function(e){return n.a.createElement(m,{data:t,query:a,render:i||r,staticQueryData:e})})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},166:function(e,t,a){var i;e.exports=(i=a(169))&&i.default||i},167:function(e,t,a){"use strict";var i=a(168),n=a(0),r=a.n(n),o=a(5),s=a.n(o),l=a(177),c=a.n(l),m=a(165);function d(e){var t=e.description,a=e.lang,n=e.meta,o=e.keywords,s=e.title;return r.a.createElement(m.b,{query:h,render:function(e){var i=t||e.site.siteMetadata.description[a];return o=o.concat(e.site.siteMetadata.keywords.general).concat(e.site.siteMetadata.keywords[a]),s=s||e.site.siteMetadata.title[a],r.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,meta:[{name:"description",content:i},{property:"og:title",content:s},{property:"og:url",content:e.site.siteMetadata.url},{property:"og:description",content:i},{property:"og:type",content:"website"},{property:"og:site_name",content:s},{name:"og:image",content:"MISSING"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:i},{name:"twitter:image",content:"MISSING"},{name:"robots",content:"index, follow"},{name:"viewport",content:"width=device-width,initial-scale=1"}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)},r.a.createElement("link",{rel:"canonical",href:"https://sag-dev.com"}))},data:i})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string},t.a=d;var h="2722393399"},168:function(e){e.exports={data:{site:{siteMetadata:{title:{en:"Sergio Abreu García | Software developer",es:"Sergio Abreu García | Desarrollador de software",gl:"Sergio Abreu García | Desarrollador de software"},description:{en:"Portfolio website of Sergio Abreu García, software developer.",es:"Página portfolio de Sergio Abreu García, desarrollador de software",gl:"Páxina portfolio de Sergio Abreu García, desarrollador de software"},author:"Sergio Abreu García",url:"https://sag-dev.com",keywords:{general:["sergio","abreu","garcía","software","blockchain","portfolio","frontend","backend","cv"],en:["english","developer"],gl:["galego","desarrollador"],es:["español","desarrollador"]}}}}}},169:function(e,t,a){"use strict";a.r(t);a(41);var i=a(0),n=a.n(i),r=a(5),o=a.n(r),s=a(65),l=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},175:function(e,t,a){"use strict";var i=a(0),n=a.n(i),r=a(5),o=a.n(r),s=function(){return n.a.createElement("div",{className:"footer"},n.a.createElement("br",null),"© 2018 - 2019 Sergio Abreu García. All rights reserved.",n.a.createElement("br",null),"sergio@sag-dev.com",n.a.createElement("br",null),n.a.createElement("br",null))},l=(a(176),function(e){var t=e.children;return n.a.createElement("div",{className:"layout"},t,n.a.createElement(s,null))});l.propTypes={children:o.a.node.isRequired};t.a=l},194:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzIiCiAgIGhlaWdodD0iNjAwLjAwMDAwIgogICB3aWR0aD0iOTAwLjAwMDAwIgogICB5PSIwLjAwMDAwMDAwIgogICB4PSIwLjAwMDAwMDAwIgogICB2ZXJzaW9uPSIxLjAiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMzIiAvPgogIDxnCiAgICAgaWQ9ImxheWVyMSI+CiAgICA8cmVjdAogICAgICAgaWQ9InJlY3QxMjkxIgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MS4wMDAwMDAwO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjY5OTk5OTk5O3N0cm9rZS1taXRlcmxpbWl0OjQuMDAwMDAwMDtzdHJva2UtZGFzaG9mZnNldDowLjAwMDAwMDAwO3N0cm9rZS1vcGFjaXR5OjEuMDAwMDAwMCIKICAgICAgIHk9IjAuMDAwMDAwMDAiCiAgICAgICB4PSIwLjAwMDAwMDAwIgogICAgICAgaGVpZ2h0PSI2MDAuMDAwMDAiCiAgICAgICB3aWR0aD0iOTAwLjAwMDAwIiAvPgogICAgPHBhdGgKICAgICAgIGlkPSJwYXRoMjA1MiIKICAgICAgIHN0eWxlPSJmaWxsOiMwMDk5Y2M7ZmlsbC1vcGFjaXR5OjEuMDAwMDAwMDtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MS4wMDAwMDAwcHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MS4wMDAwMDAwIgogICAgICAgZD0iTSAwLjAwMDAwMDAwLDkwLjE0MDAwMCBMIDc2NC43OTAwMCw2MDAuMDAwMDAgTCA5MDAuMDAwMDAsNjAwLjAwMDAwIEwgOTAwLjAwMDAwLDUwOS44NjAwMCBMIDEzNS4yMTAwMCwwLjAwMDAwMDAwIEwgMC4wMDAwMDAwMCwwLjAwMDAwMDAwIEwgMC4wMDAwMDAwMCw5MC4xNDAwMDAgeiAiIC8+CiAgPC9nPgo8L3N2Zz4K"},195:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI2MDAiIHZpZXdCb3g9IjAsMCAyNSwxNSI+DQoJPHJlY3Qgd2lkdGg9IjI1IiBoZWlnaHQ9IjE1IiBmaWxsPSIjMDAyNDdkIi8+DQoJPHBhdGggZD0iTSAwLDAgTCAyNSwxNSBNIDI1LDAgTCAwLDE1IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMyIvPg0KCTxwYXRoIGQ9Ik0gMTIuNSwwIFYgMTUgTSAwLDcuNSBIIDI1IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNSIvPg0KCTxwYXRoIGQ9Ik0gMTIuNSwwIFYgMTUgTSAwLDcuNSBIIDI1IiBzdHJva2U9IiNjZjE0MmIiIHN0cm9rZS13aWR0aD0iMyIvPg0KPC9zdmc+"},196:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NTAiIGhlaWdodD0iNTAwIj4NCgk8cmVjdCB3aWR0aD0iNzUwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iI2M2MGIxZSIvPg0KCTxyZWN0IHdpZHRoPSI3NTAiIGhlaWdodD0iMjUwIiBmaWxsPSIjZmZjNDAwIiB5PSIxMjUiLz4NCjwvc3ZnPg=="},214:function(e,t,a){e.exports=a.p+"static/particle-cc7096c3a8786b4eae26f14cc53ebed2.png"},217:function(e,t,a){e.exports=a.p+"static/boat-ffefd1efc69291b51de2886fa499d345.png"},218:function(e,t,a){e.exports=a.p+"static/about-image-99a29a8a0768fd3a3301266ea6b6fdbf.png"},219:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNmZmYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMiAxMS4yOTNsMTAuMjkzLTEwLjI5My43MDcuNzA3LTEwLjI5MyAxMC4yOTMgMTAuMjkzIDEwLjI5My0uNzA3LjcwNy0xMC4yOTMtMTAuMjkzLTEwLjI5MyAxMC4yOTMtLjcwNy0uNzA3IDEwLjI5My0xMC4yOTMtMTAuMjkzLTEwLjI5My43MDctLjcwNyAxMC4yOTMgMTAuMjkzeiIvPjwvc3ZnPg=="}}]);
//# sourceMappingURL=component---src-pages-index-js-5a1035b6b3f4071e2393.js.map