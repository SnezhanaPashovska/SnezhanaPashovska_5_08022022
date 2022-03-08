const queryStringUrlId = window.location.search;

const theId = queryStringUrlId.slice(4);
console.log(theId);

const params = new URLSearchParams(queryStringUrlId);
console.log(params);

const id = params.get("id");
const selectedColor = document.querySelector("#colors");
const selectedQuantity = document.querySelector("#quantity");
//console.log(id);

let products = fetch(`http://localhost:3000/api/products/${id}`)

    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })
//----------------------------Processing data from API----------------------------------------------//
    .then (function (products){

        //Image
        let item = document.querySelector(".item__img");
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
        for (let i = 0; i < products.colors.length; i++) {
            colorOption = document.getElementById("colors");
            colorOption.innerHTML += `
            <option value="${products.colors[i]}">${products.colors[i]}</option>`;
          }

       //console.log(products);  
         
    })
.catch(err => console.log("Error", err));
//const idSelectedProduct = products.find((Element) => Element.id === _id);
//console.log(idSelectedProduct);



//------------------------------- Add items in cart ---------------------------------------------------//

const addToCart = document.querySelector("#addToCart");
addToCart.addEventListener("click", (e)=>{
    e.preventDefault();
    const formId = document.querySelector("#colors");
    // console.log(formId);
    const formOption = formId.options;
    // console.log(formOption);
    let imgKanap = document.querySelector(".item__img").imageUrl;
    let altImg = document.querySelector(".item__img").altTxt;
    let priceKanap = document.querySelector("#price").textContent;
    let nameKanap = document.querySelector("#title").textContent;

   
    let productOptions = {
        id: id,
        quantity: selectedQuantity.value,
        color: selectedColor.value,
        name: nameKanap,
        image : imgKanap,
        altTxt : altImg,
      };

       console.log(productOptions);

//---------------------------------------- Local Storage --------------------------------------------//

let productsInLocalStorage = JSON.parse(localStorage.getItem("item"));
//JSON.parse to convert data in JSON format in the Local storage that is in java script object

const addProductInLocalStorage = () => {
    productsInLocalStorage.push(productOptions);
    localStorage.setItem("item", JSON.stringify(productsInLocalStorage));
};

if(productsInLocalStorage){
    addProductInLocalStorage();
}
else{
    productsInLocalStorage = [];
    addProductInLocalStorage();   
}

    
});










  




