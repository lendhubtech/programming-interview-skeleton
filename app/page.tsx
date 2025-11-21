import Image from 'next/image'

export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto pt-16 px-4">
      <Image src="/lendhub_logo.png" alt="LendHub" width={200} height={50} />
      <h1>Interview Skeleton</h1>
      <p>Ready to code!</p>
    </main>
  )
}
