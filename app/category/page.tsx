"use client";

import Link from "next/link";

// import { FilteredProducts } from "../component/cardData";
import Filter from "../component/filter";
import { client } from "../../sanity/lib/client";
import { useEffect, useState } from "react";

const CategoryPage = () => {
  
  type Product = {
    id: string;
    title: string;
    imageUrl: string;
    rating: number;
    price: string;
  };

  const [products, setProducts] = useState<Product[]>([]);

  async function fetchProducts(): Promise<Product[]> {
    const query = `
             *[_type == "products"]{
               _id,
               name,
               price,
               description,
               "imageUrl": image.asset->url,
               category,
               discountPercent,
               new,
               colors,
               sizes
             }
           `;
    const products = await client.fetch(query);
  
    console.log("Fetched Products:", products); // Log fetched data here
  
    return products.map((product: any) => ({
      id: product._id,
      title: product.title,
      imageUrl: product.imageUrl || "",
      rating: product.rating || 0,
      price: product.price || "N/A",
    }));
  }
  

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);
  
  
  return (
    <div className="max-w-screen-xl mx-auto flex mt-20 lg:flex-row flex-col-reverse bg-white mb-10 gap-5">
      <div className=" lg:w-1/4">
<Filter/>
      </div>

     
    
      {/* Products Section */}
      <div className="flex-1 p-5">
        <h1 className="text-3xl font-bold mb-8">Casual</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
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

// import Link from "next/link";
// import { client } from "../../sanity/lib/client";
// import Filter from "../component/filter";

// type Product = {
//   id: string;
//   title: string;
//   imageUrl: string;
//   rating: number;
//   price: string;
// };

// async function fetchProducts(): Promise<Product[]> {
//   const query = `*[_type == "product"]{
//     _id,
//     title,
//     "imageUrl": mainImage.asset->url,
//     rating,
//     price
//   }`;
//   const products = await client.fetch(query);
//   console.log("Fetched Products:", products); // Log fetched data here

//   return products.map((product: any) => ({
//     id: product._id,
//     title: product.title,
//     imageUrl: product.imageUrl,
//     rating: product.rating || 0,
//     price: product.price || "N/A",
//   }));
// }

// const CategoryPage = async () => {
//   const products = await fetchProducts();
//  console.log(products,"products");

//   return (
//     <div className="max-w-screen-xl mx-auto flex mt-20 lg:flex-row flex-col-reverse bg-white mb-10 gap-5">
//       <div className="lg:w-1/4">
//         <Filter />
//       </div>

//       {/* Products Section */}
//       <div className="flex-1 p-5">
//         <h1 className="text-3xl font-bold mb-8">Casual</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.map((product) => (
//             <div key={product.id} className="flex flex-col items-center">
//               <div className="w-[295px] h-auto rounded-[20px] p-4 flex flex-col items-center">
//                 {/* Image */}
//                 <img
//                   src={product.imageUrl}
//                   alt={product.title}
//                   className="w-[295px] h-[295px] object-cover bg-[#F0F0F0] rounded-xl"
//                 />

//                 {/* Title */}
//                 <p className="mt-4 text-gray-700 text-center font-bold">
//                   {product.title}
//                 </p>

//                 {/* Rating */}
//                 <div className="mt-2 flex space-x-1">
//                   {[...Array(5)].map((_, index) => (
//                     <span
//                       key={index}
//                       className={
//                         index < product.rating
//                           ? "text-yellow-500"
//                           : "text-gray-300"
//                       }
//                     >
//                       ★
//                     </span>
//                   ))}
//                 </div>

//                 {/* Price */}
//                 <p className="mt-2 text-gray-900 font-bold">{product.price}</p>

//                 {/* Product Detail Link */}
//                 <Link
//                   href={`/category/${product.id}`}
//                   className="mt-2 text-blue-500 hover:underline"
//                 >
//                   Product Detail
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;
