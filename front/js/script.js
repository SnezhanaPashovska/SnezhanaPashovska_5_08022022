//Retreiving Data from API

const getProducts = fetch ("http://localhost:3000/api/products")
.then((res) => {
  return res.json
})
.catch(err => console.log("Oh no", err));

//Processing data from API

const numberOfProducts = 8;
for (let i = 0; i < numberOfProducts; i++){
  console.log("The products");

//Link of the product
let linkOfProduct = document.createElement("a");
let section = document.getElementById("items");
section.appendChild(linkOfProduct);
linkOfProduct.href = "http://localhost:3000/api/products";

//Element article
let articleElement = document.createElement("article");
let article = document.getElementById("items");
linkOfProduct.appendChild(articleElement);

//Image of the product
let imageOfProduct = document.createElement("img");



//Name of the product
let productName = document.createElement("h3");
productName.classList.add("productName");


//Description of the product
let productDescription = document.createElement("p");
productDescription.classList.add("productDescription");

articleElement.append(imageOfProduct, productName, productDescription);

};





















//


class myClass{};

let tableauVide = [];


















