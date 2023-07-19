import React, { useState } from 'react'
import { Form, Input, Button,message, Divider, Radio } from 'antd'
import {GoogleOutlined} from '@ant-design/icons'
import '../assets/styles/styles.css'
import { addUser } from '../redux/slice/user.slice'
import { useDispatch } from 'react-redux'
import { auth, db } from "../config/firebase";
import axios from 'axios';
import {
    GoogleAuthProvider,
    signInWithPopup,
  } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
// import e from 'express'

const Signup = () => {

    const [messageApi, contextHolder] = message.useMessage();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")
    const [role, setRole] = useState("customer")
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const error = () => {
        messageApi.open({
          type: 'error',
          content: 'User Already Exists',
        });
      };

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(async (res) => {
          const res1 = res.user;
          console.log(res);
          const response = await axios.post('http://localhost:5000/signup', {name:res1.displayName, email:res1.email, role:role})
          console.log(response.data)
        
            navigate('/profile');
        //   const q = query(collection(db, "users"), where("uid", "==", res1.uid));
        //   console.log(q);
        //   const q2 = await getDocs(q);
        //   if (q2.empty) {
        //     await addDoc(collection(db, "users"), {
        //   name: res1.displayName,
        //   email: res1.email,
        //   uid: res1.uid,
        //   createdAt: serverTimestamp(),
        //       // avatar: res1.photoURL,
        //       // online: true,
        //     });
        //   }
        }
        );
      };


    async function onFinish() {
        console.log("Finish")
        // dispatch(addUser({
        //     name, email, password, role
        // }))

        const res = await axios.post('http://localhost:5000/signup', {name, email, password, role})
        if(res.status==201){
            error();
        }
        else {
            // alert("Account Created Successfully")
            navigate('/login')
        }
        console.log(email)
        console.log(password)
        console.log(name)
        console.log(role)
        // navigate('/login')
    }
    return (
        <div className='login-signup-page'>
            {contextHolder}

            <div className='login-signup-container'>
                <Form
                    onFinish={onFinish}
                    
                    >
                        <Form.Item>

                    <h1 className='login-text'>It'll only take 2 minutes!</h1>
                        </Form.Item>

                        <Form.Item name="name"
                    initialValue={name}
                        rules={[
                            {
                                required: true,
                                message: 'Please ennter your name',
                            },
                        ]}
                    >
                        <Input placeholder='Enter your name' onChange={e=>setName(e.target.value)} className='login-signup-input' />
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

                    <Form.Item   
                    label="Select Role"
                    >
                    <Radio.Group value={role} className='select-role' onChange={e=>setRole(e.target.value)}>
            <Radio value="customer">Customer</Radio>
            <Radio value="vendor">Vendor</Radio>
          </Radio.Group>
                    </Form.Item>

                    <Form.Item>
                        <p>Already have an account? <a href="/login">Login</a></p>
                    </Form.Item>
                    <Form.Item>

                        <Button type='primary'className='login-btn' htmlType='submit'>
                            Signup
                        </Button>
                    </Form.Item>

                </Form>
                <Divider>or</Divider>

                <Button icon={<GoogleOutlined className='google-icon'/>} onClick={signInWithGoogle} className='google-login' type='primary'>Sign in with Google</Button>

            </div>




        </div>
    )
}

export default Signup