import React, { useEffect, useState } from "react";
import {Menu} from "antd";
import items from "../utils/Categories";
import {useSelector} from  'react-redux';
import Navbar from "../components/Navbar";
import axios from "axios";
import ListingProducts from "../components/ListingProducts";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const user = useSelector(state=>state.user.users)
  console.log(user)

  function onClick(e) {
    console.log(e.key)
    setFilteredProducts(products?.filter(x=>x.category[1].includes(e.key)))

  }


  useEffect(() => {
    async function run() {
      const x = await axios.get("http://localhost:5000/getProduct");
      setProducts(x.data);
      setFilteredProducts(x.data)
      console.log('abc')
    }
    run();
  }, []);
  console.log(items);

  console.log(products)

  return (
    <div>
      <Navbar products={products} setFilteredProducts={setFilteredProducts}/>

      <div className="categories">
        <Menu
          onClick={onClick}
          className="menu-categories"
          mode="horizontal"
          items={items}
        />
      </div>

      <ListingProducts products={filteredProducts}/>
      
    </div>
  );
};

export default Home;
