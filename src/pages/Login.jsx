import React, { useState } from 'react'
import { Form, Input, Button, Divider } from 'antd'
import {GoogleOutlined} from '@ant-design/icons'
import '../assets/styles/styles.css'
import axios from 'axios'
import {addUser} from '../redux/slice/user.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import e from 'express'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate();



    async function onFinish() {
        const res = await axios.post('http://localhost:5000/login', {email, password})
        if(res.status==201){
            alert("Invalid Credentials")
        }
        else{
            console.log(res.data)
            dispatch(addUser({
                name:res.data.name,
                email:res.data.email,
                role:res.data.role,
                // password:res.data.password
            }))
            alert("Logged In Successfully")
            navigate('/profile')
        }
        console.log("Finish")
        console.log(email)
        console.log(password)
    }
    return (
        <div className='login-signup-page'>

            <div className='login-signup-container'>
                <Form
                    onFinish={onFinish}
                    
                    >
                        <Form.Item>

                    <h1 className='login-text'>Welcome back!</h1>
                        </Form.Item>
                    <Form.Item name="emailOrPhone"
                    initialValue={email}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input type='email' placeholder='Enter Email or Phone Number' onChange={e=>setEmail(e.target.value)} className='login-signup-input' />
                    </Form.Item>

                    <Form.Item name="password"
                    initialValue={password}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password  onChange={e=>setPassword(e.target.value)} placeholder='Enter Password' className='login-signup-input' />
                    </Form.Item>
                    <Form.Item>

                        <Button type='primary'className='login-btn' htmlType='submit'>
                            Sign in
                        </Button>
                    </Form.Item>

                </Form>
                <Divider>or</Divider>

                <Button icon={<GoogleOutlined className='google-icon'/>} className='google-login' type='primary'>Sign in with Google</Button>

            </div>




        </div>
    )
}

export default Login