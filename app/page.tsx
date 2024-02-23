import Image from 'next/image'
import HomePage from '@/app/Home';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <HomePage />
    </main>
  )
}
