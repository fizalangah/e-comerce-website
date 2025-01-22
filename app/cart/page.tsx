// "use client";
// import { useEffect, useState } from "react";

// const Cartpage = () => {
//   const [cartItems, setCartItems] = useState([]);

//   // Fetch cart items from localStorage on component mount
//   useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(cart);
//     console.log(cart ,"cart");
    
//   }, []);

//   // Calculate total price (ensure price is a valid number)
//   const totalPrice = cartItems.reduce(
//     (total, item) => total + (Number(item.price) * (item.quantity || 0) || 0),
//     0
    
//   );
//   console.log("Total Price:", totalPrice);
//   console.log("Cart Items:", cartItems);
  

//   // Calculate total quantity (ensure quantity is a valid number)
//   const totalQuantity = cartItems.reduce(
//     (total, item) => total + (item.quantity || 0),
//     0
//   );

//   // Remove an item from the cart
//   const removeItem = (productId) => {
//     const updatedCart = cartItems.filter((item) => item.id !== productId);
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   // Increment quantity
//   const incrementQuantity = (productId) => {
//     const updatedCart = cartItems.map((item) =>
//       item.id === productId
//         ? { ...item, quantity: item.quantity + 1 }
//         : item
//     );
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   // Decrement quantity
//   const decrementQuantity = (productId) => {
//     const updatedCart = cartItems.map((item) => {
//       if (item.id === productId && item.quantity > 1) {
//         return { ...item, quantity: item.quantity - 1 };
//       }
//       return item;
//     });
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
//       {cartItems.length > 0 ? (
//         <>
//           <ul className="space-y-4">
//             {cartItems.map((product) => (
//               <li
//                 key={product.id}
//                 className="flex items-center justify-between bg-gray-100 p-4 rounded"
//               >
//                 {/* Product Image */}
//                 <img
//                   src={product.imageUrl}
//                   alt={product.title}
//                   className="w-16 h-16 object-cover rounded"
//                 />

//                 {/* Product Name and Price */}
//                 <div className="flex-1 ml-4">
//                   <span>{product.title}</span>
//                   <p className="text-sm text-gray-600">Price: ${Number(product.price).toFixed(2)}</p>
//                 </div>

//                 {/* Quantity Controls */}
//                 <div className="flex items-center space-x-2">
//                   <button
//                     onClick={() => decrementQuantity(product.id)}
//                     className="bg-gray-300 text-black px-2 py-1 rounded"
//                   >
//                     -
//                   </button>
//                   <span className="px-2">{product.quantity}</span>
//                   <button
//                     onClick={() => incrementQuantity(product.id)}
//                     className="bg-gray-300 text-black px-2 py-1 rounded"
//                   >
//                     +
//                   </button>
//                 </div>

//                 {/* Remove Button */}
//                 <button
//                   onClick={() => removeItem(product.id)}
//                   className="bg-red-500 text-white px-4 py-2 rounded"
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>

//           {/* Order Summary */}
//           <div className="mt-6 p-4 bg-white shadow-md border rounded">
//             <h2 className="text-xl font-bold mb-2">Order Summary</h2>
//             <div className="flex justify-between mb-2">
//               <span className="text-gray-600">Total Items:</span>
//               <span className="font-bold">{totalQuantity}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Total Price:</span>
//               <span className="font-bold">${totalPrice.toFixed(2)}</span>
//             </div>
//           </div>
//         </>
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// export default Cartpage;


// "use client";
// import { useState,useEffect } from "react";
// import Link from "next/link";
// const CartPage = () => {
//     const [cartItems, setCartItems] = useState([]);

//   // Fetch cart items from localStorage on component mount
//   useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(cart);
//     console.log(cart ,"cart");
    
//   }, []);

//    //Calculate total price (ensure price is a valid number)
//   const totalPrice = cartItems.reduce(
//     (total, item) => total + (Number(item.price) * (item.quantity || 0) || 0),
//     0
//     );
//   console.log("Total Price:", totalPrice);
//   console.log("Cart Items:", cartItems);
  
  
//   // Calculate total quantity (ensure quantity is a valid number)
//   const totalQuantity = cartItems.reduce(
//     (total, item) => total + (item.quantity || 0),
//     0
//   );
//    //Remove an item from the cart
//   const removeItem = (productId) => {
//     const updatedCart = cartItems.filter((item) => item.id !== productId);
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   // Increment quantity
//   const incrementQuantity = (productId) => {
//     const updatedCart = cartItems.map((item) =>
//       item.id === productId
//         ? { ...item, quantity: item.quantity + 1 }
//         : item
//     );
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };
//    // Decrement quantity
//   const decrementQuantity = (productId) => {
//     const updatedCart = cartItems.map((item) => {
//       if (item.id === productId && item.quantity > 1) {
//         return { ...item, quantity: item.quantity - 1 };
//       }
//       return item;
//     });
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen p-8">
//       <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
//       <div className="flex flex-col lg:flex-row justify-between gap-8">
//       {cartItems.length > 0 ? (
//         {/* Cart Items */}
//         <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
//           <div className="space-y-6">
       
//             {cartItems.map((item) => (
          
//               <div key={item.id} className="flex items-center gap-4">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-24 h-24 rounded-md object-cover"
//                 />
//                 <div className="flex-1">
//                   <h2 className="font-medium">{item.name}</h2>
//                   <p className="text-sm text-gray-500">Size: {item.size}</p>
//                   <p className="text-sm text-gray-500">Color: {item.color}</p>
//                   <p className="text-lg font-semibold mt-2">${item.price}</p>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">-</button>
//                   <span className="font-medium">1</span>
//                   <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">+</button>
//                 </div>
//                 <button className="text-red-500 hover:text-red-700">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="2"
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               </div>
           
//            </div> 
  
//           ))}
//         </div>

//         {/* Order Summary */}
//         <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//           <div className="space-y-4">
//             <div className="flex justify-between">
//               <span className="text-gray-500">Subtotal</span>
//               <span className="font-medium">$565</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-500">Discount (20%)</span>
//               <span className="text-red-500">- $113</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-500">Delivery Fee</span>
//               <span className="font-medium">$15</span>
//             </div>
//             <hr className="my-4" />
//             <div className="flex justify-between text-lg font-semibold">
//               <span>Total</span>
//               <span>$467</span>
//             </div>
//           </div>
//         ) :
//                 (
//                        <p>Your cart is empty.</p>
//           <div className="mt-6">
//             <input
//               type="text"
//               placeholder="Add promo code"
//               className="w-full border border-gray-300 rounded-md p-2 mb-4"
//             />
//             <button className="w-full bg-black text-white py-3 rounded-md mb-4 hover:bg-gray-800">
//               Apply
//             </button>
//             <Link href={"/checkOut"} ><button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800">
//               Go to Checkout 
//             </button></Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;



//opr wala



// "use client";
// import { useEffect, useState } from "react";

// const Cartpage = () => {
//   const [cartItems, setCartItems] = useState([]);

//   // Fetch cart items from localStorage on component mount
//   useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(cart);
//     console.log(cart, "cart");
//   }, []);

//   // Add product or increment its quantity
//   const addOrUpdateProduct = (newProduct) => {
//     const updatedCart = cartItems.map((item) =>
//       item.id === newProduct.id
//         ? { ...item, quantity: item.quantity + 1 } // Increment quantity
//         : item
//     );

//     // If the product is not already in the cart, add it
//     if (!cartItems.find((item) => item.id === newProduct.id)) {
//       updatedCart.push({ ...newProduct, quantity: 1 });
//     }

//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   // Remove a product or decrement its quantity
//   const removeProduct = (productId) => {
//     const updatedCart = cartItems
//       .map((item) =>
//         item.id === productId
//           ? { ...item, quantity: item.quantity - 1 } // Decrement quantity
//           : item
//       )
//       .filter((item) => item.quantity > 0); // Remove if quantity is 0

//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   // Calculate total price
//   const totalPrice = cartItems.reduce(
//     (total, item) => total + (item.quantity || 1) * Number(item.price || 0),
//     0
//   );

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
//       {cartItems.length > 0 ? (
//         <>
//           <ul className="space-y-4">
//             {cartItems.map((product) => (
//               <li
//                 key={product.id}
//                 className="flex items-center justify-between bg-gray-100 p-4 rounded"
//               >
//                 {/* Product Image */}
//                 <img
//                   src={product.imageUrl}
//                   alt={product.title}
//                   className="w-16 h-16 object-cover rounded"
//                 />

//                 {/* Product Name and Details */}
//                 <div className="flex-1 ml-4">
//                   <span>{product.title}</span>
//                   <p className="text-sm text-gray-600">
//                     Price: ${Number(product.price).toFixed(2)}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     Quantity: {product.quantity}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     Total: $
//                     {(product.quantity * Number(product.price)).toFixed(2)}
//                   </p>
//                 </div>

//                 {/* Increment Button */}
//                 <button
//                   onClick={() => addOrUpdateProduct(product)}
//                   className="bg-green-500 text-white px-4 py-2 rounded"
//                 >
//                   Add More
//                 </button>

//                 {/* Remove Button */}
//                 <button
//                   onClick={() => removeProduct(product.id)}
//                   className="bg-red-500 text-white px-4 py-2 rounded"
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>

//           {/* Order Summary */}
//           <div className="mt-6 p-4 bg-white shadow-md border rounded">
//             <h2 className="text-xl font-bold mb-2">Order Summary</h2>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Total Price:</span>
//               <span className="font-bold">${totalPrice.toFixed(2)}</span>
//             </div>
//           </div>
//         </>
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// export default Cartpage;
// "use client";
// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../-redux/store";
//  import { clearCart, removeItem } from "../-redux/caetSlice"
//  import Checkout from "../component/checkout";
// const Cartpage = () => {
//   const dispatch = useDispatch();
//   const cart = useSelector((state: RootState) => state.cart);
//   const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

//   const handleCheckout = () => {
//     setIsCheckoutOpen(true);
//   };

//   return (
//     <div className="cart">
//       <h2>Shopping Cart</h2>
//       {cart.items.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           <ul>
//             {cart.items.map((item) => (
//               <li key={item.id}>
//                 <p>{item.name}</p>
//                 <p>Price: ${item.price}</p>
//                 <p>Quantity: {item.quantity}</p>
//                 <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
//               </li>
//             ))}
//           </ul>
//           <div className="order-summary">
//             <h3>Order Summary</h3>
//             <p>Total: ${cart.total.toFixed(2)}</p>
//             <button onClick={handleCheckout}>Proceed to Checkout</button>
//           </div>
//           <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
//         </div>
//       )}
//       {isCheckoutOpen && <Checkout onClose={() => setIsCheckoutOpen(false)} />}
//     </div>
//   );
// };

// export default Cartpage;

// "use client";

// import AppProvider from "../../provider"; // Import the provider
// import Cart from "./cart";

// const CartPage = () => {
//   return (
//     <AppProvider>
//       <Cart />
//     </AppProvider>
//   );
// };

// export default CartPage;


"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items from localStorage on component mount
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  // Calculate total price (ensure price is a valid number)
  const totalPrice = cartItems.reduce(
    (total, item) => total + (Number(item.price) * (item.quantity || 0)),
    0
  );

  // Calculate total quantity
  const totalQuantity = cartItems.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  // Remove an item from the cart
  const removeItem = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Increment quantity
  const incrementQuantity = (productId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Decrement quantity
  const decrementQuantity = (productId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {cartItems.length > 0 ? (
          <>
            {/* Cart Items */}
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-24 h-24 rounded-md object-cover"
                    />
                    <div className="flex-1">
                      <h2 className="font-medium">{item.name}</h2>
                      <p className="text-sm text-gray-500">Size: {item.size}</p>
                      <p className="text-sm text-gray-500">Color: {item.color}</p>
                      <p className="text-lg font-semibold mt-2">
                        ${Number(item.price).toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => decrementQuantity(item.id)}
                        className="p-2 bg-gray-100 rounded hover:bg-gray-200"
                      >
                        -
                      </button>
                      <span className="font-medium">{item.quantity}</span>
                      <button
                        onClick={() => incrementQuantity(item.id)}
                        className="p-2 bg-gray-100 rounded hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">Total Items</span>
                  <span className="font-medium">{totalQuantity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-medium">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <hr className="my-4" />
                <div className="mt-6">
                  <input
                    type="text"
                    placeholder="Add promo code"
                    className="w-full border border-gray-300 rounded-md p-2 mb-4"
                  />
                  <button className="w-full bg-black text-white py-3 rounded-md mb-4 hover:bg-gray-800">
                    Apply
                  </button>
                  <Link href={"/checkOut"}>
                    <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800">
                      Go to Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
