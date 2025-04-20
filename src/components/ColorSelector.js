import React from 'react';

const colors = ['red', 'blue', 'black'];

const ColorSelector = ({ selectedColor, setSelectedColor }) => {
  return (
    <div className="flex space-x-4">
      {colors.map((color) => (
        <button
          key={color}
          className={`w-10 h-10 rounded-full border-4 transition ${
            selectedColor === color ? 'border-black scale-110' : 'border-gray-300'
          }`}
          style={{ backgroundColor: color }}
          onClick={() => setSelectedColor(color)}
        />
      ))}
    </div>
  );
};

export default ColorSelector;
