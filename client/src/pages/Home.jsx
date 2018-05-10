import React from 'react';
import axios from 'axios';

import Jumbotron from '../components/Jumbotron';

import toolImage from '../../public/images/boombox.jpg';
import tutorialImage from '../../public/images/dono4.jpg';
import courseImage from '../../public/images/writeYourFirstVerseCourseImage.jpg';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.toggleClassByTarget = this.toggleClassByTarget.bind(this);
    this.toggleContentSections = this.toggleContentSections.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.toggleContentSections);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleContentSections);
  }
  
  toggleClassByTarget(collection, target, activeClass) {
    collection.forEach((el, index) => {
      let toggled = collection[index].classList.value.includes(activeClass); 
      if (index === target) {
        toggled ? null : el.classList.toggle(activeClass);
        el.classList.value.includes('down') ? el.classList.toggle('down') : null;
        el.classList.value.includes('up') ? el.classList.toggle('up') : null;
      } else {
        if (index < target) {
          el.classList.value.includes('down') ? null : el.classList.toggle('down');
          el.classList.value.includes('up') ? el.classList.toggle('up') : null;
        } else {
          el.classList.value.includes('down') ? el.classList.toggle('down') : null;
          el.classList.value.includes('up') ? null : el.classList.toggle('up');
        }
        toggled ? el.classList.toggle(activeClass) : null;
      }
    });
  }

  toggleContentSections() {
    let offset = window.pageYOffset;
    let center = window.innerHeight / 2;

    let adjustedOffset = offset + center;

    let gutterHeight = document.getElementsByClassName('navigation-gutter')[0].scrollHeight;
    let jumbotronHeight = document.getElementsByClassName('jumbotron')[0].scrollHeight;
    let pages = Array.prototype.slice.call(document.getElementsByClassName('page'));
    let features = Array.prototype.slice.call(document.getElementsByClassName('product-feature'));

    let bufferHeight = gutterHeight + jumbotronHeight;
    
    let pageHeight_1 = {start: bufferHeight, end: bufferHeight + pages[0].scrollHeight};
    let pageHeight_2 = {start: pageHeight_1.end, end: pageHeight_1.end + pages[1].scrollHeight};
    let pageHeight_3 = {start: pageHeight_2.end, end: pageHeight_2.end + pages[2].scrollHeight};

    if (adjustedOffset >= pageHeight_1.start && adjustedOffset <= pageHeight_1.end) {
      this.toggleClassByTarget(features, 0, 'loaded');
    } else if (adjustedOffset >= pageHeight_2.start && adjustedOffset <= pageHeight_2.end) {
      this.toggleClassByTarget(features, 1, 'loaded');
    } else if (adjustedOffset >= pageHeight_3.start && adjustedOffset <= pageHeight_3.end) {
      this.toggleClassByTarget(features, 2, 'loaded');
    } else {
      this.toggleClassByTarget(features, null, 'loaded');
    }

  }


  render() {

    return (

      <section id="home-page">

        <Jumbotron />

        <section id="rap-tool" className="page bg-gradient">

          <div className="product-feature">

            <div className="product-feature-description-wrapper swap">
              <div className="product-feature-title">
                <h1>Rap Tool</h1>
              </div>
              <div className="product-feature-description">
                <p>
                  Use this tool designed to fuel your rhymes & to work your rhythm
                </p>
                <a href="/tool">
                  <button className="button-std">
                    Go To Tool
                  </button>
                </a>
              </div>
            </div>

            <div className="product-feature-image-wrapper swap">
              <img className="product-feature-image" src={toolImage}/>
            </div>

          </div>

        </section>

        <section id="tutorials" className="page bg-gradient">

          <div className="product-feature">
            
            <div className="product-feature-image-wrapper">
              <img className="product-feature-image" src={tutorialImage}/>
            </div>

            <div className="product-feature-description-wrapper">
              <div className="product-feature-title">
                <h1>Tutorial Videos</h1>
              </div>
              <div className="product-feature-description">
                <p>
                  Beginner-friendly videos intended for those looking for tips to elevate their rap game
                </p>
                <a href="/videos">
                  <button className="button-std">
                    Watch Tutorials
                  </button>
                </a>
              </div>
            </div>

          </div>

        </section>

        <section id="courses" className="page bg-gradient">

          <div className="product-feature">


            <div className="product-feature-description-wrapper swap">
              <div className="product-feature-title">
                <h1>Full Courses</h1>
              </div>
              <div className="product-feature-description">
                <p>
                  Like the tutorials?  Checkout these full length courses hosted on Udemy!
                </p>
                <a href="/courses">
                  <button className="button-std">
                    View Courses
                  </button>
                </a>
              </div>
            </div>
            <div className="product-feature-image-wrapper swap">
              <img className="product-feature-image" src={courseImage}/>
            </div>

          </div>

        </section>

      </section>

    );

  }

};