import { Button, Form, Input } from "antd";
import React from "react";

const QuoteForm = () => {
  const { TextArea } = Input;

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="quote_form">
      <Form
        name="quoteForm"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter your Name!",
            },
          ]}
        >
          <Input placeholder="Name" className="input_box" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter your Email!",
            },
          ]}
        >
          <Input placeholder="Email" className="input_box" />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: "Please enter your Phone!",
            },
          ]}
        >
          <Input placeholder="Phone" className="input_box" />
        </Form.Item>
        <Form.Item name="message">
          <TextArea
            rows={3}
            placeholder="Message"
            className="input_box textarea"
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" className="button green_btn">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default QuoteForm;
