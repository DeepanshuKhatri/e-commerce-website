import React, { useEffect, useState } from 'react'
import {Input, Button} from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../redux/slice/user.slice'

const Navbar = ({products, setFilteredProducts}) => {
  const dispatch = useDispatch();

  function check(e){
    setFilteredProducts(products?.filter(x=>x.category[1].includes(e.target.value)))
  }
  function logout(e){
    dispatch(removeUser())
  }

    const navigate = useNavigate();
    const user = useSelector(state=>state.user.users)
    
  return (
    <div>
        <div className="navbar">
        <nav className="nav">
          <Input suffix={<SearchOutlined />} onChange={check} className="search-navbar" />
          <Button
            onClick={() => navigate("/profile")}
            className="profile-btn-nav"
          >
            Profile
          </Button>
          <Button onClick={()=>navigate('./cart')}   className="profile-btn-nav">Cart</Button>
          <Button onClick={logout} className="profile-btn-nav">Log Out</Button>
          {user.role=="vendor" && <Button onClick={()=>navigate('./myProducts')} className="profile-btn-nav">Your Products</Button>}
        </nav>
      </div>
    </div>
  )
}

export default Navbar