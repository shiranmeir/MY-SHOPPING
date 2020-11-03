import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Card } from "antd";
import "./Stores.scss";

const Stores = () => {
  const dispatch = useDispatch();
  const myList = useSelector((state) => state.items);
  const dataList = myList.filter((item) => item.received === false);

  const stores = dataList.reduce((r, a) => {
    r[a.store] = [...(r[a.store] || []), a];
    return r;
  }, {});

  return (
    <Card className="store">
      {Object.keys(stores).map((store, i) => (
        <div className="store-list" key={i}>
          <div className="store-list-title">{store}</div>
          {stores[store].map((item) => (
            <div className="store-list-item">
              <div>{item.name}</div>
              <div>{item.price}$</div>
            </div>
          ))}
        </div>
      ))}
    </Card>
  );
};

export default Stores;
