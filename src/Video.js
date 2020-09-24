import React, { useRef, useState } from 'react';
import "./Video.css";
import VideoFooter from './VideoFooter';

function Video() {
const [playing, setPlaying] = useState(false);  

const videoRef = useRef(null);

const handleVideoPress = () => {
  if (playing) {
    videoRef.current.pause();
    setPlaying(false);
  } else {
    videoRef.current.play();
    setPlaying(true);
  }
}

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}  
        className="video__player" 
        loop 
        ref={videoRef}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      ></video>

      <VideoFooter/>

    </div>  

    
  )
}

export default Video

