// import React, { createContext, useState, useContext, useEffect } from "react";

// // Define types for the cart
// type CartItem = {
//   id: number;
//   quantity: number;
// };

// type CartContextType = {
//   cartCount: number;
//   addToCart: (productId: number) => void;
//   removeFromCart: (productId: number) => void;
// };

// // Create a context with default values
// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };

// interface CartProviderProps {
//   children: React.ReactNode;
// }

// export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
//   const [cartCount, setCartCount] = useState(0);

//   // Function to synchronize cart count from localStorage
//   const updateCartCount = () => {
//     const cart = JSON.parse(localStorage.getItem("cart") || "[]");
//     const totalItems = cart.reduce((sum: number, item: { quantity: number }) => sum + item.quantity, 0);
//     setCartCount(totalItems);
//   };

//   // Add item to cart
//   const addToCart = (productId: number) => {
//     const cart = JSON.parse(localStorage.getItem("cart") || "[]");
//     const existingProductIndex = cart.findIndex((item: { id: number }) => item.id === productId);

//     if (existingProductIndex !== -1) {
//       cart[existingProductIndex].quantity += 1;
//     } else {
//       cart.push({ id: productId, quantity: 1 });
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartCount();
//   };

//   // Remove item from cart
//   const removeFromCart = (productId: number) => {
//     let cart = JSON.parse(localStorage.getItem("cart") || "[]");
//     cart = cart.filter((item: { id: number }) => item.id !== productId);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartCount();
//   };

//   useEffect(() => {
//     updateCartCount();
//   }, []);

//   return (
//     <CartContext.Provider value={{ cartCount, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
