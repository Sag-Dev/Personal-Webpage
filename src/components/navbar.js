import React, { Component } from 'react'

const sections = ["welcome", "about", "work", "skills", "contact"];
const section_suffix = "-section";
const navelement_suffix = "-navelement";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.currentSection = 0;
    this.section_divs = [];
    this.section_navelements = [];

    window.onscroll = () => (this.onScroll());
  }

  componentDidMount() {
    this.section_divs = sections.map((section) => (document.querySelector("#"+section+section_suffix)));
    this.section_navelements = sections.map((section) => (document.querySelector("#"+section+navelement_suffix)));

    this.onScroll();
  }

  // Based on https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/
  // Scrolls to the element with the given ID, delays 'duration'
  scrollTo(targetId, duration = 600) {
    function ease (t) {
      return t * (2 - t);
    }

    var target = document.querySelector(targetId);
    if (target == null) return;

    var distanceToTarget = target.getBoundingClientRect().top;
    var initPos = window.pageYOffset;
    var initTime = null;

    function animate(currentTime) {
      if (initTime == null) initTime = currentTime;

      var elapsed = currentTime - initTime;
      var t = Math.min(1, elapsed/duration)
      var yPercentage = ease(t);

      window.scrollTo(0, Math.ceil(initPos + (yPercentage * distanceToTarget)));
      if (elapsed < duration) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }

  // Updates the navigation bar active element to fit the current section
  onScroll() {
    for (var i = 0; i < this.section_divs.length; i++) {
      var section_pos = this.section_divs[i].getBoundingClientRect().top;
      if (section_pos >= -window.innerHeight/2 && section_pos < window.innerHeight/2 ){

        // eslint-disable-next-line
        window.requestAnimationFrame( () => {
          this.section_navelements[this.currentSection].classList.remove('active-navelement');
          this.section_navelements[i].classList.add('active-navelement');
          this.currentSection = i;
        })

        break;
      }
    }
  }

  render() {
    return (
        <div className = 'navbar'>
          { sections.map((section) => (
            <div key={ section+navelement_suffix } id={ section+navelement_suffix } className="navbar-element" onClick={() => (this.scrollTo("#"+section+section_suffix))}></div>
          )) }
        </div>
      );
    }
}

export default Navbar;