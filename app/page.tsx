import React from "react";
import Homepage from "./home/page";
import CategoryPage from "./category/page";
import CartPage from "./cart/page";


export default function Mainpage() {
  return (
    <div className=" space-y-5">
<Homepage/>
<CategoryPage/>

<CartPage/>
    </div>
  )
}
