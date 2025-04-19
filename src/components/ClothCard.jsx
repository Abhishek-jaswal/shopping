export default function ClothCard({ cloth }) {
    const handleTryOn = () => {
      window.open(`/model-viewer?item=${encodeURIComponent(cloth.image)}`, '_blank');
    };
  
    return (
      <div className="border rounded p-3 bg-white shadow">
        <img src={cloth.image} alt={cloth.name} className="w-full h-40 object-contain mb-2" />
        <h3 className="text-center font-medium">{cloth.name}</h3>
        <button
          onClick={handleTryOn}
          className="mt-2 w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700"
        >
          Try On
        </button>
      </div>
    );
  }
  