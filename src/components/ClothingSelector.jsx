import React from 'react';

const clothes = [
  {
    id: 1,
    name: 'Shirt 1',
    image: '/assets/clothes/shirt1.png',
    modelVideo: '/assets/model-rotation/dress360.mkv', // same video for now
  },
  {
    id: 2,
    name: 'Jacket',
    image: '/assets/clothes/jacket1.png',
    modelVideo: '/assets/model-rotation/dress360.mkv',
  },
];

const ClothingSelector = () => {
  const handleSelect = (item) => {
    const url = `/model-viewer?video=${encodeURIComponent(item.modelVideo)}&overlay=${encodeURIComponent(item.image)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Select Clothing</h2>
      <div className="grid grid-cols-2 gap-4">
        {clothes.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-2 cursor-pointer hover:shadow-lg transition"
            onClick={() => handleSelect(item)}
          >
            <img src={item.image} alt={item.name} className="w-full h-auto" />
            <p className="text-center mt-2">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClothingSelector;
