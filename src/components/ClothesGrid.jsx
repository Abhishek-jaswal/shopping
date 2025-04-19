import ClothCard from './ClothCard';

const clothes = [
  { id: 1, name: 'Shirt A', image: '/assets/clothes/shirt1.png' },
  { id: 2, name: 'Jacket B', image: '/assets/clothes/jacket1.png' },
  // Add more as needed
];

export default function ClothesGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {clothes.map((cloth) => (
        <ClothCard key={cloth.id} cloth={cloth} />
      ))}
    </div>
  );
}
