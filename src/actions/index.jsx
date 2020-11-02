export const addItem = (data) => {
  return {
    type: "ADD",
    item: data,
  };
};

export const ItemReceived = (id) => {
  return {
    type: "RECEIVED",
    id: id,
  };
};
