import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { createCustomer } from './CustomerSlice';
import login from '../../Asset/login.jpg';

const Login = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log('Received values of form:', values);
    dispatch(createCustomer(values.fullName, values.address, values.email));
  };

  return (
    <div className='h-screen flex flex-col'>
      {/* Image and form layout */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
        <div>
          <img src={login} alt="" className="w-full" />
        </div>
        <div className="w-full sm:w-96">
          {/* Customer form */}
          <Form
            name="customer_form"
            onFinish={onFinish}
            layout="vertical"
            className="w-full"
          >
            {/* Full Name input */}
            <Form.Item
              name="fullName"
              label="Full Name"
              rules={[{ required: true, message: 'Please enter your full name' }]}
            >
              <Input placeholder="Enter your full name" />
            </Form.Item>
            {/* Address input */}
            <Form.Item
              name="address"
              label="Address"
              rules={[{ required: true, message: 'Please enter your address' }]}
            >
              <Input.TextArea placeholder="Enter your address" />
            </Form.Item>
            {/* Email input */}
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email address' },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>
            {/* Submit button */}
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full bg-blue-500 hover:bg-blue-600">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
