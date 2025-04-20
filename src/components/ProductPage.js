import React, { useState } from 'react';
import ColorSelector from '../components/ColorSelector';

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState('red');

  const handleTryOn = () => {
    window.open(`/video-view?color=${selectedColor}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Virtual Try-On</h1>

      <img
        src="/shirt-preview.png"
        alt="Shirt Preview"
        className="w-60 h-60 mb-4 object-cover rounded shadow"
      />

      <ColorSelector selectedColor={selectedColor} setSelectedColor={setSelectedColor} />

      <button
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        onClick={handleTryOn}
      >
        View in 360°
      </button>
    </div>
  );
};

export default ProductPage;
