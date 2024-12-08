// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import Card from "../component/cardcomp";
// import { FilteredProducts } from "../component/cardData";

// const CategoryPage = () => {
//   const [isFilterOpen, setFilterOpen] = useState(false);

//   const toggleFilter = () => setFilterOpen(!isFilterOpen);

//   const products = [
//     { id: 1, name: "T-Shirt", price: "$100", image: "/product1.jpg", color: "Red", size: "M", style: "Casual", rating: "⭐" },
//     { id: 2, name: "Shorts", price: "$120", image: "/product2.jpg", color: "Blue", size: "L", style: "Formal", rating: "⭐" },
//     { id: 3, name: "Jeans", price: "$80", image: "/product3.jpg", color: "Green", size: "S", style: "Party", rating: "⭐" },
//     { id: 4, name: "Hoodie", price: "$150", image: "/product4.jpg", color: "Black", size: "XL", style: "Sports", rating: "⭐" },
//   ];

//   const colors = ["Red", "Blue", "Green", "Black", "Yellow", "Pink", "Orange", "Purple", "Brown", "Gray"];
//   const sizes = ["XS", "S", "M", "L", "XL", "XXL", "3XL"];
//   const dressStyles = ["Casual", "Formal", "Party", "Sports", "Beachwear"];

//   const [price, setPrice] = useState(100);
//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [selectedStyle, setSelectedStyle] = useState("");

//   const filteredProducts = products.filter((product) => {
//     return (
//       (selectedColor ? product.color === selectedColor : true) &&
//       (selectedSize ? product.size === selectedSize : true) &&
//       (selectedStyle ? product.style === selectedStyle : true) &&
//       parseInt(product.price.replace("$", "")) <= price
//     );
//   });

//   return (
//     <div className="max-w-screen-xl mx-auto flex mt-20 -mb-20 lg:flex-row flex-col-reverse">
//       {/* Hamburger Button for Small Screens */}
//       <button
//         onClick={toggleFilter}
//         className="lg:hidden fixed top-4 left-4 z-50 bg-black text-white p-2 rounded-md"
//       >
//         {isFilterOpen ? "X" : "☰"} {/* Toggle between Hamburger and Close icon */}
//       </button>

//       {/* Filter Section */}
//       <div
//         className={`lg:w-1/4 h-full bg-gray-100 p-5 flex flex-col space-y-5 border rounded fixed lg:static z-40 transition-transform ${
//           isFilterOpen ? "translate-x-0" : "-translate-x-full"
//         } lg:translate-x-0`}
//       >
//         <h2 className="text-xl font-bold">Filter</h2>

//         {/* Product Names */}
//         <div className="border-b">
//           <h3 className="font-bold mb-2">Products</h3>
//           <ul className="space-y-4">
//             {products.map((product) => (
//               <li key={product.id} className="text-gray-700">
//                 {product.name}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Price Slider */}
//         <div className="border-b">
//           <h3 className="font-bold mb-2">Price</h3>
//           <input
//             type="range"
//             min="50"
//             max="500"
//             value={price}
//             onChange={(e) => setPrice(parseInt(e.target.value))}
//             className="w-full"
//           />
//           <p className="text-gray-600 mt-2">Up to: ${price}</p>
//         </div>

//         {/* Colors */}
//         <div className="border-b">
//           <h3 className="font-bold mb-2">Colors</h3>
//           <div className="grid grid-cols-4 gap-2">
//             {colors.map((color, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedColor(color)}
//                 className={`w-8 h-8 rounded-full border-2 ${
//                   selectedColor === color ? "border-black" : "border-white"
//                 }`}
//                 style={{ backgroundColor: color.toLowerCase() }}
//               ></button>
//             ))}
//           </div>
//         </div>

//         {/* Sizes */}
//         <div className="border-b">
//           <h3 className="font-bold mb-2">Sizes</h3>
//           <div className="flex flex-wrap gap-3">
//             {sizes.map((size, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedSize(size)}
//                 className={`border px-3 py-1 rounded ${
//                   selectedSize === size ? "bg-gray-300" : ""
//                 }`}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Dress Style */}
//         <div className="border-b">
//           <h3 className="font-bold mb-2">Dress Style</h3>
//           <div className="flex flex-col space-y-2">
//             {dressStyles.map((style, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedStyle(style)}
//                 className={`border px-3 py-1 rounded text-left ${
//                   selectedStyle === style ? "bg-gray-300" : ""
//                 }`}
//               >
//                 {style}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Apply Filter Button */}
//         <button
//           onClick={() => console.log("Filter applied")}
//           className="bg-black text-white py-3 shadow hover:bg-gray-800 transition rounded-2xl"
//         >
//           Apply Filter
//         </button>
//       </div>

//       {/* Products Section */}
//       <div className="flex-1 p-5">
//         <h1 className="text-3xl font-bold mb-8">Products</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredProducts.map((product) => (
//             <Card
//               key={product.id}
//               imageUrl={product.image}
//               title={product.name}
//               rating={product.rating}
//               price={product.price}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;

// app/category/page.tsx
// import Link from "next/link";
// import { FilteredProducts } from "../../component/cardData"; // Assuming your products data is here

// const CategoryPage = () => {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold">Product Category</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {FilteredProducts.map((product) => (
//           <div key={product.id} className="card">
//             <img src={product.imageUrl} alt={product.title} />
//             <h3>{product.title}</h3>
//             <p>{product.price}</p>
//             <Link href={`/category/${product.id}`} className="text-blue-500">View Details</Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;

// "use client";

// import { useState } from "react";
// import CartItem from "../../components/CartItem";

// const CartPage = () => {
//   const [cart, setCart] = useState([
//     { id: 1, name: "T-Shirt", price: 100, quantity: 2, image: "/product1.jpg" },
//     { id: 2, name: "Jeans", price: 80, quantity: 1, image: "/product2.jpg" },
//     { id: 3, name: "Hoodie", price: 150, quantity: 1, image: "/product3.jpg" },
//   ]);

//   // Calculate total price
//   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   // Remove item from cart
//   const handleRemove = (id: number) => {
//     setCart(cart.filter((item) => item.id !== id));
//   };

//   // Update quantity
//   const handleQuantityChange = (id: number, newQuantity: number) => {
//     setCart(
//       cart.map((item) =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6 flex flex-col lg:flex-row lg:space-x-6">
//       {/* Cart Items */}
//       <div className="flex-1">
//         <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
//         {cart.length > 0 ? (
//           <div className="space-y-4">
//             {cart.map((item) => (
//               <CartItem
//                 key={item.id}
//                 item={item}
//                 onRemove={handleRemove}
//                 onQuantityChange={handleQuantityChange}
//               />
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">Your cart is empty.</p>
//         )}
//       </div>

//       {/* Order Summary */}
//       <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
//         <div className="flex justify-between items-center mb-4">
//           <span className="text-gray-600">Subtotal:</span>
//           <span className="font-bold">${totalPrice.toFixed(2)}</span>
//         </div>
//         <div className="flex justify-between items-center mb-4">
//           <span className="text-gray-600">Shipping:</span>
//           <span className="font-bold">Free</span>
//         </div>
//         <div className="flex justify-between items-center border-t pt-4">
//           <span className="text-gray-600 text-lg font-bold">Total:</span>
//           <span className="text-lg font-bold">${totalPrice.toFixed(2)}</span>
//         </div>
//         <button className="w-full mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
//           Proceed to Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartPage;

// "use client";

// import { useState } from "react";
// import CartItem from "../../components/CartItem";

// const CartPage = () => {
//   const [cart, setCart] = useState([
//     { id: 1, name: "T-Shirt", price: 100, quantity: 2, image: "/product1.jpg" },
//     { id: 2, name: "Jeans", price: 80, quantity: 1, image: "/product2.jpg" },
//     { id: 3, name: "Hoodie", price: 150, quantity: 1, image: "/product3.jpg" },
//   ]);

//   // Calculate total price
//   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   // Remove item from cart
//   const handleRemove = (id: number) => {
//     setCart(cart.filter((item) => item.id !== id));
//   };

//   // Update quantity
//   const handleQuantityChange = (id: number, newQuantity: number) => {
//     setCart(
//       cart.map((item) =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6 flex flex-col lg:flex-row lg:space-x-6">
//       {/* Cart Items */}
//       <div className="flex-1">
//         <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
//         {cart.length > 0 ? (
//           <div className="space-y-4">
//             {cart.map((item) => (
//               <CartItem
//                 key={item.id}
//                 item={item}
//                 onRemove={handleRemove}
//                 onQuantityChange={handleQuantityChange}
//               />
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">Your cart is empty.</p>
//         )}
//       </div>

//       {/* Order Summary */}
//       <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
//         <div className="flex justify-between items-center mb-4">
//           <span className="text-gray-600">Subtotal:</span>
//           <span className="font-bold">${totalPrice.toFixed(2)}</span>
//         </div>
//         <div className="flex justify-between items-center mb-4">
//           <span className="text-gray-600">Shipping:</span>
//           <span className="font-bold">Free</span>
//         </div>
//         <div className="flex justify-between items-center border-t pt-4">
//           <span className="text-gray-600 text-lg font-bold">Total:</span>
//           <span className="text-lg font-bold">${totalPrice.toFixed(2)}</span>
//         </div>
//         <button className="w-full mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
//           Proceed to Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartPage;
