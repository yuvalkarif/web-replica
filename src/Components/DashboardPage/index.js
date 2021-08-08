import React, { useEffect } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Timeline from "../Timeline";
import { Layout } from "./DashboardPage.styles";

const DashboardPage = () => {
  useEffect(() => {
    document.title = "Karifgram";
  });
  return (
    <div>
      <Header></Header>
      <Layout>
        <Timeline></Timeline>
        <Sidebar></Sidebar>
      </Layout>
    </div>
  );
};

export default DashboardPage;
