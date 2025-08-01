// components/Slideshow.tsx
'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const images = [
  '/review1.png',
  '/review2.png',
  '/review3.png'
]

const SmallScreenSlideShow = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-[400px] h-[280px] max-w-full max-h-full rounded-xl overflow-hidden shadow-lg bg-[#8f8d8d] min-sm:hidden">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Slide ${index}`}
          fill
          className={`object-contain transition-opacity duration-1000 ${
    index === current ? 'opacity-100' : 'opacity-0'
  }`}
        />
      ))}
    </div>
  )
}

export default SmallScreenSlideShow
