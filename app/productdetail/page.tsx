"use client";

import Card from "../component/cardcomp";
import { cardArrivalData } from "../component/cardData";
import CustomerCarousel from "../component/custimercrousl";

const ProductDetailPage = () => {
  return (
    <>
      <div className="p-6 flex flex-col lg:flex-row lg:space-x-8 max-w-screen-2xl mx-auto">
        {/* Product Image */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <img
            src="/blackshirt.png"
            alt="Product"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Stylish T-Shirt</h1>
          <p className="text-gray-700 mb-6 text-sm sm:text-base">
            A stylish and comfortable t-shirt made with high-quality fabric. Perfect for casual outings or everyday wear. Available in multiple sizes and colors.
          </p>
          <div className="text-xl font-bold text-gray-800 mb-4">$29.99</div>

          {/* Quantity Selector */}
          <div className="flex items-center mb-6">
            <label className="text-gray-700 font-medium mr-4 text-sm sm:text-base">Quantity:</label>
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-16 text-center border border-gray-300 rounded-md focus:ring-2 focus:ring-black text-sm sm:text-base"
            />
          </div>

          {/* Add to Cart Button */}
          <button className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-black transition text-sm sm:text-base">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Customer Carousel */}
      <CustomerCarousel />

      {/* Top Selling Products Section */}
      <h2 className="text-center pt-10 text-2xl sm:text-3xl font-extrabold bg-white">TOP SELLING</h2>
      <div className="min-h-screen bg-white flex items-center justify-center lg:-mt-20 flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cardArrivalData.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              rating={card.rating}
              price={card.price}
            />
          ))}
        </div>
        <button className="px-10 py-2 mt-6 rounded-2xl bg-white border hover:bg-[#F0F0F0] text-sm sm:text-base">
          View ALL
        </button>
      </div>
    </>
  );
};

export default ProductDetailPage;
