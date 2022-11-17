import { Link } from "wouter";

export function Home () {
  return (
    <div className="w-full h-full font-cursive mt-6 flex flex-col text-center p-4 gap-4">
      <h1 className="text-4xl mb-10">Welcome to Bug Notes</h1>
      <div className="flex-row w-full">
        <Link href="/signup">
          <button className="w-52 text-gray-300 text-xl bg-slate-900 max-w-[1/3] mx-auto p-2 rounded-md hover:outline-dashed hover:outline-2 hover:outline-zinc-300 focus:outline-dashed focus:outline-2 focus:outline-zinc-400">Login</button>
        </Link>
        
        <Link href="/signup">
          <button className="ml-16 w-52 text-gray-300 text-xl bg-slate-900 max-w-[1/3] mx-auto p-2 rounded-md hover:outline-dashed hover:outline-2 hover:outline-zinc-300 focus:outline-dashed focus:outline-2 focus:outline-zinc-400">Sing Up</button>
        </Link>
      </div>

    </div>
  )
}