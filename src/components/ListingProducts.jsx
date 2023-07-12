import React from 'react'
import ProductDesc from '../pages/ProductDesc';
import axios from 'axios';
import { useSelector } from 'react-redux';


const ListingProducts = ({products}) => {
  const user = useSelector(state=>state.user.users)

  async function addToCart(item){
    console.log(user.email)
    console.log(item._id)
    const res = await axios.post('http://localhost:5000/addToCart',
    {
      customer_email: user.email,
      product_uid:item._id
    }
    )
    console.log(res.data)
  }
console.log(products)

  return (
    <div className="item-container">
        <div className="items">
          {products &&
            products.map((item) => {
              return (
                <div className="item">
                  <img
                    src={require("../assets/images/jeans1.jpg")}
                    width={400}
                    height={300}
                    alt=""
                  />
                  {/* <div className='item-name'> */}
                  <h1 className="item-h1">{item.product_name}</h1>
                  <h1 className="item-h1">{item.price}</h1>
                  {/* </div> */}
                  {/* <div className='item-btns'> */}
                  <button onClick={()=>addToCart(item)} className="add-to-cart-btn">Add to Cart</button>
                  <button className="buy-btn">Buy</button>
                  {/* </div> */}
                </div>
              );
            })}
        </div>
      
      </div>
  )
}

export default ListingProducts