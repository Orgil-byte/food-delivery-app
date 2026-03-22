export const foodOrderApi = async () => {
  const foodOrderData = await fetch("http://localhost:3001/foodOrder");
  const theFoodOrder = await foodOrderData.json();

  return theFoodOrder;
};
