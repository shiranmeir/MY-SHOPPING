import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ItemReceived } from "../../actions";

import { Card, List } from "antd";
import "./Received.scss";
import "antd/dist/antd.css";

const Received = () => {
  const dispatch = useDispatch();
  const myList = useSelector((state) => state.items);
  const dataList = myList.filter((item) => item.received === true);

  return (
    <div className="received">
      <Card className="received-board">
        <List
          dataSource={dataList}
          bordered
          renderItem={(item) => (
            <List.Item>
              <div className="received-list">
                <div>{item.name}</div>
                <div>{item.store}</div>
                <div>{item.price}$</div>
                <div>{item.date}</div>
              </div>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default Received;
