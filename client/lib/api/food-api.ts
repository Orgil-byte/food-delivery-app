export const foodApi = async () => {
  const foodData = await fetch("http://localhost:3001/foods");
  const theFood = await foodData.json();

  return theFood;
};
