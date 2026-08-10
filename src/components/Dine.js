import { Link } from "react-router-dom";
export default function Dine({ value }) {
  return (
   
    
       <Link to="/DineOut">
      <div key ={value.info.id} >
         
        <div className="md:h-50 md:w-70 h-45 w-60  ">
          <img 
          className="h-full w-full rounded-xl "
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${value.info.mediaFiles[0].url}`}></img>
         
        

</div>
<div   >
        <div className="flex-none relative px-auto ml-2 mr-2   text-white font-bold text-xl  " >
          <div className="top-[-30]  left-0 absolute  bg-black/40" >{value.info.name}</div>
          <div className="top-[-30] right-0 absolute bg-green-600">⭐{value.info.rating.value}</div>
          <div></div>
        </div>
        

        <div className="text-[1rem] font-bold font-serif ml-2 " >{value.info.costForTwo}</div>

        <div className="flex justify-between  mr-2 ml-2 text-[1.0919rem] pb-10 text-gray-500   " >
          <div>{value.info.locationInfo.landmarkName}</div>
          <div>{value.info.locationInfo.distanceString}</div>
          </div>
        </div>
      </div>
      </Link>
    
  );
}