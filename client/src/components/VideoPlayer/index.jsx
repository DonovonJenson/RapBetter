import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = (props) => {

  if (!props.video) {
    return <div className="video-player-wrapper"/>;
  }

  const { video } = props;

  console.log(video);

  let videoId = video.contentDetails.videoId;
  let { title, description } = video.snippet;


  /*
  
  snippet:
    channelId: "UCFIITTpCnANcvAV41rDIJ6A"
    channelTitle: "Donovon Jenson"
    description: "Pick up my comprehensive how to rap course and learn step by step how to rap better (at a discount): https://www.udemy.com/rap-fundamentals/?couponCode=Youtubers↵↵You can pick up my FREE course on writing your first verse here: https://www.udemy.com/write-your-first-rap-verse↵↵For more free resources check out my website: www.rapbetter.com↵↵↵So I got a question about needing some more help counting bars. Now the best way to be able to count bars over any beat is to get practice counting bars across lots of different types of beats. Then, over time, as a new beat comes in you’ll be able to break down the counts and figure out the bars.↵↵Let’s talk about a good way to practice counting bars and use several different beats. If you haven’t already, you’ll want to watch my other video on counting bars. ↵↵You can often use the clap or snare drum to get the 2 and 4 counts out of an instrumental. That should with the vast majority of beats you run into. Otherwise, you want to look for patterns that repeat in sets of four. The way you count bars is one, two, three, four, and it goes along with the rhythm. Let’s go over a bunch of examples. ↵↵https://www.youtube.com/watch?v=5d4oDTDX_8s↵https://www.youtube.com/watch?v=-HYS2Lxxb_Q↵↵If that’s not enough, I’m going to recommend you watch more videos about counting bars. There’s a ton of them out there, each video is going to hit it a little different. Look for ones where they’re actually playing music because that’s going to help you learn the fastest. There’s a relatively longer one out there that does a great job of breaking it out.↵↵You can also try a slightly more involved process of finding rap songs that you know the words too, finding their lyric sheets broken out by bars - then using those to help you learn how to count them. Sometimes, with the words over top of it it’ll be easier to count along with. Try to use rappers who have a relatively slower, less complex flow because it’ll be easier to count out the bars. ↵↵https://www.youtube.com/watch?v=AckhnLpwceM↵http://www.azlyrics.com/lyrics/atmosphere/sunshine.html↵↵https://www.youtube.com/watch?v=cPRKsKwEdUQ↵https://genius.com/Wu-tang-clan-triumph-lyrics↵↵Lots of the sites have the lyrics already broken down in a way each line represents a bar. So try looking those up, move into pure instrumentals counting bars. And before long you should be able to count bars on just about anything - but the core is practice. Start practicing and/or following along with beats! ↵↵To see more videos: http://www.youtube.com/user/donovonjenson↵Facebook: http://www.facebook.com/IAmDonoTG↵Facebook Page: https://www.facebook.com/RapWithDono↵Twitter: @Donovonjenson↵↵Check for updates on my music promotion website:↵http://noteis.us↵Facebook: http://www.facebook.com/noteisus↵Twitter: @Noteisus↵↵That’s all for this video, feel free to ask questions in the comment box below. You can also check out RapBetter.com, which is a community dedicated to creating better rappers. ↵↵*Don’t forget to subscribe*"
    playlistId: "PLB7E22B02CFF47F35"
    position: 23
    publishedAt: "2017-05-16T20:04:07.000Z"
    resourceId: {kind: "youtube#video", videoId: "bkJaTsSfRwI"}
    thumbnails: {default: {…}, medium: {…}, high: {…}, standard: {…}, maxres: {…}}
    title: "How To Rap: Practice Counting Bars (Lots of Examples!)"

  */ 

  return (

    <div className="video-player-wrapper">

      <div className="player-current-video">
        <YouTube videoId={videoId} opts={{height: '100%', width: '100%'}}/>
      </div>

      <div className="player-current-info-wrapper">
        <h2 className="current-info-title">
          {title}
        </h2>

        <div className="current-info-description">
          <div className="description-label">
            Description
          </div>
          <div className="description-content">
            {description}
          </div>
        </div>
      </div>

    </div>

  );

}

export default VideoPlayer;