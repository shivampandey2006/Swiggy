
import RestaurantsData from "../asset/RestaurentsData"
import Footer from "./Footer";

export default  function Restaurants(){


const Restaurants =
  RestaurantsData[0].data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
console.log(Restaurants.length);
  return (
    <>
   
      <div className="" >
      <div className="ml-[30] mt-[40] mb-[40] text-2xl  font-bold  ">Order From Your Fav One</div>
      <div className="flex gap-10 flex-wrap w-[80%] mx-auto items-center justify-center mb-30 " >
      {
        Restaurants.map((value)=>(
          <div key={value.info.id}className="  w-70   " >
           <div className="h-50 w-70  " >
             <img className="h-full w-full  rounded-2xl "
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