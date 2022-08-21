//https://jsonplaceholder.typicode.com/todos
let getData = (resource) => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.status == 200) {
        let changeJsonFormat = JSON.parse(request.responseText);
        resolve(changeJsonFormat);
      } else if (request.status == 404) {
        reject("404 not found.");
      }
    });
    request.open("GET", resource);
    request.send();
  });
};
getData("https://jsonplaceholder.typicode.com/todos")
  .then((datas) => {
    console.log(datas);
    return getData("arkar.json");
  })
  .then((datas) => {
    console.log(datas);
    return getData("https://jsonplaceholder.typicode.com/todos");
  })
  .then((datas) => {
    console.log(datas);
  })
  .catch((err) => {
    console.log(err);
  });
