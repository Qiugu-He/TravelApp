import React from "react";
import { Row, Col, Typography, Divider } from "antd";
import styles from "./BusinessPartners.modules.css";
import { useTranslation, withTranslation } from "react-i18next";


import image1 from '../../assets/images/microsoft-80658_640.png';
import image2 from '../../assets/images/Facebook-Logo-2019.png';
import image3 from '../../assets/images/ig-logo.png';
import image4 from '../../assets/images/youtube-logo.png';

const companies = [
    { src: image1, title: "Microsoft"},
    { src: image2, title: "Youtube"},
    { src: image3, title: "Ins"},
    { src: image4, title: "Facebook"}
]

export const BusinessPartners: React.FC = (props) => {
  const { t } = useTranslation();

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', marginTop: '30px'}}>
      <Divider orientation="left">
        <Typography.Title level={3} type="secondary">{t("business_partners.title")}</Typography.Title>
      </Divider>
      <Row justify="center">
        {companies.map((c, index) => (
          <Col span={6} key={"bussiness-partner-" + index}>
            <img
              alt="bussiness-partner"
              src={c.src}
              style={{
                width: "80%",
                display: "flex",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};