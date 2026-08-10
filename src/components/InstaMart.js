import InstaMartData from "../asset/InstaMartData"
import { Link } from "react-router-dom"

import { Outlet } from "react-router-dom"
export default function InstaMart({item}){
   return (
    <>
     


     <Link to="/Grocery" >
<div  className="h-50 w-40   ">
     <img
        
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
          alt={item.action.text}
          className="h-full w-full object-contain"
        
        />
        <h1 className=" text-center items-center text-[18px] font-semi-bold mt-5 font-stretch-75%  ">{item.description}</h1></div>

</Link>
<Outlet></Outlet>

   

    
</>
    
    
   )

    }
