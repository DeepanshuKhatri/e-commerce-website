import React, { useState } from 'react'
import Lists from './Lists';
import { useNavigate } from 'react-router-dom';



const ListingProducts = ({products}) => {
  const navigate = useNavigate()
 
  return (
    <div className="item-container">
        <div className="items">
          {products &&
            products.map((item) => {
              
              return <div onClick={()=>{navigate('/product', {state:{item:item}})}}><Lists  item={item}/></div>
            })}
        </div>
      
      </div>
  )
}

export default ListingProducts