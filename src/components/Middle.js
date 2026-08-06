import FoodData from "../asset/FoodData";
import InstaMartData from "../asset/InstaMartData";
import InstaMart from "./InstaMart";
import Food from "./Food";
import Dine from "./Dine";
import DineData from "../asset/DineData";

export default function Middle(){
    return (

        <>
 <div>  <h1 className="mt-15  ml-[15%] wrap-break-word text-[1.2rem] font-bold font-serif p-3 ">Order Our Best Food Options</h1></div>
       
      <div className=" h-60 mr-[15%] ml-[15%] mb-15 mt-15 flex gap-8 overflow-x-scroll whitespace-nowrap ">
        { FoodData.map((item)=>(
           <Food key={item.id} item={item}></Food>
         ))}

      
      </div>

    {/* above is food card */}
<div>
<div>  <h1 className=" mt-15  ml-[15%] wrap-break-word text-[1.2rem] font-bold font-serif p-3 ">Order Our Best Grocery </h1></div>
       
  <div className=" h-70 mr-[15%] ml-[15%] mb-15 mt-15  flex  gap-8 overflow-x-scroll whitespace-nowrap ">
    {
      InstaMartData.map((item)=>(
        <InstaMart key={item.id} item={item}></InstaMart>
      )

      )
    }
   </div>
   </div>
{/* above is InstaMart Card  */}






<div className="pb-10" >

<div className="  font-semibold font-sans text-wrap pl-[15%] pb-[7%] wrap-break-word text-[1.4rem]  " >Discover best restaurants on Dineout</div>
<div className="flex flex-nowrap gap-7 w-[70%] container mx-auto overflow-x-scroll " >
 {
  DineData.map((value)=>(

    <Dine key={value.info.id} value={value}></Dine>
  )

  )
 }</div>

</div>




        </>
    )
}


{/* <div className="w-52 h-full shrink-0 "><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png" className=""/>
       </div> */}