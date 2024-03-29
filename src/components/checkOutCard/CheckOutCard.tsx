import React from "react";
import { Skeleton, Card, Button, Typography, Table } from "antd";
import { CheckCircleOutlined, HomeOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;
const { Title, Text } = Typography;

interface OrderItem {
  key: number;
  item: string;
  amount: string | number | JSX.Element;
}

const columns: ColumnsType<OrderItem> = [
  {
    title: "产品",
    dataIndex: "item",
    key: "item",
  },
  {
    title: "价格",
    dataIndex: "amount",
    key: "amount",
  },
];

interface PropsType {
  loading: boolean;
  order: any;
  onCheckout: () => void;
}

export const CheckOutCard: React.FC<PropsType> = ({
  loading,
  order,
  onCheckout,
}) => {
  const navigate = useNavigate();

  const paymentData: OrderItem[] = order
    ? order.orderItems.map((i, index) => ({
        key: index,
        item: i.touristRoute.title,
        amount: (
            <>
              <Text delete>¥ {i.originalPrice} </Text>{" "}
              <Text type="danger" strong>
                ¥ {i.originalPrice * i.discountPresent}
              </Text>
            </>
          ),
      }))
    : [];

  return (
    <Card
      style={{ width: 600, marginTop: 50 }}
      actions={[
        order && order.state === "Completed" ? (
          <Button
            type="primary"
            onClick={() => {
              navigate("/");
            }}
            loading={loading}
          >
            <HomeOutlined />
            Explore More
          </Button>
        ) : (
          <Button type="primary" danger onClick={onCheckout} loading={loading}>
            <CheckCircleOutlined />
            Order
          </Button>
        ),
      ]}
    >
      <Skeleton loading={loading} active>
        <Meta
          title={
            <Title level={2} type="success">
              {order && order.state === "Completed" ? "Payment Successed" : "Summary"}
            </Title>
          }
          description={
            <Table<OrderItem>
              columns={columns}
              dataSource={paymentData}
              showHeader={false}
              size="small"
              bordered={false}
              pagination={false}
            />
          }
        />
      </Skeleton>
    </Card>
  );
};