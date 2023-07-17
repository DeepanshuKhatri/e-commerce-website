import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'

const Order = () => {
  const [orders, setOrders] = useState([])
  useEffect(()=>{
    async function run(){
      const data = await axios.get('http://localhost:5000/getAllOrders')
      console.log(data.data)
      setOrders(data.data);
    }
    run();
  }, [])
  return (
    <div>
      <Navbar/>
      <div className="order-container">

      <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Product</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            {orders && 
            orders.map((order)=>{
              return <tr>
                <td>{order.vendor_name}</td>
                <td>{order.product_id}</td>

                <td>{order.email}</td>

                <td>{order.status}</td>

                <td>{order.address}</td>


              </tr>
            })
            
            }
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Order