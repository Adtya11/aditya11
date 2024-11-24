import { lato } from "@/fonts";
import { request } from "http";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full max-w-3xl mx-auto p-4 sm:p-6">
      <div
        className={`text-5xl sm:text-6xl lg:text-8xl text-center font-bold ${lato.className}`}
      >
        Hello! <span className="text-purple-500">Aditya</span> here :)
      </div>
      <div className="text-center text-xl sm:text-2xl lg:text-4xl mt-6">
        I build things, passionate about frontend development. This is where I
        write, share my knowledge, and explore ideas.
      </div>
      <div className="mt-10 text-center">
        <Link href="/posts">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-blue-600 font-semibold cursor-pointer hover:underline hover:text-blue-700">
            Read my blogs
          </h2>
        </Link>
      </div>
    </div>
  );
}
