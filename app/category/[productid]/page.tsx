"use client";

import { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client"; // Update with your Sanity client path
import Tabs from "../../component/tab";
import Card from "../../component/cardcomp";
import Link from "next/link";

type ProductProps = {
  params: {
    productid: string;
  };
};

const Productsdetail = ({ params }: ProductProps) => {
  const [product, setProduct] = useState<any>(null); // Store fetched product
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await client.fetch(
          `
          *[_type == "products" && _id == $productid][0]{
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
          `,
          { productid: params.productid }
        );
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProduct();
  }, [params.productid]);
  console.log(product,"product");
  
  
  const handleCart = (product: any) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const isProductInCart = cart.some((item: any) => item._id === product._id);
    if (!isProductInCart) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Product added to cart!");
    } else {
      alert("Product is already in the cart!");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
        <p>The product you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Product Details */}
      <h2 className="text-center mt-3 p-2 font-bold">PRODUCT DETAIL</h2>
      <div className="flex flex-col lg:flex-row items-start justify-center max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-6">
        {/* Left Section: Images */}
        <div className="flex flex-col lg:flex-row w-full lg:w-1/2 p-4 gap-4">
          {/* Thumbnails */}
          <div className="flex lg:flex-col items-center lg:items-start space-x-4 lg:space-x-0 lg:space-y-6 mb-4 lg:mb-0 p-3">
            {Array(3)
              .fill(product.imageUrl)
              .map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-24 h-24 rounded-lg border border-gray-200 object-cover cursor-pointer hover:border-black"
                />
              ))}
          </div>
          {/* Main Image */}
          <img
            src={product.imageUrl}
            alt="Main Product"
            className="flex-1 rounded-lg object-cover border border-gray-200 w-full lg:w-auto"
          />
        </div>

        {/* Right Section: Details */}
        <div className="flex flex-col flex-1 p-6 space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-lg font-semibold text-gray-800">${product.price}</p>
          <p className="text-gray-600">Category: {product.category}</p>
          <p className="text-gray-600">Description: {product.description}</p>
          {product.discountPercent && (
            <p className="text-red-600">
              Discount: {product.discountPercent}%
            </p>
          )}
          {product.new && <p className="text-green-600">New Arrival</p>}
          <div className="flex space-x-2">
            <span className="text-gray-600">Colors:</span>
            {product.colors?.map((color: string, index: number) => (
              <button
                key={index}
                className={`w-6 h-6 rounded-full`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <button
            onClick={() => handleCart(product)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-10 max-w-6xl mx-auto">
        <Tabs />
      </div>
    </div>
  );
};

export default Productsdetail;

