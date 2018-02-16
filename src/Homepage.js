import React from 'react';
import Navbar from './navbar.js';
import Raptools from './raptool.js';
import Videos from './videos.js';
import About from './about.js';
/**
 * A counter button: tap the button to increase the count.
 */
class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
 
  render() {
    return (
      <div>
        <Navbar />
        <Raptools />
        <Videos />
        <About />
      </div>
    );
  }
}
export default Homepage;