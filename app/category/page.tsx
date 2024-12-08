"use client";
import React, { useState } from "react";

import Card from "../component/cardcomp";
import { FilteredProducts } from "../component/cardData";

const CategoryPage = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => setFilterOpen(!isFilterOpen);

  const products = [
    { id: 1, name: "T-Shirt", price: "$100", image: "/product1.jpg", color: "Red", size: "M", style: "Casual", rating: "⭐" },
    { id: 2, name: "Shorts", price: "$120", image: "/product2.jpg", color: "Blue", size: "L", style: "Formal", rating: "⭐" },
    { id: 3, name: "Jeans", price: "$80", image: "/product3.jpg", color: "Green", size: "S", style: "Party", rating: "⭐" },
    { id: 4, name: "Hoodie", price: "$150", image: "/product4.jpg", color: "Black", size: "XL", style: "Sports", rating: "⭐" },
  ];

  const colors = ["Red", "Blue", "Green", "Black", "Yellow", "Pink", "Orange", "Purple", "Brown", "Gray"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "3XL"];
  const dressStyles = ["Casual", "Formal", "Party", "Sports", "Beachwear"];

  const [price, setPrice] = useState(100);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");

  const filteredProducts = products.filter((product) => {
    return (
      (selectedColor ? product.color === selectedColor : true) &&
      (selectedSize ? product.size === selectedSize : true) &&
      (selectedStyle ? product.style === selectedStyle : true) &&
      parseInt(product.price.replace("$", "")) <= price
    );
  });

  return (
    <div className="max-w-screen-xl mx-auto flex mt-20 -mb-20 lg:flex-row flex-col-reverse">
      {/* Hamburger Button for Small Screens */}
      <button
        onClick={toggleFilter}
        className="lg:hidden fixed top-4 left-4 z-50 bg-black text-white p-2 rounded-md"
      >
        {isFilterOpen ? "X" : "☰"} {/* Toggle between Hamburger and Close icon */}
      </button>

      {/* Filter Section */}
      <div
        className={`lg:w-1/4 h-full bg-gray-100 p-5 flex flex-col space-y-5 border rounded fixed lg:static z-40 transition-transform ${
          isFilterOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <h2 className="text-xl font-bold">Filter</h2>

        {/* Product Names */}
        <div className="border-b">
          <h3 className="font-bold mb-2">Products</h3>
          <ul className="space-y-4">
            {products.map((product) => (
              <li key={product.id} className="text-gray-700">
                {product.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Price Slider */}
        <div className="border-b">
          <h3 className="font-bold mb-2">Price</h3>
          <input
            type="range"
            min="50"
            max="500"
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
            className="w-full"
          />
          <p className="text-gray-600 mt-2">Up to: ${price}</p>
        </div>

        {/* Colors */}
        <div className="border-b">
          <h3 className="font-bold mb-2">Colors</h3>
          <div className="grid grid-cols-4 gap-2">
            {colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border-2 ${
                  selectedColor === color ? "border-black" : "border-white"
                }`}
                style={{ backgroundColor: color.toLowerCase() }}
              ></button>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="border-b">
          <h3 className="font-bold mb-2">Sizes</h3>
          <div className="flex flex-wrap gap-3">
            {sizes.map((size, index) => (
              <button
                key={index}
                onClick={() => setSelectedSize(size)}
                className={`border px-3 py-1 rounded ${
                  selectedSize === size ? "bg-gray-300" : ""
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Dress Style */}
        <div className="border-b">
          <h3 className="font-bold mb-2">Dress Style</h3>
          <div className="flex flex-col space-y-2">
            {dressStyles.map((style, index) => (
              <button
                key={index}
                onClick={() => setSelectedStyle(style)}
                className={`border px-3 py-1 rounded text-left ${
                  selectedStyle === style ? "bg-gray-300" : ""
                }`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>

        {/* Apply Filter Button */}
        <button
          onClick={() => console.log("Filter applied")}
          className="bg-black text-white py-3 shadow hover:bg-gray-800 transition rounded-2xl"
        >
          Apply Filter
        </button>
      </div>

      {/* Products Section */}
      <div className="flex-1 p-5">
        <h1 className="text-3xl font-bold mb-8">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {FilteredProducts.map((product) => (
            <Card
              key={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              rating={product.rating}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
