function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col justify-center items-center">

      <img
        src="https://i.pravatar.cc/200"
        alt="profile"
        className="w-40 h-40 rounded-full border-4 border-cyan-400"
      />

      <h1 className="text-5xl font-bold mt-6">
        Arjun K Sabu
      </h1>

      <p className="text-cyan-300 text-xl mt-4">
        Oceanographer | Researcher
      </p>

      <p className="max-w-xl text-center mt-6 text-slate-300">
        Passionate about ocean science, climate systems,
        and scientific computing.
      </p>

      <button className="mt-8 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl">
        View My Work
      </button>

    </div>
  )
}

export default App