import React from "react";
import { Card } from "antd";
import "antd/dist/antd.css";
import ItemForm from "../ItemForm/ItemForm";
import ItemsList from "../ItemsList/ItemsList";
import "./Board.scss";

const Board = () => {
  return (
    <div className="board">
      <Card className="board-card">
        <Card className="board-list">
          <ItemsList />
        </Card>
        <Card className="board-form">
          <ItemForm />
        </Card>
      </Card>
    </div>
  );
};

export default Board;
