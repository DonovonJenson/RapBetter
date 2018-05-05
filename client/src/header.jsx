import React from 'react'

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
 
  render() {
    return (
  <div className="inner-pages-title-center">
    <div className="main-title-inner-pages">
      <div className="main-title-inner-pages--content">
        <div className="header-titles-container__title">Rap Better</div>
        <div className="header-titles-container__subheader-title">Here is risen lyricism</div>
      </div>
    </div>
  </div>
    );
  }
}

export default Header