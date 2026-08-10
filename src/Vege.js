//import { useEffect,  } from "react";
import {useState ,  useEffect  } from "react";
import LowHeaderHeader from "./components/Header";
import Footer from "./components/Footer";
import LowHeader from "./components/LowHeader";
// export default function Vege() {
//   const [vege, setVege] = useState([]);
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     async function getVege() {
//       const response = await fetch(
//         "https://api.shoopy.in/api/v3/web/org/252374/super-products?online-only=true&store-id=258094&child-cat-products=true&page=0&size=20&param=root-cat-slugs&value=vegetables&param=cat-slugs&value=vegetables&sort-by=createdAt,desc"
//       );

//       const data = await response.json();

//       setVege(data.payload.super_products.content);
//     }

//     getVege();
//   }, []);

//   function addToCart(product) {
//     setCart((oldCart) => {
//       const existing = oldCart.find(
//         (item) => item.super_prod_sku === product.super_prod_sku
//       );

//       if (existing) {
//         return oldCart.map((item) =>
//           item.super_prod_sku === product.super_prod_sku
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }

//       return [...oldCart, { ...product, quantity: 1 }];
//     });
//   }

//   function increase(id) {
//     setCart((oldCart) =>
//       oldCart.map((item) =>
//         item.super_prod_sku === id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       )
//     );
//   }

//   function decrease(id) {
//     setCart((oldCart) =>
//       oldCart
//         .map((item) =>
//           item.super_prod_sku === id
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   }

//   const cartCount = cart.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

//   const cartTotal = cart.reduce(
//     (total, item) => total + item.sale_price * item.quantity,
//     0
//   );

//   return (
//     <div className="p-10">

//       {/* Cart Summary */}
//       <div className="fixed right-5 top-5 z-50 bg-white shadow-lg rounded-xl p-4">
//         🛒 Cart: {cartCount}
//         <p className="font-bold">Total: ₹{cartTotal}</p>
//       </div>

//       {/* Products */}
//       <div className="flex flex-wrap gap-8 justify-center mt-20">

//         {vege.map((item) => (
//           <div
//             key={item.super_prod_sku}
//             className="w-60 p-4 rounded-xl shadow-lg"
//           >
//             <img
//               src={item.thumbnail}
//               alt={item.name}
//               className="w-full h-48 object-contain"
//             />

//             <h2 className="font-bold mt-3">
//               {item.name}
//             </h2>

//             <div className="flex gap-3 mt-2">
//               <span className="font-bold">
//                 ₹{item.sale_price}
//               </span>

//               {item.mrp !== item.sale_price && (
//                 <span className="line-through text-gray-500">
//                   ₹{item.mrp}
//                 </span>
//               )}
//             </div>

//             <button
//               onClick={() => addToCart(item)}
//               className="bg-green-600 text-white px-4 py-2 rounded-lg mt-3 cursor-pointer"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}

//       </div>

//       {/* Cart */}
//       <div className="mt-16">
//         <h1 className="text-3xl font-bold">
//           Cart
//         </h1>

//         {cart.map((item) => (
//           <div
//             key={item.super_prod_sku}
//             className="flex items-center gap-5 mt-5"
//           >
//             <p className="w-60">
//               {item.name}
//             </p>

//             <button
//               onClick={() => decrease(item.super_prod_sku)}
//               className="px-3 py-1 bg-gray-200 rounded"
//             >
//               -
//             </button>

//             <span>{item.quantity}</span>

//             <button
//               onClick={() => increase(item.super_prod_sku)}
//               className="px-3 py-1 bg-gray-200 rounded"
//             >
//               +
//             </button>

//             <span>
//               ₹{item.sale_price * item.quantity}
//             </span>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }




// Api integrate 
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import AddToCart from "./components/AddToCart";

export default function Vege() {
  const [veg, setVeg] = useState([]);

  useEffect(() => {
    async function GetVeg() {
      const vegData = await fetch(
        "https://api.shoopy.in/api/v3/web/org/252374/super-products?online-only=true&store-id=258094&child-cat-products=true&page=0&size=20&param=root-cat-slugs&value=vegetables&param=cat-slugs&value=vegetables&sort-by=createdAt,desc"
      );

      const falData = await fetch(
        "https://api.shoopy.in/api/v3/web/org/252374/super-products?online-only=true&store-id=258094&child-cat-products=true&page=0&size=20&param=root-cat-slugs&value=fresh-fruits&param=cat-slugs&value=fresh-fruits&sort-by=createdAt,desc"
      );

      const newVeg = await vegData.json();
      const newFal = await falData.json();

      const vegetables =
        newVeg?.payload?.super_products?.content || [];

      const fruits =
        newFal?.payload?.super_products?.content || [];

      const allProducts = [...vegetables, ...fruits];

      setVeg(allProducts);
    }

    GetVeg();
  }, []);


if (veg.length === 0) {
  let skeleton = [];

  for (let i = 0; i < 20; i++) {
    skeleton.push(
      <div
        key={i}
        className="bg-white rounded-xl p-4 shadow-md animate-pulse"
      >
        <div className="h-40 w-full bg-gray-200 rounded-lg"></div>

        <div className="h-5 w-3/4 bg-gray-200 rounded mt-5"></div>

        <div className="flex gap-2 mt-4">
          <div className="h-4 w-16 bg-gray-200 rounded"></div>
          <div className="h-4 w-20 bg-gray-200 rounded"></div>
        </div>

        <div className="h-10 w-full bg-gray-200 rounded-lg mt-4"></div>
      </div>
    );
  }

  return (
    <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
      {skeleton}
    </div>
  );
}

  

return (

 
  <>
  <LowHeader></LowHeader>
  <AddToCart></AddToCart>
    <div className="min-h-screen bg-gray-100 py-8">

      <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">

        {veg.map((val) => (
          <div
             key={`${val.super_prod_sku}-${Math.random()*10000}`}
            className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition"
          >

            {/* Image */}
            <div className="h-40 w-full flex justify-center items-center relative">
              <img
                src={val.thumbnail}
                alt={val.display_name}
                className="h-full w-full object-contain"

                
              />
               <button
              className="bg-gray-200 text-green-800  font-bold  py-2 rounded-lg mt-3 cursor-pointer w-20 absolute bottom-[-5] right-0  "
            >
              Add
            </button>
              
            </div>

            {/* Name */}
            <div className="font-bold mt-4">
              {val.display_name}
            </div>

            {/* Price */}
            <div className="flex gap-2 mt-2">

              <span className="text-gray-500 line-through">
                ₹{val.mrp}
              </span>

              <span className="font-semibold">
                ₹{val.sale_price}
              </span>

            </div>

            {/* Add button */}
           

          </div>
        ))}

      </div>

    </div>

    <Footer />
  </>
);
}