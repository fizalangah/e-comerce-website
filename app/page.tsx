import React from "react";
import Homepage from "./home/page";
import CategoryPage from "./category/page";
import CartPage from "./cart/page";
// import { Provider } from 'react-redux';
// import type { AppProps } from 'next/app';
// import { store } from "./-redux/store";

export default function Mainpage() {
  return (
    <div className=" space-y-5">
<Homepage/>
<CategoryPage/>


<CartPage/>

    </div>
  )
}
