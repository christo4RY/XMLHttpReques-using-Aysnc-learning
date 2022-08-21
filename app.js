//https://jsonplaceholder.typicode.com/todos
let getData = async (resource) => {
  let fetchData = await fetch(resource);
  if (fetchData.status === 404) {
    throw new Error("404 not found.");
  }
  let datas = fetchData.json();
  return datas;
};
getData("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    console.log(response);
    getData("https://jsonplaceholder.typicode.com/todoss")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  })
  .catch((err) => {
    console.log(err.message);
  });
