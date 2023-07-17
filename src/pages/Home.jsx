import React, { useEffect, useState } from "react";
import {Carousel, Divider} from "antd";
import {useSelector} from  'react-redux';
import Navbar from "../components/Navbar";
import axios from "axios";
import ListingProducts from "../components/ListingProducts";
import AdminNavbar from "../components/AdminNavbar";



const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showCarousel, setShowCarousel] = useState(true);
  const user = useSelector(state=>state.user.users)

 
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  useEffect(() => {
    async function run() {
      const x = await axios.get("http://localhost:5000/getProduct");
      setProducts(x.data);
      setFilteredProducts(x.data)
      console.log('abc')
    }
    run();
  }, []);


  return (
    <div className="home-container">
      {
        user.role==='admin'?
        <>
        <AdminNavbar/>
        </>:
        <>
        
      <Navbar products={products} setShowCarousel={setShowCarousel} setFilteredProducts={setFilteredProducts}/>
      <Carousel className="carousel" style={showCarousel===true? {display: "block"}: {display:"none"}} dotPosition="bottom" afterChange={onChange} autoplay >
      <div>
        <img className="slider-image" src={require('../assets/images/sliderimage1.png')} alt="" />
      </div>
      <div>
      <img  className="slider-image" src={require('../assets/images/sliderimage2.png')} alt="" />

      </div>
      <div>
      <img  className="slider-image" src={require('../assets/images/sliderimage3.png')} alt="" />

      </div>
      <div>
      <img  className="slider-image" src={require('../assets/images/sliderimage4.png')} alt="" />

      </div>
    </Carousel>
    <Divider/>


      <ListingProducts products={filteredProducts}/>
      
      </>
    }
    </div>
  );
};

export default Home;



      {/* <div className="categories">
        <Menu
          onClick={onClick}
          className="menu-categories"
          mode="horizontal"
          items={items}
        />
      </div> */}