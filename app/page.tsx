import Image from 'next/image'
import HomePage from '@/app/Home';

export default function Home() {
  return (
    <main className="flex h-[80vh] flex-col items-center justify-between p-6 sm:p-12 md:p-24 bg-white">
      <HomePage />
    </main>
  );
}