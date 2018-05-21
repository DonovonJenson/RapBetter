import React from 'react';

export default class MobileNavToggle extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      offsetPosition: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    let html = document.getElementsByTagName('html')[0];
    let mobileNavToggle = document.getElementsByClassName('mobile-nav-toggle')[0];
    let mobileNavFade = document.getElementsByClassName('mobile-nav-fade')[0];
    let mobileNavMenu = document.getElementsByClassName('mobile-nav-menu')[0];

    // save the current Y offset of the page
    let currentOffset = window.pageYOffset;

    html.classList.toggle('no-scroll'); // Prevents background content from being moved while menu is active, locks the window y pos to 0

    // if we have an offsetPosition stored in the state
    if (this.state.offsetPosition !== null) {
      // set the y offset to the offsetPosition in state
      window.scrollTo(0, this.state.offsetPosition);
      // clear the offsetPosition from the state
      this.setState({offsetPosition: null});
    } else {
      // set the offsetPosition to the currentOffset
      this.setState({offsetPosition: currentOffset});
    }
    // toggle all active classes
    mobileNavToggle.classList.toggle('is-active');
    mobileNavFade.classList.toggle('is-active'); 
    mobileNavMenu.classList.toggle('is-active');
    
  }

  render() {

    const { offsetPosition } = this.state;

    const { isMobile } = this.props;

    return (

      <div className="mobile-nav-wrapper">
        <a className="mobile-nav-toggle"
          onClick={isMobile ? e => e.preventDefault() : e => this.handleClick(e)} // if we're in mobile mode, change the onClick handler
          onTouchEnd={e => this.handleClick(e)} // onTouch-- only works in mobile
        >
          <span></span>
        </a>
      </div>
    );
  }
};