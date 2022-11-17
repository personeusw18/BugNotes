import { Link } from "wouter"

export function SingUp () {
  return (
    <form className="flex flex-col gap-2 h-3/4 w-5/6 sm:w-2/3 md:w-1/2 bg-yellow-50 m-auto text-center p-16 mt-4 shadow-lg border-zinc-400 border-opacity-25 border-2 font-cursive text-2xl text-zinc-900 min-w-[300px] min-h-[600px]">

        <div id="pin">
          <div className="absolute left-[calc(30%-13px)] top-[128px] w-6 h-6 rounded-full bg-gradient-to-tr from-rose-900 to-rose-600 outline-1 outline-zinc-800"/>
          <div className="absolute left-[calc(30%-4px)] top-[172px] w-1.5 h-1.5 rounded-full opacity-25 bg-zinc-700 outline-zinc-800"/>
          <div className="absolute left-[calc(30%-2px)] top-[152px] w-0.5 h-6  bg-gradient-to-r from-zinc-600 to-zinc-500 rounded-b-full"/>
        </div>

        <div id="pin">
        <div className="absolute left-[calc(70%-13px)] top-[128px] w-6 h-6 rounded-full bg-gradient-to-tr from-rose-900 to-rose-600 outline-1 outline-zinc-800"/>
          <div className="absolute left-[calc(70%-4px)] top-[172px] w-1.5 h-1.5 rounded-full opacity-25 bg-zinc-700 outline-zinc-800"/>
          <div className="absolute left-[calc(70%-2px)] top-[152px] w-0.5 h-6  bg-gradient-to-r from-zinc-600 to-zinc-500 rounded-b-full"/>
        </div>

        <h1 className="text-4xl mb-4 underline decoration-2">Sign Up</h1>
        <p className="ml-1 text-left underline decoration-1">Email</p>
        <input 
          spellCheck={false}
          className="bg-[#e6e5d9] font-sans text-lg p-2 mx-auto w-full rounded-md hover:outline-dashed hover:outline-2 hover:outline-zinc-300 focus:outline-dashed focus:outline-2 focus:outline-zinc-400"
        />
        <p className="ml-1 text-left underline decoration-1">Password</p>
        <input 
          type="password"
          className="bg-[#e6e5d9] text-lg p-2 mx-auto w-full rounded-md hover:outline-dashed hover:outline-2 hover:outline-zinc-300 focus:outline-dashed focus:outline-2 focus:outline-zinc-400"
        />
        <p className="ml-1 text-left underline decoration-1">Confirm Password</p>

        <input 
          type="password"
          className="bg-[#e6e5d9] text-lg p-2 mx-auto w-full rounded-md hover:outline-dashed hover:outline-2 hover:outline-zinc-300 focus:outline-dashed focus:outline-2 focus:outline-zinc-400"
        />
        <button className="bg-[#e6e5d9] w-3/4 mx-auto mt-4 p-2 rounded-md hover:outline-dashed hover:outline-2 hover:outline-zinc-300 focus:outline-dashed focus:outline-2 focus:outline-zinc-400">Sign Up</button>
        <div className="w-full h-0.5 mt-4 bg-zinc-400 opacity-25"/>
        <p className="text-zinc-900 hover:text-gray-400 mt-2">
          <Link className="group" href="/login">Already have an account?<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-400 transition-all group-hover:w-full"></span></Link></p>
      </form>
  )
}