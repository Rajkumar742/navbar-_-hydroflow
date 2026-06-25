function Navbar(){
  return(
    <div className="w-full flex justify-center  text-black fixed top-1 z-10 ">
      <nav className="w-[88%] bg-white flex md:justify-between py-3 px-3 shadow-2xl rounded-xl items-center  ">
        <h1>HYDRA</h1>

        <ul className="flex gap-6 items-center">
          <li className="hover:opacity-15">HOME</li>
          <li className="hover:opacity-15">ABOUT</li>
          <li className="hover:opacity-15">TESTIMONIALS</li>
          <li className="hover:opacity-15">FAQ</li>
        </ul>
        <button className="bg-orange-400 px-2 py-2 rounded-xl border-1 border-amber-300 hover:bg-white">Coming soon</button>
      </nav>

    </div>
  )
}
export default Navbar;