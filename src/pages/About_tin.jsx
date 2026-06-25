import tin1 from "../assets/tin1.png"
function About_tin(){
    return(
<div  className="
  w-full
    h-[120%]
    bg-[#e8e8e8] pb-3
    bg-[linear-gradient(to_right,#d9d9d9_1px,transparent_1px),linear-gradient(to_bottom,#d9d9d9_1px,transparent_1px)]
    bg-[size:40px_40px] flex  gap-3 mt-10 justify-around 
  "
>  {/* main container */}

    <div className="flex flex-col justify-around flex-1 ml-14">{/*  */}
       <div className=""> {/* left conatiner */}
        <h1  className="">Pre-Trade Energy</h1>
        <h1 className="font-bold text-5xl tracking-[0.25em]  ">Solana <br /> Splash</h1>
        <p className="">330ml with Zero Sugar</p>
        </div>
        
        <div>
           <h1 className="mb-3">INGREDIENTS</h1>
           <p>Caffeine, Natural Flavor, Magnesium <br /> Citrate, Sodium Citrate, Stevia Extract</p>
        </div>
        
        </div>

        {/* mid conatiner */}
        <div className="flex-1 border-black border-2 rounded-3xl overflow-hidden bg-white">
            <img src={tin1} alt="hydro tin" className="w-full h-full object-cover animate-[bounce_3s_infinite]" />

        </div>

        {/* right conatiner */}
        <div className="flex-1   mr-14 flex flex-col justify-between ">
            <div className="flex flex-col items-center ">
             <h1 className="mb-3">INTRODUCTION TO DRINK</h1>
            <p>Solana Splash by HydroFlow 
                is the world’s  <br />first tokenized energy drink, blending  <br />
                cutting-edge blockchain innovation with  <br />peak performance. Designed for 
                the  <br />modern trader, Solana Splash combines <br /> refreshing taste with tokenized <br /> transparency,
                 redefining how you hydrate <br /> and energize.</p>
            </div>

                 <div className="">
                    <button className=" ml-5 bg-orange-400 px-7 py-2 rounded  border-1 border-amber-300 hover:bg-white">Rotate Hydrowflow</button>
                 </div>

        </div>

</div>
    )
}
export default About_tin;