//https://jsonplaceholder.typicode.com/todos
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    if (response.status === 404) {
      throw new Error("404 not found.");
    }
    return response.json();
  })
  .then((response) => {
    console.log(response);
    fetch("https://jsonplaceholder.typicode.com/todoss")
      .then((response) => {
        if (response.status === 404) {
          throw new Error("404 not found.");
        }
        return response.json();
      })
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
