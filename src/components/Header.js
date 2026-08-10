
import { Link } from "react-router-dom"
import LoginOptions from "./LoginOption"
import Footer from "./Footer"
import Home from "../Home"

export default function Header(){
    return (
        <>
        
        <div className="  bg-orange-600 ">



          
        <div className="header1 flex flex-col md:flex-row items-center  justify-between bg-orange-600 h-50 md:h-30  pt-8 md:pt-15  md:p-10 ">
        
         <div className="flex  md:gap-2 gap-4 "> 
            <div className="flex h-12 sm:h- "  ><  img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSctaMkvaFuimJoGAg-UCZewh-AvIZOGlaMpdi0vYX4ZcPl7EImEYruZE&s=10" className="rounded-xl border-2 border-amber-50 "/></div>
          <div className="pt-2 font-bold bg-orange-600 text-2xl text-white font-sans " >Swiggy</div>
           </div>


           <div className=" flex flex-row gap-5 md:gap-10  flex-wrap md:flex-nowrap  justify-center items-center ">
           
        <div><button className=" text-white text-2x  hover:underline underline-offset-4">Swiggy Corporate</button></div>
         <div> <button className=" text-white  hover:underline underline-offset-4
         ">Partner With US</button></div>
<a
href="#footer"
className="text-white h-10 w-30 padding-4 border-2 border-gray-200 rounded-2xl flex items-center justify-center">

Get the App</a>
  <Link to="/login">  <div className="text-white h-10  w-25 border-2 border-gray-200 rounded-2xl flex items-center justify-center bg-black"><button className="h-10 w-25 " >Sign in</button></div></Link> 
      </div> 
      
          </div>
      

{/* /////////////////////////////////////////////////////////////////////////// */}
<div className="relative flex flex-col justify-center items-center bg-orange-600 p-12 pb-30">

  {/* Left Image */}
  <img
    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
    className="absolute left-0 top-20 h-40 md:h-100 w-auto z-0 pointer-events-none"
  />

  {/* Right Image */}
  <img
    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
    className="absolute right-0 top-20 h-50 md:h-150 w-auto z-0 pointer-events-none"
  />

  {/* Content */}
  <div className="relative z-10 text-3xl font-bold text-white flex justify-center items-center text-center">
    Order food & groceries. Discover best restaurants. Swiggy it!
  </div>

</div>



{/* /////////////////////////////////////////////////////////// */}
{/* CARDS */}
<div className="relative z-10 pb-50 flex gap-12 justify-center flex-row w-full flex-wrap">

  {/* FOOD DELIVERY */}
  <Link to="/restaurants">
    <div className="bg-white rounded-2xl h-52 w-60 p-3 m-2
                    transition duration-200 hover:scale-105">

      <div className="text-xl font-bold">
        FOOD DELIVERY
      </div>

      <div className="text-[14px] font-semibold text-gray-500">
        FROM RESTAURANTS
      </div>

      <div className="text-orange-600 font-bold mt-2">
        UPTO 60% OFF
      </div>

      <div className="flex gap-20 justify-center items-center pt-7">

        <div className="bg-orange-600 h-8 w-8 rounded-full
                        flex items-center justify-center text-white text-xl">
          →
        </div>

        <div className="h-20 w-20">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzGzQhvMg5jolrMk5gXUdyrt5kfiudcYKhFfU9oNbjYg&s=10"
            className="rounded-full h-full w-full object-cover"
            alt="Food"
          />
        </div>

      </div>
    </div>
  </Link>


  {/* INSTAMART */}
  <Link to="/Grocery">
    <div className="bg-white rounded-2xl h-52 w-60 p-3 m-2
                    transition duration-200 hover:scale-105">

      <div className="text-xl font-bold">
        INSTAMART
      </div>

      <div className="text-[14px] font-semibold text-gray-500">
        INSTANT GROCERY
      </div>

      <div className="text-orange-600 font-bold mt-2">
        UPTO 60% OFF
      </div>

      <div className="flex gap-20 justify-center items-center pt-7">

        <div className="bg-orange-600 h-8 w-8 rounded-full
                        flex items-center justify-center text-white text-xl">
          →
        </div>

        <div className="h-20 w-20">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbZQC7eiFQLQsJCvSb37rd4PydlEVXms_PgFmJ5qHydg&s=10"
            className="rounded-full h-full w-full object-cover"
            alt="Grocery"
          />
        </div>

      </div>
    </div>
  </Link>


  {/* DINE OUT */}
  <Link to="/DineOut">
    <div className="bg-white rounded-2xl  h-52 w-60 p-3 m-2
                    transition duration-200 hover:scale-105">

      <div className="text-xl font-bold">
        DINE OUT
      </div>

      <div className="text-[14px] font-semibold text-gray-500">
        EAT OUT & SAVE MORE
      </div>

      <div className="text-orange-600 font-bold mt-2">
        UPTO 70% OFF
      </div>

      <div className="flex gap-20 justify-center items-center pt-7">

        <div className="bg-orange-600 h-8 w-8 rounded-full
                        flex items-center justify-center text-white text-xl">
          →
        </div>

        <div className="h-20 w-20">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExLrd97nxCdDSXxB2iOBHMFsNgmdv8uXTflFADK4fJA&s=10"
            className="rounded-full h-full w-full object-cover"
            alt="Dine Out"
          />
        </div>

      </div>
    </div>
  </Link>

</div>

</div>









        
        
        </>
    )
}