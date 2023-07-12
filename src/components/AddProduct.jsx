import React, { useState } from "react";
import { Input, Button, Modal, Form, Cascader } from "antd";
import options from "../utils/AddItemOptions";
import { useSelector } from "react-redux";
import axios from 'axios'
const { TextArea } = Input;

const AddProduct = ({ setIsModalOpen, isModalOpen }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState([]);
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");


  const user = useSelector(state=>state.user.users)

  const handleOk = async () => {
    console.log(user.name)
    const res = await axios.post('http://localhost:5000/addProduct',{
      vendor_name:user.name,
      email:user.email,
      price:+price,
      desc:desc,
      product_name:name,
      category:category,
    })
    console.log(res.data);

    console.log(name);
    console.log(desc);
    console.log(category);
    // setIsModalOpen(false)
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal
        title="Basic Modal"
        width={1000}
        open={isModalOpen}
        footer={null}
      >
        <Form
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          style={{
            maxWidth: 1000,
          }}
          onFinish={handleOk}
        >
          <Form.Item
            label="Prduct Name"
            name="name"
            rules={[{ required: true, message: "Isko bhar phele" }]}
          >
            <Input onChange={(e) => setName(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Category"
            name="category"
            rules={[{ required: true, message: "Isko bhar phele" }]}
          >
            <Cascader
              onChange={(value) => setCategory(value)}
              options={options}
            />
          </Form.Item>

          <Form.Item
            label="Description"
            name="desc"
            rules={[{ required: true, message: "Isko bhar phele" }]}
          >
            <TextArea rows={4} onChange={(e) => setDesc(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Isko bhar phele" }]}
          >
            <Input onChange={(e) => setPrice(e.target.value)} />
          </Form.Item>

          <div className="addproductbtn">
            <Form.Item>
              <Button onClick={handleCancel}>Cancel</Button>
            </Form.Item>
            <Form.Item>
              <Button
                className="submit-add-product"
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default AddProduct;
