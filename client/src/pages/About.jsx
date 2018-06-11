import React from 'react';

import aboutImage from '../../public/images/donovonjenson.jpg';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.toggleImageLoaded = this.toggleImageLoaded.bind(this);
  }

  componentWillMount() {
    setTimeout(this.toggleImageLoaded, 1000);
  }

  toggleImageLoaded() {
    let aboutImage = document.getElementsByClassName('about-image')[0];
    aboutImage.classList.toggle('loaded');
  }


  render() {

    return (

      <section id="about-page" className="page">

        <h1 className="page-title no-select">ABOUT ME</h1>

        <div className="about-content-wrapper">

          <img className="about-image" src={aboutImage}/>

          <div className="about-text-wrapper">
            <p>
              Hey, thanks for taking the time to check out the site! Rap Better is a project dedicated to refining the technical aspects of rapping. 
              My goal is to create content that makes it extremely simple to divide rap into individual skills.
              Once these skills are extracted, the next step is creating tools to practice and improve, that's the goal of this site.
            </p>
            <p>
              I go by Dono and I've been rapping for over ten years and teaching for more than five. 
              I've been making Youtube videos for much of that time and the regular practice allows me to simplify context as well as I can.
              I don't want to rant forever, so if you need anything just reach out and let me know! 
            </p>
          </div>

        </div>

      </section>

    );

  }

}