import Navbar from "../Navbar";
import Icon_bar from "./Icons_bar";
function Home(){
    return(
        <div
  className="
  w-full
    h-screen
    bg-[#e8e8e8]
    bg-[linear-gradient(to_right,#d9d9d9_1px,transparent_1px),linear-gradient(to_bottom,#d9d9d9_1px,transparent_1px)]
    bg-[size:40px_40px]
  "
>
   <Navbar></Navbar>
    <h1 className="text-[44px] md:text-[72px] font-bold tracking-[0.25em] leading-tight text-center mt-26">
  TOKENIZING <br />
  HYDRATION
</h1>
<div className="w-64 h-[2px] bg-black mx-auto animate-pulse"></div>

<h1 className="text-[20px] mt-1 text-center">PURE. REFRISHING. BLOCKCHAIN-POWERD  </h1>


<Icon_bar></Icon_bar>



</div>
    )
}
export default Home;