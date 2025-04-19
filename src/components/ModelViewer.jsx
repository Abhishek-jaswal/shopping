import React from "react";

const ModelViewer = ({ videoSrc }) => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <video
        controls
        autoPlay
        loop
        muted
        className="max-h-full max-w-full rounded-lg shadow-lg"
      >
        <source src={videoSrc} type="video/webm" />
        <source src={videoSrc} type="video/mp4" />
        <source src={videoSrc} type="video/x-matroska" /> {/* For mkv */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ModelViewer;
