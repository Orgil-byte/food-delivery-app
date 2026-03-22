export const categoryApi = async () => {
  const categoryData = await fetch("http://localhost:3001/foodCateg");
  const theCategory = await categoryData.json();

  return theCategory;
};
