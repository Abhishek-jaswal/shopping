import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Product360Video = () => {
  const [searchParams] = useSearchParams();
  const color = searchParams.get('color') || 'red';

  const videoSrc = '/src/assets/0001-0250.mp4'; // update this path if your video is elsewhere

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center space-y-6 p-4">
      <h2 className="text-2xl font-semibold">
        360&deg; View — Color: <span className="capitalize">{color}</span>
      </h2>

      <video
        src={videoSrc}
        controls
        autoPlay
        loop
        className="max-w-[90%] max-h-[80vh] rounded-lg border border-gray-300 shadow-xl"
      />

      <p className="text-gray-300">
        Previewing the <span className="capitalize">{color}</span> version.
      </p>

      <a href="/" className="text-blue-400 underline hover:text-blue-200 transition">
        ← Back to Product
      </a>
    </div>
  );
};

export default Product360Video;
