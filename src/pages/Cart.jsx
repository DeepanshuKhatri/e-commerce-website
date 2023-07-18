import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartList from "../components/CartList";
import CartNavbar from "../components/CartNavbar";
import { Divider, Modal, Form, Input, Checkbox, Button } from "antd";
import ShowCartItem from "../components/ShowCartItem";
import AddAddress from "../utils/AddAddress";

const Cart = () => {
  const user = useSelector((state) => state.user.users);
  const [cartItems, setCartItems] = useState([]);
  const [userAddress, setUserAddress] = useState([]);
  const [index, setIndex] = useState(0)
  // const [cartProduct, setCartProduct] = useState([]);

  useEffect(() => {
    async function run() {
      const data = await axios.post("http://localhost:5000/getCartItems", {
        customer_email: user.email,
      });

      const address = await  axios.post('http://localhost:5000/getUserAddresses', {email:user.email})
      console.log(data)
      console.log(address.data)
      setUserAddress(address.data)
      setCartItems(data.data);
    }
    run();
  }, []);
  console.log(userAddress)



  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);


  const [addAddressModalOpen, setAddAddressModalOpen] = useState(false);



  
  async function addAddress(){
    setAddAddressModalOpen(true);

  }

  const handleOk = () => {
    setIsAddressModalOpen(false);
  };
  const handleCancel = () => {
    setIsAddressModalOpen(false);
  };


  
  async function address(){
    setIsAddressModalOpen(true);

  }


  async function placeOrder(){
    const res = await axios.post("http://localhost:5000/placeOrder", {cartItems: cartItems})
    console.log(res.data)
    const deleteCart = await axios.post('http://localhost:5000/emptyCart', {email: user.email});
    console.log(deleteCart.data);
    setCartItems([])
  }

  console.log(cartItems);

  return (
    <div >
      <div>

        <CartNavbar/>
        {/* <Divider className="cart-navbar-divider"/> */}
      </div>

      <div className="cart-container">
        <div className="cart-details">
          <div className="change-address">
            <div className="current-address">
              {
                userAddress &&
                <>
                 <p> Deliver to: {userAddress[index]?.name}</p>
                 {/* <p></p> */}
                </>
              } 
            </div>
            <div>
              <button onClick={address} className="change-address-btn">CHANGE ADDRESS</button>
            </div>
          </div>
          <Divider/>
          {cartItems && 
          cartItems.map((cart)=>{
           return  <ShowCartItem page="cart" cart={cart} cartItems={cartItems} setCartItems={setCartItems}/>
          })
          }
        </div>
        <div className="place-order">
          <div>
            <h2>COUPONS</h2>
            <Divider/>
          </div>
            <h4>Price Details(1 item)</h4>
          <div className="mrp-details">
            <div>
              Total MRP
            </div>
            <div>
              123
            </div>
          </div>
          <div className="mrp-details">
            <div>
              Discount on MRP
            </div>
            <div>
              123
            </div>
          </div>
          <div className="mrp-details">
            <div>
              Coupon Discount
            </div>
            <div>
              123
            </div>
          </div>
          <Divider/>
          <div className="mrp-details">
            <h1>Total Amount</h1>
            <h2>640</h2>
          </div>
          <button onClick={placeOrder} className="product-page-add-to-cart">Place Order</button>
          
          
        </div>
      </div>
        

      {/* <h1>Cart</h1>
      <div className="cart-container">
        <div className="c-i">

        {cartItems &&
          cartItems.map((cart) => {
            return <CartList cart={cart} />
          })}
        </div>

      <div className="total-price-cart"></div>
      </div> */}


          
          
<Modal title="Basic Modal" open={isAddressModalOpen} width={1000}  onOk={handleOk} onCancel={handleCancel}>
  <button onClick={addAddress}>Add Address</button>

  <div className="addresses">

  {
    userAddress.map((p, ind)=>{
      return <div onClick={()=>setIndex(ind)} className="show-address">
                    <p>{p.name}</p>
                    <p>{p.address}</p>
                    <p>{p.locality}</p>
                    <p>{p.city}</p>

                  </div>
                })
                
              }
              </div>
      </Modal>

<AddAddress addAddressModalOpen={addAddressModalOpen} setAddAddressModalOpen={setAddAddressModalOpen}/>

    </div> 
  );
};

export default Cart;
