export function Login () {
  return (
    // <div className="h-full w-full justify-center align-middle">

      

      <form className="flex flex-col gap-2 h-3/4 w-1/2 bg-yellow-50 m-auto text-center p-16 mt-4 shadow-lg border-zinc-400 border-opacity-25 border-2 font-cursive text-2xl text-zinc-900 min-w-[300px]">

        <div id="pin">
          <div className="absolute left top w-6 h-6 rounded-full bg-gradient-to-tr from-rose-900 to-rose-600 outline-1 outline-zinc-800"/>
          <div className="absolute left-[calc(50%-4px)] top-[12px] w-1.5 h-1.5 rounded-full opacity-25 bg-zinc-700 outline-zinc-800"/>
          <div className="absolute left-[calc(50%-2px)] w-0.5 h-6 -top-2 bg-gradient-to-r from-zinc-600 to-zinc-500 rounded-b-full"/>
        </div>

        <div id="pin">
          <div className="absolute left-[calc(50%-13px)] -top-8 w-6 h-6 rounded-full bg-gradient-to-tr from-rose-900 to-rose-600 outline-1 outline-zinc-800"/>
          <div className="absolute left-[calc(50%-4px)] top-[12px] w-1.5 h-1.5 rounded-full opacity-25 bg-zinc-700 outline-zinc-800"/>
          <div className="absolute left-[calc(50%-2px)] w-0.5 h-6 -top-2 bg-gradient-to-r from-zinc-600 to-zinc-500 rounded-b-full"/>
        </div>

        <h1 className="text-4xl mb-4">Log In</h1>
        <p className="text-left">Email</p>
        <input className="mx-auto w-full"/>
        <p className="text-left">Password</p>
        <input className="mx-auto w-full"/>
        <button className="bg-zinc-400 bg-opacity-25 w-3/4 mx-auto mt-4 p-2 rounded-sm">Log In</button>
        <div className="w-full h-0.5 mt-4 bg-zinc-400 opacity-25"/>
        <p className="text-zinc-500"><a href="/signup">Already have an account?</a></p>
      </form>
    // </div>
  )
} 