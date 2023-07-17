import React, { useState } from "react";
import { Input, Button, Form, Row, Col, Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/slice/user.slice";
import Navbar from "../components/Navbar";
const Profile = () => {
  const userData = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [address, setAddress] = useState(userData?.address);
  const [password, setPassword] = useState(userData?.password);
  console.log(name);

  function onFinish() {
    dispatch(
      addUser({
        name,
        email,
        address,
        password,
      })
    );
  }
  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <div className="profile-details">
          <div className="personal-details">
            <h1>Profile Details</h1>
            <Divider />
            <Row>
              <Col span={12}><h4>Name</h4></Col>
              <Col span={12}><h4>{userData?.name}</h4></Col>
            </Row>
            <Row>
              <Col span={12}><h4>Email</h4></Col>
              <Col span={12}><h4>{userData?.email}</h4></Col>
            </Row>
            <Row>
              <Col span={12}><h4>Phone Number</h4></Col>
              <Col span={12}><h4>{userData?.number|| "not Defined"}</h4></Col>
            </Row>
            <Row>
              <Col span={12}><h4>Password</h4></Col>
              <Col span={12}><h4>{userData?.password|| "N/A"}</h4></Col>
            </Row>
            <button className="edit-profile-btn">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

{
  /* <div className='profile-form'>

<Form 
className='profile-container'
labelCol={{
    span: 5,
  }}
  wrapperCol={{
    span: 14,
  }}
  layout="horizontal"
  style={{
    maxWidth: 1000,
  }} onFinish={onFinish}>
    <Form.Item initialValue={name}  name='name' rules={[
                    {
                        required: true,
                        message: 'Please ennter your name',
                    },
                ]}
    label="name">
        <Input  className='profile-inp'  defaultValue={name} onChange={e=>setName(e.target.value)}/>
    </Form.Item>
    <Form.Item initialValue={email} rules={[
                    {
                        required: true,
                        message: 'Please ennter your name',
                    },
                ]} name='email' label="email">
        <Input className='profile-inp'  type='email' value={email} defaultValue={email}  onChange={e=>setEmail(e.target.value)}/>
    </Form.Item>
    <Form.Item  initialValue={address}   rules={[
                    {
                        required: true,
                        message: 'Please ennter your name',
                    },
                ]} name="address" label="address">
        <Input className='profile-inp' defaultValue={address}  onChange={e=>setAddress(e.target.value)}/>
    </Form.Item>
    <Form.Item>
        <Button type='primary' htmlType='submit'>Save</Button>
    </Form.Item>
    
</Form>
</div> */
}
