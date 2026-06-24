function App(){
  return(
    <div className="w-full flex justify-center pt-8 text-black ">
      <nav className="w-[88%] bg-white flex md:justify-between py-3 px-3 shadow-2xl rounded-xl items-center  ">
        <h1>HYDRA</h1>

        <ul className="flex gap-6 items-center">
          <li className="hover:opacity-15">HOME</li>
          <li>ABOUT</li>
          <li>TESTIMONIALS</li>
          <li>FAQ</li>
        </ul>
        <button className="bg-orange-400 px-2 py-2 rounded-xl border-1 border-amber-300 hover:bg-white">Coming soon</button>
      </nav>

    </div>
  )
}
export default App;