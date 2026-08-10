import { useSelector } from "react-redux";

export default function ShowListItems() {
  const items = useSelector((state) => state.slice1.items);
 const count1 = useSelector((state) => state.slice1.count);
  return (
    <>
      <div className=" min-h-screen bg-orange-400  flex flex-col items-center justify-center gap-3
      " >
        <div className="bg-orange-100 px-3 py-1 font-bold rounded-xl ">Your Cart :{count1} </div>
     {items.map((val, index) => (
  <div className="bg-orange-600 w-[80%] rounded-xl  text-center " key={`${val.id}-${index}`}>
 <div className="text-white "> # {val.description}</div>
<p className="font-semibold">Quantity: {val.quantity}</p>
  </div>
))}


      </div>
    </>
  );
}