import { Col, FloatButton, Modal, Row } from 'antd';
import React, { useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { CaretDownOutlined } from '@ant-design/icons';

const ShowCartItem = ({cart,cartItems, setCartItems}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productQuantity, setProductQuantity] = useState(1);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  function handleQuantity(){
    setIsModalOpen(false);
    setQuantity(productQuantity)
  }
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
            <img src={require('../assets/images/jeans1.jpg')} height={130} alt="" />
        </div>
        <div className='cart-item-overview'>
            <h5>Roadster</h5>
            <h4>Men T-shirt</h4>
            <h4>$400</h4>

            <button onClick={showModal} className="quantity-btn">Qty : {quantity} <CaretDownOutlined /></button>
            <button onClick={()=>removeItem(cart._id)} className='remove-from-cart-btn'>X</button>
            <Modal width={600} footer={null} title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {/* <Row >
                    <Col span={6}>1</Col>
                    <Col span={6}>2</Col>
                    <Col span={6}>1</Col>
                    <Col span={6}>2</Col>
                    <Col span={6}>2</Col>
                    <Col span={6}>1</Col>
                    <Col span={6}>2</Col>
                    <Col span={6}>1</Col>
                    <Col span={6}>2</Col>
                    <Col span={6}>2</Col>


                </Row> */}
                <div className='select-quantity'>
                    <div onClick={()=>setProductQuantity(1)} className={productQuantity==1 ?' selected-quantity cart-quantity': "cart-quantity"}>1</div>
                    <div onClick={()=>setProductQuantity(2)} className={productQuantity==2 ?' selected-quantity cart-quantity': "cart-quantity"}>2</div>
                    <div onClick={()=>setProductQuantity(3)} className={productQuantity== 3?' selected-quantity cart-quantity': "cart-quantity"}>3</div>
                    <div onClick={()=>setProductQuantity(4)} className={productQuantity==4 ?' selected-quantity cart-quantity': "cart-quantity"}>4</div>
                    <div onClick={()=>setProductQuantity(5)} className={productQuantity==5 ?' selected-quantity cart-quantity': "cart-quantity"}>5</div>
                    <div onClick={()=>setProductQuantity(6)} className={productQuantity==6 ?' selected-quantity cart-quantity': "cart-quantity"}>6</div>
                    <div onClick={()=>setProductQuantity(7)} className={productQuantity==7 ?' selected-quantity cart-quantity': "cart-quantity"}>7</div>
                    <div onClick={()=>setProductQuantity(8)} className={productQuantity==8 ?' selected-quantity cart-quantity': "cart-quantity"}>8</div>
                    <div onClick={()=>setProductQuantity(9)} className={productQuantity==9 ?' selected-quantity cart-quantity': "cart-quantity"}>9</div>
                    <div onClick={()=>setProductQuantity(10)} className={productQuantity==10 ?' selected-quantity cart-quantity': "cart-quantity"}>10</div>
                </div>
                <button onClick={handleQuantity} className="set-quantity-btn">Done</button>
      </Modal>
        </div>
          </div>
  )
}

export default ShowCartItem