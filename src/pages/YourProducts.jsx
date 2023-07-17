import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import ListingProducts from '../components/ListingProducts'
import Navbar from '../components/Navbar'
import { FloatButton } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import AddProduct from '../components/AddProduct';


const YourProducts = () => {
    const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const user = useSelector(state=>state.user.users)
  

    const showModal = () => {
      setIsModalOpen(true);
    };

    useEffect(()=>{
        async function run(){
            const res = await axios.post('http://localhost:5000/myProduct', {vendor_name:user.name})
            setProducts(res.data)
      setFilteredProducts(res.data)

        }
        run();
    },[] )

  return (
    <div>
              <Navbar products={products} setFilteredProducts={setFilteredProducts}/>
        <ListingProducts page="myProducts" products={filteredProducts}/>
        {user.role!="customer" && <FloatButton onClick={showModal} icon={<PlusOutlined />} />}
      {isModalOpen && <AddProduct setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>}
    </div>
  )
}

export default YourProducts