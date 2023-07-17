import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {Button,Input, Divider} from 'antd'
import {HeartOutlined} from '@ant-design/icons'
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import axios from 'axios'


const ShowProduct = () => {
  const [number, setNumber] = useState(1);
  const [price, setPrice] = useState(0)
  const [present, setPresent] = useState(false);
  const user = useSelector(state=>state.user.users)
  const navigate = useNavigate();

  
  const location = useLocation();
  useEffect(()=>{
    
    console.log(location.state);
    setPrice(location.state.item.price)
    
  },[])
  
  useEffect(()=>{
    async function run(){
      const res = await axios.post('http://localhost:5000/alreadyInCart',{buyer_email:user.email, product_id:location.state.item._id})
      console.log(res)
      setPresent(res.data)
    }
    run();
  },[])

  // function remove1(){
  //   if(number==1) return;
  //   setNumber(number-1);
  //   setPrice(location.state.item.price*(number-1))
  // }
  // function add1(){
  //   setNumber(number+1)
  //   setPrice(location.state.item.price*(number+1))
  // }
  async function addToCart(){
    console.log(user.email)
    console.log(location.state.item._id)
    const res = await axios.post('http://localhost:5000/addToCart',{buyer_email:user.email, product_id:location.state.item._id})
    console.log(res.data)
    setPresent(true)
  }


  return (
    <div>


      <Navbar/>

    <div className="product-detail-container">

      <div className="product-details">

        <div className="product-images">
          <img src={require('../assets/images/jeans1.jpg')} className="product-page-image" alt="" />
          <img src={require('../assets/images/jeans1.jpg')} className="product-page-image" alt="" />
          <img src={require('../assets/images/jeans1.jpg')} className="product-page-image" alt="" />
          <img src={require('../assets/images/jeans1.jpg')} className="product-page-image" alt="" />


        </div>
      <div className="product-item-details">
        <div>
        <h1>Levis</h1>
        <h2>Men Blue Solid Denim Jacket</h2>
        </div>
        <Divider/>
        <h2>${location.state.item.price}</h2>
        <Divider/>
        <div>

          {/* <div className="show-product-no-of-items">
            <Button onClick={remove1}>-</Button>
            <Input className="no-of-items" value={number}disabled/>
            <Button onClick={add1}>+</Button>
          </div> */}
        <h1 className="total-price-product-detail">Total Price:{price}</h1>
        </div>
        <Divider/>
        <div className="product-page-btns">
          {
            present === true?

            <button onClick={()=>navigate('/cart')} className="product-page-add-to-cart"> Go to Cart</button>
            :

            <button onClick={addToCart}  className="product-page-add-to-cart"><HeartOutlined className="add-to-cart-icon"/> Add to Cart</button>

          }
          {/* <button className="buy-now-btn">Buy Now</button> */}
        </div>
        <Divider/>
        <div>
          <h2>Product Description</h2>
          <p>{location.state.item.desc}</p>
        </div>
        <Divider/>
        <div>
          <h2>Delivery Options</h2>

        </div>
      </div>
      </div>

    </div>
    </div>

  );
};

export default ShowProduct;
