import React, { useContext } from "react";
import { Card, List } from "antd";
// import { ReceivedContext } from "../../ReceivedContext";
import "./Received.scss";
import "antd/dist/antd.css";

const Received = () => {
  //   const [itemsReceived, setItemsReceived] = useContext(ReceivedContext);

  return (
    <div className="received">
      <Card className="received-board">
        jjjj
        {/* <List
          dataSource={itemsReceived}
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
        /> */}
      </Card>
    </div>
  );
};

export default Received;
