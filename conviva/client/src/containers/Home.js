import React, {useState, useEffect} from 'react';
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import Customers from "../components/Customers/index";

import { Row, Col, Layout } from "antd";

const {  Sider, Content } = Layout;

const Home = () => {
    return(
        <div>
            <Header / >
                <Layout>
                    <Content style={{minHeight:"800px"}}><Customers /></Content>
                </Layout>

            <Footer / >
        </div>
    )
};

export default Home;