import React, { useContext, useState, useEffect } from "react";
import { List, Card } from "antd";
// import { StoreContext } from "../../StoreContext";
import "./Stores.scss";

const Stores = () => {
  //   const [itemsStore, setItemsStore] = useContext(StoreContext);

  return (
    <div className="store-list">
      fff
      {/* <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={itemsStore}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.values.store}>
              <div className="store-list-card">
                <div>{item.values.name}</div>
                <div>{item.values.price}$</div>
              </div>
            </Card>
          </List.Item>
        )}
      /> */}
    </div>
  );
};

export default Stores;
