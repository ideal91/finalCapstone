let container = document.querySelector(".container");
let savedContainer = document.querySelector(".saved-container");
// I created an array pf items, passed it to the session storage and then used it at the saved items.
let items = [
  { name: "Pc Asus " },
  { name: "Laptop HP" },
  { name: "Laptop Lenovo" },
  { name: "Scanner HP" },
  { name: "Camera Nicon" },
  { name: "Iphone X" },
  { name: "Samsung s14" },
  { name: "Nokia" },
];

let savedItems = [];
let currentSavedItems = [];

if (JSON.parse(sessionStorage.getItem("saved-items")) == null) {
  sessionStorage.setItem("saved-items", JSON.stringify(savedItems));
}
// the below function will populate the items page
function itemsOnLoad() {
  items.forEach(function (item) {
    let text = document.createElement("p");
    text.innerHTML = item.name;

    let btn = document.createElement("button");
    btn.innerHTML = "Save for later";
    // the below add event will add each clicked element at the saved list page.
    btn.addEventListener("click", function () {
      let currentSavedItems = JSON.parse(sessionStorage.getItem("saved-items"));
      currentSavedItems.push(item);
      sessionStorage.setItem("saved-items", JSON.stringify(currentSavedItems));
      console.log(currentSavedItems);
    });
    container.appendChild(text);
    container.appendChild(btn);
  });
}
// the below funcition will pull the elemnts from the sessionstorage and pull them at the saved.html
function savedOnLoad() {
  let currentSavedItems = JSON.parse(sessionStorage.getItem("saved-items"));
  sessionStorage.setItem("saved-items", JSON.stringify(currentSavedItems));
  console.log(currentSavedItems[0]);

  currentSavedItems.forEach(function (item) {
    let text = document.createElement("p");
    text.innerHTML = item.name;
    savedContainer.appendChild(text);
  });
}
// the below will be used to leave a comment
var post = document.getElementById("post");
post.addEventListener("click", function () {
  var commentBoxValue = document.getElementById("comment-box").value;

  var li = document.createElement("li");
  var text = document.createTextNode(commentBoxValue);
  li.appendChild(text);
  document.getElementById("unordered").appendChild(li);
});
