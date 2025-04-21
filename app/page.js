'use client'
import { useRouter } from 'next/navigation'

const clothes = [
  {
    name: 'Red Dress',
    src: '/clothes/red-dress.png',
  },
  {
    name: 'Blue Top',
    src: '/clothes/blue-top.png',
  },
]

export default function HomePage() {
  const router = useRouter()

  const handleClick = (item) => {
    const query = new URLSearchParams({ outfit: item.src }).toString()
    window.open(`/tryon?${query}`, '_blank')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-6">Try-On Shopping Portal</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {clothes.map((item, i) => (
          <div
            key={i}
            className="cursor-pointer p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
            onClick={() => handleClick(item)}
          >
            <img src={item.src} alt={item.name} className="w-full h-64 object-contain" />
            <p className="mt-2 text-center font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
