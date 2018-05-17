import React from 'react';

const VideoListEntry = (props) => {

  if (!props.video) {
    return (<div index={index} className="videos-list-entry no-select" />);
  }

  const { clickHandler, index, selectedIndex, video } = props;

  let date = new Date(video.snippet.publishedAt).toDateString();
  let selected = selectedIndex === index ? 'current' : '';

  return (

    <div index={index} className={`videos-list-entry ${selected} no-select`} 
      onClick={() => clickHandler(index)}
    >
      <img src={video.snippet.thumbnails.standard.url} className="videos-list-entry-image"/>
      <div className="list-entry-title-wrapper">
        <div className="list-entry-title">
          {video.snippet.title}
        </div>
        <div className="list-entry-description">
          {`Added: ${date}`}
        </div>
      </div>
    </div>

  );

};

export default VideoListEntry;