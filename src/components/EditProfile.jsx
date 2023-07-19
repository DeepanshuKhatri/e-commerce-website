import React, { useState } from 'react';
import { Button, Modal, Upload } from 'antd';
import { useSelector } from 'react-redux';
import {  Checkbox, Form, Input } from 'antd';

const  EditProfile= ({isModalOpen, setIsModalOpen}) => {
    const userData = useSelector(state=>state.user.users)
    const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [address, setAddress] = useState(userData?.address);
  const [password, setPassword] = useState(userData?.password);

    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
      <>
        {/* <Button type="primary" onClick={showModal}>
          Open Modal
        </Button> */}
        <Modal title="Basic Modal" footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      initialValue={name}
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input value={name}/>
    </Form.Item>
    <Form.Item>
      
    </Form.Item>
      
      <Form.Item
        label="email"
        name="email"
        initialValue={email}
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input disabled/>
      </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      initialValue={password}
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input value={password} />
    </Form.Item>


    <Form.Item>
      <Button onClick={()=>setIsModalOpen(false)}  >
        Cancel
      </Button>
    </Form.Item>  
    

    <Form.Item
      
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
        </Modal>
      </>
    );
}

export default EditProfile;