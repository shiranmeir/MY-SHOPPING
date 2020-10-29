import React from "react";
import Board from "../Board/Board";
import Stores from "../Stores/Stores";
import { Tabs } from "antd";
import "./Home.scss";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Home = () => {
  return (
    <div className="home">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="My List" key="1">
          <Board />
        </TabPane>
        <TabPane tab="My Stores" key="2">
          <Stores />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Home;
