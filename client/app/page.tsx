const Main = async () => {
  const categoryData = await fetch("http://localhost:3001/foodcateg");
  const theCategory = await categoryData.json();
  console.log(theCategory);
  return <div>hello</div>;
};

export default Main;
