import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartList from "../components/CartList";

const Cart = () => {
  const user = useSelector((state) => state.user.users);
  const [cartItems, setCartItems] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);

  useEffect(() => {
    async function run() {
      const data = await axios.post("http://localhost:5000/getCartItems", {
        customer_email: user.email,
      });
      console.log(data)
      setCartItems(data.data);
    }
    run();
  }, []);

  console.log(cartItems);

  return (
    <div >
      <h1>Cart</h1>
      <div className="cart-container">
        <div className="c-i">

        {cartItems &&
          cartItems.map((cart) => {
            return <CartList cart={cart} />
          })}
        </div>

      <div className="total-price-cart"></div>
      </div>

    </div>
  );
};

export default Cart;
