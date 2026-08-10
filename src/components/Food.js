import FoodData from "../asset/FoodData"
import { Link } from "react-router-dom";
export default  function Food({item}){
   return (
  <>
   <Link to="/restaurants">
      <div className="h-40 w-40 transform transition duration-200 hover:scale-110 ">
        <img
          className=""
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
          alt={item.action.text}
        />
      </div>
</Link>
     
    
  </>
);
}