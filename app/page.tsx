'use client'

import Image from 'next/image'
import StyleGuide from '@/components/StyleGuide'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const keyDirectionMap: Record<string, string> = {
        'ArrowUp': 'Up',
        'ArrowDown': 'Down',
        'ArrowLeft': 'Left',
        'ArrowRight': 'Right'
      }

      const direction = keyDirectionMap[event.key]
      if (direction) {
        event.preventDefault()
        alert(direction)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <main className="max-w-screen-lg mx-auto pt-16 px-4">
      <div className="flex justify-center items-center gap-4 mb-8">
        <Image src="/lendhub_logo.png" alt="LendHub" width={200} height={50} />
        <h1>Interview Skeleton</h1>
      </div>
      <div className="flex justify-center mb-8">
        <div className="w-[550px] h-[550px] bg-purple-t2 rounded-lg"></div>
      </div>
      <div className="flex justify-center">
        <button className="bg-purple hover:bg-purple-t1 text-white font-bold py-2 px-4 rounded">Go!</button>
      </div>
      <div className="mt-[60px]">
        <StyleGuide />
      </div>
    </main>
  )
}
