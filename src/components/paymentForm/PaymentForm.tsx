import React from "react";
//import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
//import images from "react-payment-inputs/images";
import { Input, Card } from "antd";
import { CreditCardOutlined } from '@ant-design/icons'; 
import styles from "./PaymentForm.module.css";

export const PaymentForm = () => {
  return (
    <Card
      title={
        <span>
          <CreditCardOutlined/> Credit Card
        </span>
      }
      bordered={false}
      className={styles["payment-credit-card"]}
    >
      <Input />
    </Card>
  );
};