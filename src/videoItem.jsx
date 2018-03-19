import React from 'react'
import YouTube from 'react-youtube';



var VideoItem = (props) => {
  {console.log(props);}
  return (
  <div className={"main-flexbox-inner-pages__specfic-item"}>
    <YouTube
      videoId={props.video}
      opts={props.options}
    />
  </div>

)};


export default VideoItem;

