import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const user = useSelector(state=>state.user.users)
  const [cartItems, setCartItems] = useState([])
  const [cartProduct, setCartProduct] = useState([])

  useEffect(()=>{

    //From here I have to start



    
    // async function run(){
    //   const data = await axios.post('http://localhost:5000/getCartItems', {customer_email:user.email});
    //   setCartItems(data.data.cart);
    //   console.log(cartItems)
    //   console.log("cartItems done")
    //   cartItems.map(async (cart)=>{
    //     console.log(cart)
    //     const data2  = await axios.post('http://localhost:5000/getCartProduct', {product_id: cart[0]})
    //     setCartProduct(prev=> [...prev, data2.data
    //     ])
    //   })
    // }

    

    // async function run2(){
    // }
    run()
    // run2();
  },[])
  console.log(cartProduct, "dsfadsf")

  // console.log(cartItems)

  return (
    <div>
      <h1>Cart</h1>
      {
        cartProduct &&
        cartProduct.map(cart=>{
          return <h1>{cart.vendor_name}</h1>
        })
      }




    </div>
  )
}

export default Cart