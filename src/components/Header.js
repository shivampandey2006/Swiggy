
import { Link } from "react-router-dom"
export default function Header(){
    return (
        <>
        
        <div className="z-5000  bg-orange-600 ">



          
        <div className="header1 flex flex-col md:flex-row items-center  justify-between bg-orange-600 h-50 md:h-30  pt-8 md:pt-15  md:p-10 ">
        
         <div className="flex  md:gap-2 gap-4 "> 
            <div className="flex h-12 sm:h- "  ><  img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSctaMkvaFuimJoGAg-UCZewh-AvIZOGlaMpdi0vYX4ZcPl7EImEYruZE&s=10" className="rounded-xl border-2 border-amber-50 "/></div>
          <div className="pt-2 font-bold bg-orange-600 text-2xl text-white font-sans " >Swiggy</div>
           </div>


           <div className=" flex flex-row gap-5 md:gap-14  flex-wrap md:flex-nowrap  justify-center items-center ">
           
        <div><button className=" text-white text-2x">Swiggy Corporate</button></div>
         <div> <button className=" text-white">Partner With US</button></div>
         <div className="  text-white rounded-2xl h-10 w-25 mb-2 "><button className="h-10 w-25 border-2 border-gray-200 rounded-2xl">Get the App</button></div>
         <div className="bg-black  text-white rounded-2xl h-10 w-25 mb-2"><button className="h-10 w-25 ">Sign in</button></div>
      </div>
      
          </div>
      

{/* /////////////////////////////////////////////////////////////////////////// */}


<div className="flex flex-col justify-center align-middle bg-orange-600 p-12 pb-30">
   <div className=""><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png " className=" flex absolute overflow-hidden h-40 md:h-90 w-auto left-0 " /></div>
   <div  className=""><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" className="md:h-120 h-50 w-auto flex absolute  right-0"/></div>
<div className=" z-50 text-3xl font-bold text-white  flex justify-center items-center text-center ">Order food & groceries. Discover best restaurents. Swiggy it! </div>


<div className="z-50 flex gap-4 flex-col md:flex-row items-center justify-center align-middle pt-7">
    <div><button className="bg-white text-black rounded-2xl w-60 h-10">Delhi , India</button></div>
    <div> <input className="bg-white p-3 text-black rounded-2xl md:w-100  h-10 text-[1rem]" placeholder="Search for restaurents , item or more "/></div>
</div>

</div>



{/* /////////////////////////////////////////////////////////// */}

<div className="bg-orange-600 pb-50 flex gap-12 justify-center flex-row w-full flex-wrap ">


<Link to="/restaurants">
<div className="bg-white rounded-2xl h-50  p-2 m-2 z-40">
<div className="text-xl font-bold  ">FOOD DELIVERY</div>
<div className="text-[14px] font-semibold font-gray-500 ">FROM RESTAURENTS</div>
<div className="text-orange-600 font-bold mt-2 ">UPTO 60% OFF</div>
<div className="flex gap-20 justify-center items-center pt-7">
<div className="  bg-orange-600 h-8 w-8 rounded-4xl text-center text-white">{"->"}</div>
<div className="h-20 w-20   z-10000  "><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzGzQhvMg5jolrMk5gXUdyrt5kfiudcYKhFfU9oNbjYg&s=10 " className="rounded-full scale-3d transform-3d h-full w-full  "/></div>
</div>
</div>
</Link>




<Link to="/Grocery">

<div className="bg-white rounded-2xl h-50  p-2 m-2 z-40">
<div className="text-xl font-bold  ">INSTAMART</div>
<div className="text-[14px] font-semibold font-gray-500 ">INSTANT GROCERY</div>
<div className="text-orange-600 font-bold mt-2 ">UPTO 60% OFF</div>
<div className="flex gap-20 justify-center items-center pt-7">
<div className="  bg-orange-600 h-8 w-8 rounded-4xl text-center text-white">{"->"}</div>
<div className="h-20 w-20   z-10000  "><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbZQC7eiFQLQsJCvSb37rd4PydlEVXms_PgFmJ5qHydg&s=10 " className="rounded-full scale-3d transform-3d h-full w-full  "/></div>
</div>
</div>
</Link>




<Link to="/DineOut">

<div className="bg-white rounded-2xl h-50  p-2 m-2 z-40">
<div className="text-xl font-bold  ">DINE OUT </div>
<div className="text-[14px] font-semibold font-gray-500 ">EAT OUT & SAVE MORE</div>
<div className="text-orange-600 font-bold mt-2 ">UPTO 70% OFF</div>
<div className="flex gap-20 justify-center items-center pt-7">
<div className="  bg-orange-600 h-8 w-8 rounded-4xl text-center text-white">{"->"}</div>
<div className="h-20 w-20   z-10000  "><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExLrd97nxCdDSXxB2iOBHMFsNgmdv8uXTflFADK4fJA&s=10" className="rounded-full scale-3d transform-3d h-full w-full  "/></div>
</div>
</div>
</Link>




</div>

</div>









        
        
        </>
    )
}