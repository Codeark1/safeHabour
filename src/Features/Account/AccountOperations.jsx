import React from 'react';
import { Form, Input, Button, Select, Row, Col } from 'antd';
import img from "../../Asset/img.png";
import { useDispatch, useSelector } from 'react-redux';


import { deposite, withdrawal, getLoan, payLoan } from './AccountSlice'; // adjust the path if needed


 


const { Option } = Select;

const AccountOperations = () => {
  const { loan, balance } = useSelector(store => store.account);
 
  const dispatch = useDispatch();

  // Deposit function
  const onDeposit = (values) => {
    dispatch(deposite(Number(values.deposite), values.currency)); 
  };
  
  // Withdraw function
  const onWithdraw = (values) => {
    dispatch(withdrawal(values.withdraw));
  };

  // Get loan function
  const onGetLoan = (values) => {
    dispatch(getLoan(Number(values.loan)));
    console.log(values)
  };

  // Pay loan function
  const onPayLoan = (values) => {
    dispatch(payLoan(values.payLoan));
  };

  return (
    <div className='grid grid-cols-2 min-h-screen bg-[#cbd6dc]'>
      {/* Deposit Form */}
      <div className='flex justify-start items-start gap-5 flex-col p-8'>
        <Form
          name="depositForm"
          initialValues={{ currency: 'USD' }}
          onFinish={(values)=> onDeposit(values,values.currency)}
          style={{ maxWidth: '600px', margin: 'auto' }}
          className=" bg-white shadow-md rounded-md p-6 border-yellow-400 border "
        >
          <h2 className="text-xl font-semibold mb-4 text-yellow-500">Deposit</h2>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                label="Amount" className=' font-bold'
                name="deposite"
                rules={[{ required: true, message: 'Please input your deposit amount!' }]}
              >
                <Input type="number" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Currency" className=' font-bold'
                name="currency"
                rules={[{ required: true, message: 'Please select your currency!' }]}
              >
                <Select >
                  <Option value="USD">USD</Option>
                  <Option value="EUR">EUR</Option>
                  <Option value="GBP">GBP</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item>
                <Button type="primary" htmlType="submit" className=' bg-yellow-400 text-black font-semibold'>Deposit</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>

        {/* Withdraw Form */}
        <Form
          name="withdrawForm"
          initialValues={{ currency: 'USD' }}
          onFinish={onWithdraw}
          style={{ maxWidth: '600px', margin: 'auto' }}
          className="rounded-md p-6 mt-8 bg-white border-yellow-400 border"
        >
          <h2 className="text-xl font-semibold mb-4 text-yellow-400">Withdraw</h2>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Amount" className=' font-bold'
                name="withdraw"
                rules={[
                  { required: true, message: 'Please input your withdrawal amount!' },
                  {
                    validator: (_, value) => {
                      if (!value || Number(value) <= balance) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Withdrawal amount exceeds balance'));
                    },
                  },
                ]}
              >
                <Input type="number" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item>
                <Button type="primary" htmlType="submit" className=' bg-yellow-400 text-black font-semibold'>Withdraw</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>

        {/* Get Loan Form */}
        <Form
          name="loanForm"
          initialValues={{ currency: 'USD' }}
          onFinish={onGetLoan}
          style={{ maxWidth: '600px', margin: 'auto' }}
          className=" shadow-sm rounded-md p-6 mt-8 border-yellow-400 border bg-white "
        >
          <h2 className="text-xl font-semibold mb-4 text-yellow-400">Get Loan</h2>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Amount" className=' font-bold'
                name="loan"
                rules={[{ required: true, message: 'Please input the loan amount!' }]}
              >
                <Input type="number" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item>
                <Button type="primary" htmlType="submit" disabled={loan > 0} className=' bg-yellow-400 font-semibold text-black'>Get Loan</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>

        {/* Pay Loan Form */}
        <Form
          name="payLoanForm"
          initialValues={{ currency: 'USD' }}
          onFinish={onPayLoan}
          style={{ maxWidth: '600px', margin: 'auto' }}
          className=" rounded-md p-6 mt-8 bg-white border-yellow-400 border"
        >
          <h2 className="text-xl font-semibold mb-4 text-yellow-400">Pay Loan</h2>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Amount" className=' font-bold'
                name="payLoan"
                rules={[
                  { required: true, message: 'Please input the loan amount to pay!' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || parseFloat(value) <= parseFloat(loan)) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Cannot pay more than you owe'));
                    },
                  }),
                ]}
              >
                <Input type="number" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item>
                <Button type="primary" htmlType="submit" disabled={!loan} className=' bg-yellow-400 text-black'>Pay Loan</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>

      {/* Image */}
      <div className='flex items-center px-8'>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default AccountOperations;
