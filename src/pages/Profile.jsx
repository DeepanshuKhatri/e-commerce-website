import React, { useState } from 'react'
import {Input, Button, Form} from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import {addUser} from '../redux/slice/user.slice'
import Navbar from '../components/Navbar'
const Profile = () => {
    const userData = useSelector(state=>state.user.users)
    const dispatch = useDispatch();
    const [name, setName] = useState(userData.name)
    const [email, setEmail] = useState(userData.email)
    const [address, setAddress] = useState(userData?.address)
    const [password, setPassword] = useState(userData?.password)
    console.log(name)

    function onFinish(){
        dispatch(addUser({
            name,email,address, password
        }))

    }
  return (
    <div >
        <Navbar/>

        <div className='profile-form'>

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
        </div>
        
    </div>
  )
}

export default Profile