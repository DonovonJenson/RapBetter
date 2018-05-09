import React from 'react';
import axios from 'axios';

import Jumbotron from '../components/Jumbotron';

import toolImage from '../../public/images/boombox.jpg';
import tutorialImage from '../../public/images/dono4.jpg';
import courseImage from '../../public/images/writeYourFirstVerseCourseImage.jpg';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
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