import { Link } from "react-router-dom";
import {
  addItems,
  IncrementItem,
  DecrementItem
} from "../../Stored.js/Slicer1";

import { useDispatch, useSelector } from "react-redux";

export default function InstaMart({ item }) {

  const dispatch = useDispatch();

  // Redux se check karo ki ye item cart me hai ya nahi
  const cartItem = useSelector((state) =>
    state.slice1.items.find((val) => val.id === item.id)
  );

  // Item nahi hai = 0
  // Item hai = uski Redux quantity
  const count = cartItem ? cartItem.quantity : 0;


  function handleAdd() {
    dispatch(addItems(item));
  }


  function handleInc() {
    dispatch(IncrementItem(item));
  }


  function handleDec() {
    dispatch(DecrementItem(item));
  }


  return (
    <>
      <div className="relative">

        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
          alt={item.action.text}
          className="md:h-50 md:w-60 h-40 w-50 object-contain transition transform duration-200 hover:scale-105"
        />


        {count === 0 ? (

          <button
            className="absolute bottom-0 right-0 bg-green-400 rounded-2xl md:p-3 p-1 border-4 border-white text-white font-bold"
            onClick={(e) => {
              e.preventDefault();
              handleAdd();
            }}
          >
            Add
          </button>

        ) : (

          <div className="absolute bottom-0 right-0 flex items-center bg-green-400 rounded-2xl border-4 border-white text-white font-bold">

            <button
              className="md:p-3 p-1"
              onClick={(e) => {
                e.preventDefault();
                handleDec();
              }}
            >
              -
            </button>

            <span className="px-2">
              {count}
            </span>

            <button
              className="p-2"
              onClick={(e) => {
                e.preventDefault();
                handleInc();
              }}
            >
              +
            </button>

          </div>

        )}

      </div>

      <h1 className="text-center items-center text-[18px] font-semi-bold mt-5 font-stretch-75%">
        {item.description}
      </h1>
    </>
  );
}