import randomId from "../../utilities/randomId/randomId";

const addOrderToLocalStorage = (orderData) => {
  const id = randomId(15);
  const orders = JSON.parse(localStorage.getItem("orders"));
  const newOrderData = {};
  if (orders) {
    const newOrders = { ...orders };
    newOrders[id] = orderData;
    localStorage.setItem("orders", JSON.stringify(newOrders));
  } else {
    newOrderData[id] = orderData;
    localStorage.setItem("orders", [JSON.stringify({ ...newOrderData })]);
  }
};

export default addOrderToLocalStorage;
