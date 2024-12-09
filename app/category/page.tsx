

import Link from "next/link";

import { FilteredProducts } from "../component/cardData";
import Filter from "../component/filter";


const CategoryPage = () => {
  
  return (
    <div className="max-w-screen-xl mx-auto flex mt-20 lg:flex-row flex-col-reverse bg-white mb-10 gap-5">
      <div className=" lg:w-1/4">
<Filter/>
      </div>

     
    
      {/* Products Section */}
      <div className="flex-1 p-5">
        <h1 className="text-3xl font-bold mb-8">Casual</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FilteredProducts.map((product, index) => (
        <div key={product.id} className="flex flex-col items-center">
        { <div className=" w-[295px] h-auto rounded-[20px] p-4 flex flex-col items-center">
      {/* Image */}
     
      <img
        src={product.imageUrl}
        alt="Product"
        className="w-[295px] h-[295px] object-cover  bg-[#F0F0F0] rounded-xl"
      />
      
     { <p className="mt-4 text-gray-700 text-center font-bold">{product.title}</p>}

     {<div className="mt-2 flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={index < product.rating ? "text-yellow-500" : "text-gray-300"}
          >
            ★
          </span>
        ))}
      </div>}

      </div> }
      {  <p className="mt-2 text-gray-900 font-bold">{product.price}</p>}

      <Link href={`/category/${product.id}`}>product Detail</Link>
          </div>
          
        ))}
      </div>
      </div>
    </div>
  );
};

export default CategoryPage;
