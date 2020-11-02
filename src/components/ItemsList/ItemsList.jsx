import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Table } from "antd";
import { ItemReceived } from "../../actions";
import "./ItemsList.scss";
import "antd/dist/antd.css";

const ItemsList = () => {
  const dispatch = useDispatch();
  const myList = useSelector((state) => state.items);
  const dataList = myList.filter((item) => item.received === false);
  const [currency, setCurrency] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      getCurrency();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const prices = dataList.map((item) => item.price);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const sumD = prices.length ? prices.reduce(reducer) : null;
  const sumS = Math.round(sumD * currency);

  const columns = [
    {
      title: "ItemName",
      dataIndex: "name",
    },
    {
      title: "StoreName",
      dataIndex: "store",
    },
    {
      title: "ItemPrice",
      dataIndex: "price",
      render: (text) => <div>{text}$</div>,
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "ReceivedButton",
      align: "right",
      render: (record) =>
        myList.length >= 1 ? (
          <button onClick={() => dispatch(ItemReceived(record.id))}>
            Received
          </button>
        ) : null,
    },
  ];

  const getCurrency = () => {
    axios
      .get("https://api.exchangeratesapi.io/latest?base=USD&symbols=ILS")
      .then((response) => {
        setCurrency(response.data.rates.ILS);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="items-list">
      <Table
        columns={columns}
        dataSource={dataList}
        pagination={false}
        showHeader={false}
      />
      {sumD && (
        <>
          <div className="total">
            Total: {sumD} $ / {sumS} ₪
          </div>
        </>
      )}
    </div>
  );
};

export default ItemsList;
