import React from 'react';

export default class MobileNavToggle extends React.Component { 
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    let html = document.getElementsByTagName('html')[0];
    let mobileNavToggle = document.getElementsByClassName('mobile-nav-toggle')[0];
    let mobileNavMenu = document.getElementsByClassName('mobile-nav-menu')[0];

    html.classList.toggle('no-scroll'); // Prevents background content from being moved while menu is active
    mobileNavToggle.classList.toggle('is-active'); // 
    mobileNavMenu.classList.toggle('is-active'); // Toggle the menu on/off
  }

  render() {

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