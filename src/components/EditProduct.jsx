import React, { useEffect, useState } from "react";
import { Input, Button, Modal, Form, Cascader } from "antd";
import options from "../utils/AddItemOptions";
import { useSelector } from "react-redux";
import axios from 'axios'
const { TextArea } = Input;

const EditProduct = ({item, setIsModalOpen,isModalOpen}) => {
    const [name, setName] = useState(item.product_name||"");
  const [category, setCategory] = useState(item.category||[]);
  const [desc, setDesc] = useState(item.desc||"");
  const [price, setPrice] = useState(item.price||"");
//   useEffect(()=>{
//     async function run(id){
//         // const res = await axios.post('http://localhost:5000/getOneProduct', {id:id})
//         // console.log(res.data)
//     }
//     run();
//     console.log("useefflect")
//   },[])


  const user = useSelector(state=>state.user.users)

  const handleOk = async () => {
    console.log(user.name)
    const res = await axios.post('http://localhost:5000/updateProduct',{
        id:item._id,
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
  const handleCancel = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal
      onClick={e=>e.stopPropagation()}
        title="Basic Modal"
        width={1000}
        onCancel={handleCancel}
        open={isModalOpen}
        footer={null}
      >
        <Form
        onClick={e=>e.stopPropagation()}
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
            initialValue={name}
            rules={[{ required: true, message: "Isko bhar phele" }]}
          >
            <Input value={name}  onChange={(e) => setName(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Category"
            name="category"
            initialValue={category}
            rules={[{ required: true, message: "Isko bhar phele" }]}
          >
            <Cascader
              onChange={(value) => setCategory(value)}
              options={options}
            />
          </Form.Item>

          <Form.Item
            label="Description"
            initialValue={desc}
            name="desc"
            rules={[{ required: true, message: "Isko bhar phele" }]}
          >
            <TextArea rows={4} onChange={(e) => setDesc(e.target.value)} />
          </Form.Item>
          <Form.Item
          initialValue={price}
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
}

export default EditProduct