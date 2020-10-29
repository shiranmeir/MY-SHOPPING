import React from "react";
import ItemForm from "../ItemForm/ItemForm";
import ItemsList from "../ItemsList/ItemsList";

import "./Board.scss";

const Board = () => {
  return (
    <div className="board">
      <ItemsList />
      <ItemForm />
    </div>
  );
};

export default Board;
