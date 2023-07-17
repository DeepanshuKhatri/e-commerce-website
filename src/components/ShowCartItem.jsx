import { FloatButton } from 'antd';
import React, { useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';

const ShowCartItem = ({cart,cartItems, setCartItems}) => {
    const user = useSelector(state=>state.user.users)
    const [quantity, setQuantity] = useState(1);
    console.log(cart)
    async function removeItem(id){
        const res = await axios.post('http://localhost:5000/removeFromCart', {product_id:id});
        console.log(res.data);
        setCartItems(
            cartItems.filter(x=> x._id !=id)
        )
    }
    async function updateQuantity(){

    }
  return (
    <div className="showing-cart-items">
        <div className='cart-product-img'>
            <img src={require('../assets/images/jeans1.jpg')} height={150} alt="" />
        </div>
        <div className='cart-item-overview'>
            <h1>Roadster</h1>
            <h2>Men T-shirt</h2>
            <h2>$400</h2>

            <button className="quantity-btn">Qty : {quantity}</button>
            <button onClick={()=>removeItem(cart._id)} className='remove-from-cart-btn'>X</button>
        </div>
          </div>
  )
}

export default ShowCartItem