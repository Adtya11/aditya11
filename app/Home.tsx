import { lato } from "@/fonts";

export default function Home() {
  return (
    <div className="w-9/12 p-6">
      <div className={`text-8xl text-center ${lato.className}`}>
        Hello! <span className="text-purple-500"> Aditya </span> here :)
      </div>
      <div className="text-center text-4xl p-6">
        I build things, passionate in frontend development, this is where I
        write stuff and share my knowledge.
      </div>
    </div>
  );
}
