// Initialization of local storage//

let productsInLocalStorage = JSON.parse(localStorage.getItem("item"));
console.table(productsInLocalStorage);

//Variables to calculate the total quantity of products in the cart//

let calculateTotalQuantity =[];
let totalQuantity = document.getElementById("totalQuantity");

//variables to calculate the total price of products in the cart//

let calculateTotalPrice = [];
let totalPrice =document.getElementById("totalPrice");

const emptyCart = document.querySelector("#cart__items");


//The accumulator is the net result of the function. It contains either the initial value or the return value of the last call. currentValue: the value of the current element. 
const reducer = (accumulator, currentValue) => accumulator + currentValue;

//----------------------------------------Items in cart---------------------------------------------------------//


//If the cart is empty
if(productsInLocalStorage === null){
  const noItems = `<p>Votre panier est vide</p>`;
  emptyCart.innerHTML = noItems;
  console.log (noItems);
}
//Retrieving the price from API//
 else { 
      //console.log(info); 
    productsInLocalStorage.forEach((element) => {
      fetch( `http://localhost:3000/api/products/${element.id}`)
            .then((elements) =>  elements.json())

            .then((elements) => {
  
//If there are items in the cart

//--------------------------------DOM elements-----------------------------------------------------------------//
      const itemsInCart = `
              <article class="cart__item" data-id="${elements._id}" data-color="${element.color}">
                      <div class="cart__item__img">
                        <img src="${elements.imageUrl}" alt="${elements.altTxt}">
                      </div>
                      <div class="cart__item__content">
                        <div class="cart__item__content__description">
                          <h2>${elements.name}</h2>
                          <p>${element.color}</p>
                          <p>${elements.price}€</p>
                        </div>
                        <div class="cart__item__content__settings">
                          <div class="cart__item__content__settings__quantity">
                            <p>Qté : </p>
                            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${element.quantity}">
                          </div>
                          <div class="cart__item__content__settings__delete">
                            <p class="deleteItem">Supprimer</p>
                          </div>
                        </div>
                      </div>
                    </article>`;

                    document
                      .getElementById("cart__items")
                      .insertAdjacentHTML("afterbegin", itemsInCart);
                      deleteProduct()
                      ModifyQuantity()

//------------------------Total quantity---------------//

calculateTotalQuantity.push(parseInt(`${element.quantity}`));
totalQuantity.innerHTML = calculateTotalQuantity.reduce(reducer,0);
//console.log(calculateTotalQuantity);

//------------------------Total price-------------------//

calculateTotalPrice.push( parseInt(`${element.quantity}`) * parseInt(`${elements.price}`));
totalPrice.innerHTML = calculateTotalPrice.reduce(reducer,0);  
//console.log(calculateTotalPrice);

//----------------------Delete a product from the cart and from the local storage------------------//

function deleteProduct(){
const deleteItem = document.querySelectorAll(".deleteItem");

// For each loop for the querySelectorAll, every delete button listens to an event
deleteItem.forEach(function (del) {
  del.addEventListener("click", function() {  

    let idDelete = this.closest("[data-id]").dataset.id ; 
    let colorDelete = this.closest("[data-color]").dataset.color;
    let indexDelete = productsInLocalStorage.findIndex( x => x.id == idDelete && x.color == colorDelete); 
    productsInLocalStorage.splice(indexDelete,1); 
    localStorage.setItem("item", JSON.stringify(productsInLocalStorage));
    alert("L'article a été supprimé")
    location.reload();
  }
)
})
}
//------------------------Modify quantity-----------------------------------------//

function ModifyQuantity() {
  let changeQuantity = document.querySelectorAll(".itemQuantity");
  
  changeQuantity.forEach(function (quantityChange) {
    quantityChange.addEventListener("change" , function() {

      let idChange = this.closest("[data-id]").dataset.id ; 
      let colorChange = this.closest("[data-color]").dataset.color;
      let newQuantity = parseInt(this.value);
      let indexChange = productsInLocalStorage.findIndex( x => x.id == idChange && x.color == colorChange);
      /* console.log(newQuantity);
      console.log(indexChange);
      console.log(idChange);
      console.log(colorChange); */
      productsInLocalStorage[indexChange].quantity = newQuantity;
      localStorage.setItem("item", JSON.stringify(productsInLocalStorage));
      alert("La quantité a été modifiée")
      location.reload();
    });
  });
}
})
.catch((error) => {
console.error('Error', error);

    });
  });
}


//-------------------------------------Order form---------------------------------------//

// DOM element for the form

const form = document.querySelector(".cart__order__form");

// RegExp
let namesRegExp = new RegExp("^[a-zA-Zàâäéèêëïîôöùûüç' -]{2,}$");
let addressRegExp = new RegExp("^[0-9]{1,4}[a-zA-Z0-9àâäéèêëïîôöùûüç '.,-]{3,}$");
let cityRegExp = new RegExp("^[a-zA-Z0-9àâäéèêëïîôöùûüç' -]{3,60}$");
let emailRegExp = new RegExp("^[a-zA-Z0-9àâäéèêëïîôöùûüç.-_]+[@]{1}[a-zA-Z0-9.-_]+[.][a-z]{2,10}$");










  










