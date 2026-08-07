
import { useState } from "react";
import RestaurantsData from "../asset/RestaurentsData"
import Footer from "./Footer";
import LowHeader from "./LowHeader";



const Rest =
  RestaurantsData[0].data.cards[2].card.card.gridElements.infoWithStyle.restaurants;

export default  function Restaurants(){


  const [Cafe , SetCafe] = useState(Rest)
  
function SortedByCost() {
  const SortedCost = [...Cafe].sort((a, b) => {
    const costA = parseInt(a.info.costForTwo.replace(/\D/g, ""));
    const costB = parseInt(b.info.costForTwo.replace(/\D/g, ""));
    return costA - costB;
  });

  SetCafe(SortedCost);
}

  return (
    <>
   <LowHeader></LowHeader>
      <div className=" bg-gray-100" >
    <div>  <button className="ml-10 mt-10 bg-orange-600 p-2 rounded-2xl text-white text-[20px] cursor-pointer hover:bg-orange-500  " onClick={SortedByCost}>Sort By Price</button></div>  
      <div className="ml-[30] mt-[40] mb-[40] text-2xl  font-bold  ">Order From Your Fav One</div>
      <div className="flex gap-10 flex-wrap w-[80%] mx-auto items-start justify-center mb-30 " >
      {
        Cafe.map((value)=>(
          <div key={value.info.id}className="  w-70   " >
           <div className="h-50   " >
             <img className="object-cover h-full w-full  rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105  "
              src={`https://media-assets.swiggy.com/swiggy/image/upload/${value.info.cloudinaryImageId}`} />
            </div>


       <div className="flex justify-between w-[94%] mx-auto  ">     
  <div className="text-lg font-semibold text-wrap " >{value.info.name}</div>
<div className="text-sm font-medium text-gray-500">✨{value.info.avgRating}</div>
</div>
<div className="text-base font-semibold ml-[3%] " >{value.info.costForTwo}</div>
           </div>
        ))
      }
</div>
      </div>
    <Footer></Footer>
    </>
  )
  }