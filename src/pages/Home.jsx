import React, {useEffect, useState} from 'react'
import { Input, Button, Menu, FloatButton,Modal, InputNumber, Form,Radio,Checkbox,Select,Cascader,DatePicker, Switch, Upload, Slider, Divider } from 'antd'
import { SearchOutlined, PlusOutlined, } from '@ant-design/icons'
import items from '../utils/Categories'
import axios from 'axios'

const { RangePicker } = DatePicker;
const {TextArea} = Input
const Home = () => {
    const [imageList, setImageList] = useState([]);
    const [items, setItems] = useState([])

    function onClick(){
        console.log("first")
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    
    useEffect(()=>{
        
        async function run(){
            const x = await axios.get('http://localhost:5000/getProduct')
            setItems(x.data);
        }
        run();
    },[])
    console.log(items)

    
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    const fileList = e?.fileList || [];
    setImageList(fileList);
    console.log(fileList)
    console.log("done")
    return fileList;
  };
  
//   const normFile = (e) => {
//     if (Array.isArray(e)) {
//       return e;
//     }
//     return e?.fileList;
//   };


  return (
    <div>
        <div className="navbar">
        <nav className='nav'>
    <Input suffix={<SearchOutlined/>} className='search-navbar'/>
    <Button className='profile-btn-nav'>Profile</Button>
    <Button className='profile-btn-nav'>Cart</Button>
    <Button className='profile-btn-nav'>Log Out</Button>

</nav>
        </div>

        <div className='categories'>


        <Menu
    onClick={onClick}
    className='menu-categories'
    mode="horizontal"
    items={items}
    />

        </div>

    <FloatButton onClick={showModal} icon={<PlusOutlined/>}/>
    <Modal title="Basic Modal" width={1000} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
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
      >
        <Form.Item label="Prduct Name">
          <Input />
        </Form.Item>
        <Form.Item label="Category">
          <Cascader
            options={[
              {
                value: 'electronics',
                label: 'Electronics',
                children: [
                  {
                    value: 'mobiles',
                    label: 'Mobiles',
                  },
                  {
                    value: 'laptops',
                    label: 'Laptops',
                  },
                ],
              },
              {
                value: 'men',
                label: 'Men',
                children: [
                  {
                    value: 'menShirt',
                    label: 'Shirt',
                  },
                  {
                    value: 'menTShirt',
                    label: 'T-Shirt',
                  },
                  {
                    value: 'menJeans',
                    label: 'jeans',
                  },
                  {
                    value: 'menShoes',
                    label: 'shoes',
                  },
                ],
              },
              {
                value: 'women',
                label: 'women',
                children: [
                  {
                    value: 'womenShirt',
                    label: 'Shirt',
                  },
                  {
                    value: 'womenTShirt',
                    label: 'T-Shirt',
                  },
                  {
                    value: 'womenJeans',
                    label: 'jeans',
                  },
                  {
                    value: 'womenShoes',
                    label: 'shoes',
                  },
                ],
              },
              {
                value: 'kitchen',
                label: 'Kitchen',
                children: [
                  {
                    value: 'grocerry',
                    label: 'Grocerry',
                  },
                  {
                    value: 'utensils',
                    label: 'Utensils',
                  },
                ],
              }
            ]}
          />
        </Form.Item>
        
        <Form.Item label="Description">
          <TextArea rows={4} />
        </Form.Item>
        

<Form.Item label="Upload Images" valuePropName="fileList" getValueFromEvent={normFile}>
  <Upload action='http://localhost:5000/productAdded' listType="picture-card" fileList={imageList}>
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  </Upload>
</Form.Item>

        

        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
        <Form.Item label="Slider">
          <Slider />
        </Form.Item>
      </Form>
      </Modal>
<div className="item-container">

        <div className="items">
            {   items &&
                items.map(item=>{
                    return <div className='item'>
                        <img src="" width={400} height={300} alt="" />
                        <h1 className='item-h1'>{item.product_name}</h1>
                        <h1 className='item-h1'>{item.price}</h1>
                        
                    </div>
                })
            }

            </div>
        </div>

      
     </div>
  )
}

export default Home