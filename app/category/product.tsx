interface ProductdProps {
    imageUrl: string;
    title: string;
    rating: number;
    price: string;
  }
  
  const Product: React.FC<ProductdProps> = ({ imageUrl, title, rating, price }) => {
    return (
      <div className="border rounded-lg shadow hover:shadow-lg transition cursor-pointer p-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">Rating: {rating} ⭐</p>
        <p className="text-gray-800 font-bold">{price}</p>
      </div>
    );
  };
  
  export default Product;
  