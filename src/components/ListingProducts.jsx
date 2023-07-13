import React, { useState } from 'react'
import Lists from './Lists';


const ListingProducts = ({products}) => {

 
  return (
    <div className="item-container">
        <div className="items">
          {products &&
            products.map((item) => {
              return <Lists item={item}/>
            })}
        </div>
      
      </div>
  )
}

export default ListingProducts