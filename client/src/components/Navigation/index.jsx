import React from 'react';

import Logo from './Logo';
import Links from './Links';
import MobileNavToggle from './MobileNavToggle';
import MobileNavMenu from './MobileNavMenu';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { isMobile } = this.props;

    return (

      <section className="navigation">

        <Logo />

        <Links />

        <MobileNavToggle isMobile={isMobile}/>

        <MobileNavMenu />

      </section>

    );

  }
}