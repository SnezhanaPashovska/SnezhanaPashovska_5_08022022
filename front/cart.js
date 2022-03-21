const products = fetch ("http://localhost:3000/api/products")
.then(function(res){
if(res.ok){
    return res.json();
}
})
.then(products => {
console.log('Success:', products); 
})

const productsInLocalStorage = JSON.parse(localStorage.getItem("item"));
console.table(productsInLocalStorage);
//const productsInCart = document.querySelector(".cartAndFormContainer")
const emptyCart = document.querySelector("#cart__items");
const selectedQuantity = document.querySelector("#quantity");
//if the cart is empty
if(productsInLocalStorage === null){
  const noItems = `<p>Votre panier est vide</p>`;
  emptyCart.innerHTML = noItems;
  console.log (noItems);
}
//-----------------------------Retrieving the price from API-----------------------------------------------//
let items = JSON.parse(localStorage.getItem("item"));

for (let i = 0; i < items.length; i++) {
  async function fetchJsonProduct() {
    const response = await fetch(
      `http://localhost:3000/api/products/${items[i].id}`
    );
    return await response.json();
  }
  
//-------------------------Items in cart-------------------------//
//if there are items in the cart
function cartItems(){
   if(productsInLocalStorage !== 0) {
  
    //console.log(productsInLocalStorage);
    fetchJsonProduct()

    .then((info) => {
      //console.log(info); 
    const itemsInCart = document.querySelector("#cart__items");
    
    for(let item of productsInLocalStorage) {
   
 ///--------------------------------DOM elements-----------------------------------------------------------------//
      itemsInCart.insertAdjacentHTML("afterend", `
              <article class="cart__item" data-id="${info._id}" data-color="${item.color}">
                      <div class="cart__item__img">
                        <img src="${item.image}" alt="${item.altTxt}">
                      </div>
                      <div class="cart__item__content">
                        <div class="cart__item__content__description">
                          <h2>${info.name}</h2>
                          <p>${item.color}</p>
                          <p>${info.price}€</p>
                        </div>
                        <div class="cart__item__content__settings">
                          <div class="cart__item__content__settings__quantity">
                            <p>Qté : </p>
                            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${item.quantity}">
                          </div>
                          <div class="cart__item__content__settings__delete">
                            <p class="deleteItem">Supprimer</p>
                          </div>
                        </div>
                      </div>
                    </article>`);



let totalQuantity = document.getElementById("totalQuantity");
let totalPrice = document.getElementById("totalPrice");
let productId = document.getElementsByClassName("data-id");
let productColor = document.getElementsByClassName("data-color");
let productQuantity = item.quantity;
let productName = item.name;
console.log(productQuantity);
  
let productInfo = {
  nameOfProduct: info.name,
  idOfProduct: info._id,
  colorOfProduct: info.colors,
  priceOfProduct: info.price,
  quantityOfProduct: item.quantity 
}
    //console.log(productInfo); 
   
    console.log(info);
    //console.log(item);
    //console.log(productId);
    function totals(){
      
      let sumQuantity = item.quantity;
      let sumPrice = (productInfo[j].quantityOfProduct * productInfo[j].priceOfProduct);
    
      info._id == productId && productInfo[j].quantityOfProduct == productQuantity;
      info._id == productId && productInfo[j].priceOfProduct == totalPrice; 
      
    
      totalQuantity.innerHTML = sumQuantity;
      totalPrice.innerHTML = sumPrice;
    
      console.log(sumQuantity);
      console.log(sumPrice);
      console.log(totalQuantity);
    
    }
    totals();
        
    } 
}

)} 
}};cartItems()



















  










