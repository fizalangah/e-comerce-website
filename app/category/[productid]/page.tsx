import { cardArrivalData, FilteredProducts } from "../../component/cardData";
import Tabs from "../../component/tab";
import Card from "../../component/cardcomp";

type ProducttProps = {
  params: {
    productid: string;
  };
};

export async function generateStaticParams() {
  return FilteredProducts.map((product) => ({
    productid: product.id,
  }));
}

const Productsdetail = ({ params }: ProducttProps) => {
  const products = FilteredProducts.find((p) => p.id === params.productid);

  if (!products) {
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
        <div className="flex flex-col lg:flex-row w-full lg:w-1/2 p-4">
          {/* Thumbnails */}
          <div className="flex lg:flex-col items-center lg:items-start space-x-4 lg:space-x-0 lg:space-y-4 mb-4 lg:mb-0">
            {Array(3)
              .fill(products.imageUrl)
              .map((src, index) => (
                <img
                  key={index}
                  src={products.imageUrl}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-20 h-20 rounded-lg border border-gray-200 object-cover cursor-pointer hover:border-blue-500"
                />
              ))}
          </div>
          {/* Main Image */}
          <img
            src={products.imageUrl}
            alt="Main Product"
            className="flex-1 rounded-lg object-cover border border-gray-200 w-full lg:w-auto"
          />
        </div>

        {/* Right Section: Details */}
        <div className="flex flex-col flex-1 p-6 space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">{products.title}</h1>
          <p className="text-gray-600">Brand: <span className="font-medium">Brand Name</span></p>
          <p className="text-lg font-semibold text-gray-800">${products.price}</p>
          <div className="flex items-center">
            <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
            <span className="ml-2 text-gray-500">(120 Reviews)</span>
          </div>
          <p className="text-gray-600">Description: {products.title}</p>
          <div className="flex space-x-2">
            <span className="text-gray-600">Colors:</span>
            <button className="w-6 h-6 rounded-full bg-red-500 border border-gray-300"></button>
            <button className="w-6 h-6 rounded-full bg-blue-500 border border-gray-300"></button>
            <button className="w-6 h-6 rounded-full bg-green-500 border border-gray-300"></button>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-10 max-w-6xl mx-auto">
        <Tabs />
      </div>

      {/* Related Products */}
      <h2 className="text-center pt-10 text-3xl font-extrabold bg-white">
        YOU MIGHT ALSO LIKE
      </h2>
      <div className="min-h-screen bg-white flex items-center justify-center flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
        <button className="px-10 py-1 rounded-2xl bg-white border hover:bg-gray-100 text-sm mt-6">
          View ALL
        </button>
      </div>
    </div>
  );
};

export default Productsdetail;
