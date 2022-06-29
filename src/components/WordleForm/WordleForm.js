import React from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { guessRandom } from 'redux/wordle/operation';

const WordleForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(guessRandom(values.guess, values.seed, values.size));
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item
        label="Guess"
        name="guess"
        rules={[
          {
            required: true,
            message: 'Please input your guess!',
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item label="Size" name="size">
        <Input type="number" />
      </Form.Item>
      <Form.Item label="Seed" name="seed">
        <Input type="number" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default WordleForm;
