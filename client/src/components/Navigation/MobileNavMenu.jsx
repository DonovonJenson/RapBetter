import React from 'react';

const MobileNavMenu = (props) => (

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

);

export default MobileNavMenu;