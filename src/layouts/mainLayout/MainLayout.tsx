import React from "react";
import styles from "./MainLayout.module.css";
import { Header, Footer } from "../../components";

interface PropsTypes {
  children: React.ReactNode;
}

export const MainLayout: React.FC<PropsTypes> = ({ children }) => {
  return (
    <>
      <Header />
      {/* 页面内容 content */}
      <div className={styles["page-content"]}>{children}</div>
      <Footer />
    </>
  );
};