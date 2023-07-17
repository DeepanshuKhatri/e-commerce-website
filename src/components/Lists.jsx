import React, {useEffect, useState} from 'react'
import { Modal,Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import EditProduct from './EditProduct';

const Lists = ({item, page}) => {
    const user = useSelector(state=>state.user.users)
    const [isModalOpen, setIsModalOpen] = useState(false);

  // const [addedToCart, setAddedToCart] = useState(false);
  const showModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  useEffect(() => {
    async function run() {
      const data = await axios.post("http://localhost:5000/getCartProduct", {
        customer_email: user.email,
      });
      console.log(data)
      // setItems(items + +(data.data));
    }
    run();
  }, []);

  // console.log(cartItems);

    
    // async function addToCart(item){
    //     setAddedToCart(true)
    //     console.log(user.email)
    //     console.log(item._id)
    //     const res = await axios.post('http://localhost:5000/addToCart',
    //     {
    //       buyer_name:user.name,
    //       buyer_email: user.email,
    //       product_id:item._id
    //     }
    //     )
    //     console.log(res.data)
    //   }
    //   async function remove(item){
    //     const res = await axios.post('http://localhost:5000/removeFromCart',
    //     {
    //       buyer_email:user.email,
    //       product_id:item._id
    //     })
    //   }


    async function removeItem(e, id){
      e.stopPropagation();
      const res = await axios.post('http://localhost:5000/removeProduct', {product_id:id});
      console.log(res.data);
      alert("Successfully Deleted")
      // setCartItems(
      //     cartItems.filter(x=> x._id !=id)
      // )
  }
  async function updateItem(e, id){

  }

  return (
    <div className="item">
                  <img
                    src={require("../assets/images/jeans1.jpg")}
                    width={200}
                    height={300}
                    alt=""
                  />
                  {/* <div className='item-name'> */}
                  <h3>Levis</h3>
                  <h3>{item.product_name}</h3>
                  <p> {item.desc}</p>
                  <h3>${item.price}</h3>

                  {
                    page==="myProducts" &&
                    <div className="product-options">

                  <EditOutlined onClick={(e)=>showModal(e)} className='edit-product-option'/>
                  <DeleteOutlined onClick={(e)=>removeItem(e, item._id)} className='delete-product-option'/>
                  </div>
                  }
                   <EditProduct item={item} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>
                </div>
  )
}

export default Lists;






{/* </div> */}
{/* <div className='item-btns'>
{items!=0 ? 
<div  className="cart-add-remove ">
  <button onClick={e=>remove(item)} className='cart-p-m'>-</button>
  <h1>{items}</h1>
  <button onClick={e=>addToCart(item)} className='cart-p-m'>+</button>
</div>
:  
<button onClick={()=>addToCart(item)} className="add-to-cart-btn">Add to Cart</button>
}
<button className="buy-btn">Buy</button>
</div> */}