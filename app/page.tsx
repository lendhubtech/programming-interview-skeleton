import Image from 'next/image'
import StyleGuide from '@/components/StyleGuide'

export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto pt-16 px-4">
      <div className="flex items-center gap-4 mb-4">
        <Image src="/lendhub_logo.png" alt="LendHub" width={200} height={50} />
        <h1>Interview Skeleton</h1>
      </div>
      <p className="mb-[60px]">Ready to code!</p>
      <button className="bg-purple hover:bg-purple-t1 text-white font-bold py-2 px-4 rounded">Go!</button>
      <div className="mt-[60px]">
        <StyleGuide />
      </div>
    </main>
  )
}
