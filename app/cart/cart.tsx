// "use client";
// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../-redux/store";
//  import { clearCart, removeItem } from "../-redux/caetSlice"
//  import Checkout from "../component/checkout";
// const Cart = () => {
//   const dispatch = useDispatch();
//   const cart = useSelector((state: RootState) => state.cart);
//   const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

//   const handleCheckout = () => {
//     setIsCheckoutOpen(true);
//   };

//   return (
//     <div className="cart">
//       <h2>Shopping Cart</h2>
//       {cart.items.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           <ul>
//             {cart.items.map((item) => (
//               <li key={item.id}>
//                 <p>{item.name}</p>
//                 <p>Price: ${item.price}</p>
//                 <p>Quantity: {item.quantity}</p>
//                 <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
//               </li>
//             ))}
//           </ul>
//           <div className="order-summary">
//             <h3>Order Summary</h3>
//             <p>Total: ${cart.total.toFixed(2)}</p>
//             <button onClick={handleCheckout}>Proceed to Checkout</button>
//           </div>
//           <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
//         </div>
//       )}
//       {isCheckoutOpen && <Checkout onClose={() => setIsCheckoutOpen(false)} />}
//     </div>
//   );
// };

// export default Cart;

