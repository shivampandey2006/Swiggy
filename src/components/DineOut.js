

import LowHeader from "./LowHeader";
import Footer from "./Footer";
import GroceryData from "../asset/GroceryData";
import Dine from "./Dine";
import DineData from "../asset/DineData";







export default function DineOut (){
return (

    <>
    <LowHeader></LowHeader>
       
   

<div className="   bg-gray-100 " >

<div className="  font-semibold font-sans text-wrap pl-[15] pb-[34] pt-[35] wrap-break-word text-[1.4rem]  font-stretch-150% sticky bg-gray-100 top-0 z-100 " > Discover best restaurants on Dineout </div>
<div className=" flex flex-wrap gap-10 ml-15 mr-15 justify-center items-center " >
 {
  DineData.map((value)=>(

    <Dine key={value.info.id} value={value}></Dine>
  )

  )
 }</div>



</div>






    
    <Footer></Footer>
    
    </>
)
}