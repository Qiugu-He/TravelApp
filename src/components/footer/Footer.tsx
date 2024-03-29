import React from "react";
import { Layout, Typography, Col, Row } from "antd";
import { useTranslation, withTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Layout.Footer>
      <Typography.Title level={5} type="secondary" style={{ textAlign: "center" }}>
        {t("footer.detail")}
      </Typography.Title>
    </Layout.Footer>
  );
};