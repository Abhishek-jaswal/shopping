// src/VideoPlayer.js
import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="video-player-container">
      <ReactPlayer
        url={videoUrl}
        playing
        controls
        width="100%"
        height="100%"
        loop
      />
    </div>
  );
};

export default VideoPlayer;
