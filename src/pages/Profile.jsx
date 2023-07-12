import React from 'react'
import {Input, Button, Form} from 'antd'

const Profile = () => {
    function onFinish(){

    }
  return (
    <div>

        <Form layout='vertical' onFinish={onFinish}>
            <Form.Item  name='name' rules={[
                            {
                                required: true,
                                message: 'Please ennter your name',
                            },
                        ]}
            label="name">
                <Input/>
            </Form.Item>
            <Form.Item rules={[
                            {
                                required: true,
                                message: 'Please ennter your name',
                            },
                        ]} name='email' label="email">
                <Input/>
            </Form.Item>
            <Form.Item rules={[
                            {
                                required: true,
                                message: 'Please ennter your name',
                            },
                        ]} name="address" label="address">
                <Input/>
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit'>Save</Button>
            </Form.Item>
            
        </Form>
        
    </div>
  )
}

export default Profile