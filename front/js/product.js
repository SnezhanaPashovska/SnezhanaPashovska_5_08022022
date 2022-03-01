let params = new URLSearchParams(window.location.search);
const id = params.get("id");
const url = "http://localhost:3000/api/products/"+id;
fetch(url)
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })


.then(function (products) {

let imageId = document.createElement("img");
let img = document.getElementById("imgId");
img.appendChild(imageId);
imageId.classList.add("productImage");
imageId.src = products.imageUrl;
imageId.alt = products.altTxt;


let nameOfProduct = document.getElementById("title");
nameOfProduct.textContent = products.name;

let priceOfProduct = document.getElementById("price");
priceOfProduct.textContent = products.price;

let descriptionOfProduct = document.getElementById("description");
descriptionOfProduct.textContent = products.description;

let colorOfProduct = document.getElementById("color");
colorOfProduct.textContent = products.color;

});
