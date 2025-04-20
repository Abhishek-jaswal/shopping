// src/pages/ProductPage.jsx

import { useState } from "react";
import Product360Video from "../components/Product360Video";
import ColorSelector from "../components/ColorSelector";

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState("red");

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">360° Dress Try-On</h1>
      <Product360Video selectedColor={selectedColor} />
      <ColorSelector onColorChange={setSelectedColor} />
    </div>
  );
};

export default ProductPage;
