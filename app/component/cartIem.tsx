"use client";

import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

type CartItemProps = {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  };
  onRemove: (id: number) => void;
  onQuantityChange: (id: number, newQuantity: number) => void;
};

const CartItem = ({ item, onRemove, onQuantityChange }: CartItemProps) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (type: "increment" | "decrement") => {
    let newQuantity = type === "increment" ? quantity + 1 : quantity - 1;
    if (newQuantity < 1) newQuantity = 1; // Minimum quantity is 1
    setQuantity(newQuantity);
    onQuantityChange(item.id, newQuantity);
  };

  return (
    <div className="flex items-center justify-around border-b pb-4 lg:w-[500px] w-[290px] bg-white pt-3 border-2 text-center">
      <div className="flex items-center space-x-4">
        <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
        <div>
          <h3 className="font-bold">{item.name}</h3>
          <p className="text-gray-600">Quantity: {quantity}</p>
          <p className="text-gray-800 font-bold">${item.price * quantity}</p>
        </div>
      </div>
      <div className="text-right flex flex-col items-center">
        <AiOutlineDelete
          className="text-red-500 text-xl cursor-pointer hover:text-red-600"
          onClick={() => onRemove(item.id)}
        />
        <div className="flex items-center space-x-2 mt-2">
          <button
            onClick={() => handleQuantityChange("decrement")}
            className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded text-lg font-bold"
          >
            -
          </button>
          <button
            onClick={() => handleQuantityChange("increment")}
            className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded text-lg font-bold"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
