import LowHeader from "./LowHeader";
import Footer from "./Footer";
import GroceryData from "../asset/GroceryData";
import InstaMart from "./InstaMart";
import InstaMartData from "../asset/InstaMartData";

const newGrocery = GroceryData.card.gridElements.infoWithStyle.info;

export default function Grocery() {
  return (
    <>
  
      <LowHeader  />
    
      <div className="bg-gray-100  ">
  <div className="   text-[25px]  font-bold sticky top-0 block z-10 pl:md-5 pt-4 pb-4 pl-10 bg-gray-100" >InstaMart</div>
       <div className=" mt-5 flex justify-center items-center  w-[80%] mx-auto flex-wrap gap-15 z-10 ">
   {
  InstaMartData.map((item) => (
    <div key={item.id} className="mb-10" >
      <InstaMart item={item} />
    </div>
  ))
}
   </div>
   </div>
      <Footer />
    </>
  );
}