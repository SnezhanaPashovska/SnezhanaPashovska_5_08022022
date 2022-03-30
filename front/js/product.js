const queryStringUrlId = window.location.search;

const theId = queryStringUrlId.slice(4);
//console.log(theId);

const params = new URLSearchParams(queryStringUrlId);
//console.log(params);

const id = params.get("id");
const selectedColor = document.querySelector("#colors");
const selectedQuantity = document.querySelector("#quantity");
const nameKanap = document.querySelector("#title");
//console.log(id);
let products ="";

getProducts();

//----------------------------Processing data from API----------------------------------------------//

function getProducts(){
    fetch(`http://localhost:3000/api/products/${id}`)
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })
    .then (async function(resultAPI){
        products = await resultAPI;
        //console.table(products);
        if (products){
            getPost(products);
        }
    })
    .catch(err => console.log("Error", err));
}
   
//-----------------------------------------DOM elements------------------------------------------//

function getPost(products){
    //Image
    let item = document.querySelector(".item__img");
    item.insertAdjacentHTML( "afterbegin", `
        <img src="${products.imageUrl}" alt="${products.altTxt}">`);

    //Title
    let title = document.getElementById("title");
    title.insertAdjacentHTML("afterbegin", `${products.name}`);

    //Price
    let price = document.getElementById("price");
    price.insertAdjacentHTML("afterbegin", `${products.price}`);

    //Description
    let description = document.getElementById("description");
    description.insertAdjacentHTML("afterbegin", `${products.description}`);

    //Color option
    for (let i = 0; i < products.colors.length; i++) {
        colorOption = document.getElementById("colors");
        colorOption.insertAdjacentHTML("beforeend", `
        <option value="${products.colors[i]}">${products.colors[i]}</option>`);
      }

   //console.log(products);
};

//------------------------------- Add items in cart ---------------------------------------------------//

    const addToCart = document.querySelector("#addToCart");
    addToCart.addEventListener("click", (e)=>{
        e.preventDefault();

//If a color or quantity hasn't been chosen
        if(parseInt(quantity.value) === 0 || colors.value ===""){
            return alert("Veuillez compléter chaque champ correctement s'il vous plaît ");
            
        } else  if (parseInt(quantity.value) > 100){
            return alert("Choisissez une quantité entre 1 et 100");
            
        };

        if ((selectedQuantity.value > 0 && selectedQuantity.value <= 100 && selectedQuantity.value !=0) && (selectedColor.value !== "")){

            let pickQuantity = selectedQuantity.value;
            let pickColor = selectedColor.value;
    
        let productOptions = {
            id: id,
            quantity: selectedQuantity.value,
            color: selectedColor.value,
            name: nameKanap.textContent,
            image : products.imageUrl,
            altTxt: products.altTxt
        };

            //console.log(productOptions);

    //---------------------------------------- Local Storage --------------------------------------------//

    let productsInLocalStorage = JSON.parse(localStorage.getItem("item"));

    if(productsInLocalStorage){
        const resultFind = productsInLocalStorage.find(
            (el) => el.id === id && el.color === pickColor);

            //---if the product is already in the cart---//
            if(resultFind){
                let newQuantity = 
                parseInt(productOptions.quantity) + parseInt(resultFind.quantity);
                resultFind.quantity = newQuantity;
                localStorage.setItem("item", JSON.stringify(productsInLocalStorage));
                //console.table(productsInLocalStorage);
                alert("La quantité a été mise à jour");

            //---if the product is not in the cart--- //   

            } else {
                productsInLocalStorage.push(productOptions);
                localStorage.setItem("item", JSON.stringify(productsInLocalStorage));
                //console.table(productsInLocalStorage);
                alert("L'article a été ajouté au panier");  
            }

            //---if the cart is empty---//
    } else {
        productsInLocalStorage = [];

        productsInLocalStorage.push(productOptions);
        localStorage.setItem("item", JSON.stringify(productsInLocalStorage));
        //console.table(productsInLocalStorage);
        alert("L'article a été ajouté au panier");
    }
}
});


    













  




