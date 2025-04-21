'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function TryOnPage() {
  const searchParams = useSearchParams()
  const outfit = searchParams.get('outfit')
  const [overlay, setOverlay] = useState(null)

  useEffect(() => {
    if (outfit) {
      setOverlay(outfit)
    }
  }, [outfit])

  return (
    <div className="relative h-screen w-screen bg-black overflow-hidden flex items-center justify-center">
      <video
        src="/videos/model-360.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />
      {overlay && (
        <img
          src={overlay}
          alt="Dress Overlay"
          className="absolute top-1/2 left-1/2 w-64 h-auto transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        />
      )}
    </div>
  )
}
