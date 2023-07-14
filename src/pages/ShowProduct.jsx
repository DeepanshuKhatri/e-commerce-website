import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {Button,Input, Divider} from 'antd'
import {HeartOutlined} from '@ant-design/icons'
import Navbar from "../components/Navbar";

const ShowProduct = () => {
  const [number, setNumber] = useState(1);
  const [price, setPrice] = useState(0)

  const location = useLocation();
  useEffect(()=>{
    
    console.log(location.state);
    setPrice(location.state.item.price)

  },[])

  function remove1(){
    if(number==1) return;
    setNumber(number-1);
    setPrice(location.state.item.price*(number-1))
  }
  function add1(){
    setNumber(number+1)
    setPrice(location.state.item.price*(number+1))
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

        <div className="show-product-no-of-items">
          <Button onClick={remove1}>-</Button>
          <Input className="no-of-items" value={number}disabled/>
          <Button onClick={add1}>+</Button>
        </div>
        <h1 className="total-price-product-detail">Total Price:{price}</h1>
        </div>
        <Divider/>
        <div className="product-page-btns">
          <button className="product-page-add-to-cart"><HeartOutlined className="add-to-cart-icon"/> Add to Cart</button>
          <button className="buy-now-btn">Buy Now</button>
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
