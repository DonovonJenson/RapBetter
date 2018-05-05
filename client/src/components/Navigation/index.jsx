import React from 'react';

export default class Navigation extends React.Component {
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

      <section className="navigation">

        <div className="navigation-logo-wrapper">
          <a className="navigation-logo" href="/"></a>
        </div>

        <div className="navigation-nav-wrapper">
          <nav>
            <a className="navigation-nav-link" href="/tool">Rap Tool</a>
            <a className="navigation-nav-link" href="/videos">Videos</a>
            <a className="navigation-nav-link" href="/about">About</a>
            <a className="navigation-nav-link" href="/courses">Courses</a>
          </nav>
        </div>

        <div className="mobile-nav-wrapper">
          <a className="mobile-nav-toggle"
            onClick={isMobile ? (e) => {e.preventDefault()} : (e) => this.handleClick(e)}
            onTouchEnd={(e) => this.handleClick(e)}
          >
            <span></span>
          </a>
        </div>

        <div className="mobile-nav-menu">
          <div className="mobile-nav-content">
            <ul>
              <li>
                <a 
                  href="/about"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="/tool"
                >
                  Rap Tool
                </a>
              </li>
              <li>
                <a 
                  href="/videos"
                >
                  Videos
                </a>
              </li>
              <li>
                <a 
                  href="/courses"
                >
                  Courses
                </a>
              </li>
            </ul>
          </div>
        </div>

      </section>

    );

  }
}