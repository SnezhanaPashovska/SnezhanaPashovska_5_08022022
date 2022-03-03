let params = new URLSearchParams(window.location.search);
var str = ("http://localhost:3000/api/products");
var url = new URL(str);
var id = params.get("id");

const productId = fetch(url)
    .then(function(products){
        if(products.ok){
            return products.json();
        }
    })

//Processing data from API
    .then(function (products){

        //Image
        let item = document.getElementsByClassName("imgId");
        item.innerHTML += `
            <img src="${products.imageUrl}" alt="${products.altTxt}">`;

        //Title
        let title = document.getElementById("title");
        title.innerHTML += `${products.name}`;

        //Price
        let price = document.getElementById("price");
        price.innerHTML += `${products.price}`;

        //Description
        let description = document.getElementById("description");
        description.innerHTML += `${products.description}`;

        //Color option
        function colors(product){
        colors.forEach(products =>{
        let colors = document.getElementById("colors");
        colors.innerHTML += `
        <option>${products.colors}</option>`;
        })}
        console.log(products);   
    })
.catch(err => console.log("Error", err));
console.log(params);
console.log(str);
console.log(url);
console.log(id);
console.log(productId);


//let products = {
   // altTxt: "",
    //colors: [""],
    //description: "",
    //imageUrl: "",
    //name: "",
    //price: 0,
    //_id: ""
  //};
