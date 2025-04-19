import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-purple-700">Fashion 360 Shop</h1>

      {/* Button to open preview in new tab */}
      <a
        href="/preview"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl transition-all shadow-lg"
      >
        View 360° Preview
      </a>
    </div>
  );
}

export default App;
