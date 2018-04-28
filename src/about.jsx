import React from 'react'

var testSprite  = {
      width: '40px',
      height: '40px',
      background: `url(twobytwoTransparent.gif) 0 0`
    }

var About = () => {
  return (
      <div className="main-flexbox-inner-pages">
        <div className="about-page-flexbox">     
          <img className="about-image" src="./images/donovonjenson.jpg"/>
          <div className="about-text">
            <div className="about-text--overall-height-container">
              <p>
                Lorem ipsum dolor sit amet, autem velit usu ut. Quo no aeque altera atomorum. 
                Pro no nisl eligendi electram, cu suas consetetur delicatissimi duo, officiis 
                efficiendi usu te. Quo ea amet primis, mel corrumpit signiferumque te. Mandamus 
                definitionem eu his, has eruditi maiorum albucius ne, id utinam regione meliore 
                pro.
              </p>

               <p>
                Vel ne viderer facilis eleifend, qui ei laudem aliquam dolores, mei ea nonumy 
                aliquando repudiandae. Ad mea dico suavitate sadipscing. Pertinacia democritum 
                his ad. Pri scripta nonumes fabellas ex. 
              </p>
            </div>
          </div>
        </div>
  </div>
)}

export default About;