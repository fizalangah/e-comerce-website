"use client";

import { useState } from "react";
import CartItem from "../component/cartIem";


const CartPage = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "T-Shirt", price: 100, quantity: 2, image: "/blackshirt.png" },
    { id: 2, name: "Jeans", price: 80, quantity: 1, image: "/jeens.png" },
    { id: 3, name: "Hoodie", price: 150, quantity: 1, image: "/tshirt.png" },
  ]);

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Remove item from cart
  const handleRemove = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Update quantity
  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <>

    <h1 className="text-3xl font-bold  lg:ml-[100px] text-center mt-10">Your Cart</h1> 
    <div className="max-w-4xl mx-auto p-6 flex gap-2 lg:flex-row flex-col ">
     
      {cart.length > 0 ? (
        <div className="border-2 border-gray-300 lg:w-[520px] w-[300px] rounded-xl pt-2 pb-2">
          <div className="space-y-4 space-x-2">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={handleRemove}
                onQuantityChange={handleQuantityChange}
              />
            ))}
          </div>
         
         
       
        </div>
      ) : (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      )}



         {/* Order Summary */}
         <div className="w-full lg:w-1/3 bg-white p-6 shadow-md border-2 border-gray-300 rounded-xl  ">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-bold">${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">Shipping:</span>
          <span className="font-bold">Free</span>
        </div>
        <div className="flex justify-between items-center border-t pt-4">
          <span className="text-gray-600 text-lg font-bold">Total:</span>
          <span className="text-lg font-bold">${totalPrice.toFixed(2)}</span>
        </div>
        <button className="w-full mt-6 bg-black text-white py-2 px-4 rounded hover:bg-black transition">
          Proceed to Checkout
        </button>
      </div>
    </div>



    </>
  );
};

export default CartPage;
