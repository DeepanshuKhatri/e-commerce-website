import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import ListingProducts from "../components/ListingProducts";
import Navbar from "../components/Navbar";
import { Divider, FloatButton } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AddProduct from "../components/AddProduct";
import ShowCartItem from "../components/ShowCartItem";

const YourProducts = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0)
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector((state) => state.user.users);

  useEffect(() => {
    async function run() {
      const data = await axios.post("http://localhost:5000/getMyProductOrders", {
        vendor_email: user.email,
      });
      setOrders(data.data);
    }
    run();
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    async function run() {
      const res = await axios.post("http://localhost:5000/myProduct", {
        vendor_email: user.email,
      });
      setProducts(res.data);
      setFilteredProducts(res.data);
    }
    run();
  }, []);

  return (
    <div>
      <Navbar products={products} setFilteredProducts={setFilteredProducts} />
      <div className="dashboard">
        <div
          onClick={() => setPage(1)}
          className={
            page == 1 ? "dashboard-options selected-page" : "dashboard-options"
          }
        >
          My Products
        </div>
        <div
          onClick={() => setPage(2)}
          className={
            page == 2 ? "dashboard-options selected-page" : "dashboard-options"
          }
        >
          Orders
        </div>
      </div>
      {page == 1 && (
        <>
          <ListingProducts page="myProducts" products={filteredProducts} />
          {user.role != "customer" && (
            <FloatButton onClick={showModal} icon={<PlusOutlined />} />
          )}
          {isModalOpen && (
            <AddProduct
              setIsModalOpen={setIsModalOpen}
              isModalOpen={isModalOpen}
            />
          )}
        </>
      )}

      {page == 2 && (
        <>
          {/* {orders &&
            orders.map((order) => {
              return (
                <ShowCartItem
                  page="order"
                  cartItems={orders}
                  setCartItems={setOrders}
                />
              );
            })} */}

          <div className="cart-container">
            <div className="cart-details">

              {orders &&
                orders.map((cart) => {
                  setTotalPrice(prev=> prev*cart.price*cart.quantity)
                  setTotalDiscount(prev=>prev*cart.discount*cart.quantity)
                  return (
                    <ShowCartItem
                      page="order"
                      cartItems={orders}
                      setCartItems={setOrders}
                    />
                  );
                })}
            </div>
            <div className="place-order">
              <div>
                <h2>Total Earnings</h2>
                <Divider />
              </div>
              <h4>Total Items Sold ({orders.length})</h4>

              {/* <h4>Price Details(1 item)</h4> */}
              <div className="mrp-details">
                <div>Total Items Sold</div>
                <div>{orders.length}</div>
              </div>
              <div className="mrp-details">
                <div>Discount on MRP</div>
                <div>123</div>
              </div>
              <div className="mrp-details">
                <div>Coupon Discount</div>
                <div>123</div>
              </div>
              <Divider />
              <div className="mrp-details">
                <h1>Total Amount</h1>
                <h2>640</h2>
              </div>
              <button
                onClick={() => console.log("first")}
                className="product-page-add-to-cart"
              >
                Place Order
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default YourProducts;
