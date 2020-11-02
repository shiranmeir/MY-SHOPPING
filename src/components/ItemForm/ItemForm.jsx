import React, { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, InputNumber, Button, DatePicker } from "antd";
import { addItem } from "../../actions";
import "./ItemForm.scss";

const validateMessages = {
  required: "${label} is required!",
  types: {
    number: "Not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const ItemForm = () => {
  const dispatch = useDispatch();
  const newItemAdded = useSelector((state) => state.newItemAdded);
  const [items, setItems] = useState();
  const [form] = Form.useForm();

  const onFinish = (fieldsValue) => {
    const values = {
      ...fieldsValue,
      date: fieldsValue["date"].format("DD-MM-YYYY"),
    };
    setItems(values);
    dispatch(addItem(values));
    form.resetFields();
  };
  console.log(items);

  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Please select time!",
      },
    ],
  };

  return (
    <Form
      form={form}
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      requiredMark={false}
    >
      <Form.Item
        name={["name"]}
        label="Item Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["store"]}
        label="Online Store"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["price"]}
        label="Item Price"
        rules={[
          {
            type: "number",
            min: 0,
            required: true,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="Delivery Date"
        name={["date"]}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <DatePicker {...config} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ItemForm;
