//https://jsonplaceholder.typicode.com/todos
let getData = (resource, callback) => {
  let request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.status == 200) {
      let changeJsonFormat = JSON.parse(request.responseText);
      callback(changeJsonFormat, undefined);
    } else if (request.status == 404) {
      callback(undefined, "404 not found.");
    }
  });
  request.open("GET", resource);
  request.send();
};
getData("https://jsonplaceholder.typicode.com/todos", (datas, err) => {
  if (datas) {
    for (data in datas) {
      console.log(datas[data]);
    }
    getData("arkar.json", (datas, err) => {
      if (datas) {
        console.log(datas);
      }
      if (err) {
        console.log(err);
      }
    });
  }
  if (err) {
    console.log(err);
  }
});
