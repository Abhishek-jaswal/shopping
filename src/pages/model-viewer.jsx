import React from 'react';
import { useLocation } from 'react-router-dom';

const ModelViewer = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const videoSrc = params.get('video');
  const overlayImage = params.get('overlay');

  return (
    <div className="relative bg-black min-h-screen flex items-center justify-center">
      {/* 360° video */}
      <video src={videoSrc} autoPlay loop muted className="w-full h-auto max-w-screen-md" />

      {/* Clothing overlay */}
      <img
        src={overlayImage}
        alt="Overlay"
        className="absolute w-full h-auto max-w-screen-md top-0 left-0 opacity-80 pointer-events-none"
      />
    </div>
  );
};

export default ModelViewer;
