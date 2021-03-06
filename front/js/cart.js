// Initialization of local storage//

let productsInLocalStorage = JSON.parse(localStorage.getItem("item"));
console.table(productsInLocalStorage);

//Variables to calculate the total quantity of products in the cart//

let calculateTotalQuantity =[];
let totalQuantity = document.getElementById("totalQuantity");

//Variables to calculate the total price of products in the cart//

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
                          <h2>${element.name}</h2>
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

const deleteItem = document.getElementsByClassName("deleteItem");

for(let button = 0; button < deleteItem.length; button++){
                    
  deleteItem[button].addEventListener("click", (eventButton) => {
    eventButton.preventDefault();

  const parent = eventButton.target.closest("[data-id]");

  let newLocalStorage = productsInLocalStorage.filter( 
  (productLocal)=> productLocal.id !== parent.dataset.id || productLocal.color !== parent.dataset.color);

  localStorage.setItem("item", JSON.stringify(newLocalStorage));
  alert ("L'article a été supprimé du panier");
  location.reload();
  })
  };

//------------------------Modify quantity-----------------------------------------//

function ModifyQuantity() {
  let changeQuantity = document.querySelectorAll(".itemQuantity");
  
  changeQuantity.forEach(function (quantityChange) {
    quantityChange.addEventListener("change" , function() {

      let idChange = this.closest("[data-id]").dataset.id ; 
      let colorChange = this.closest("[data-color]").dataset.color;
      let newQuantity = parseInt(this.value);
      let indexChange = productsInLocalStorage.findIndex( x => x.id == idChange && x.color == colorChange);
      productsInLocalStorage[indexChange].quantity = newQuantity;
      localStorage.setItem("item", JSON.stringify(productsInLocalStorage));
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
console.log(form)

// RegExp
let namesRegExp = new RegExp(/^[a-zA-Zàâäéèêëïîôöùûüç' -]{3,}$/);
let addressRegExp = new RegExp(/^[0-9]{1,4}[a-zA-Z0-9àâäéèêëïîôöùûüç '.,-]{3,}$/);
let cityRegExp = new RegExp(/^[a-zA-Z0-9àâäéèêëïîôöùûüç' -]{3,60}$/);
let emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

//Event listener for the "order" button

const orderButton = document.querySelector("#order");
orderButton.addEventListener("click", (e) => {
e.preventDefault();

//Adding form values to the local Storage
const formValues = {
  firstName: document.querySelector("#firstName").value,
  lastName: document.querySelector("#lastName").value,
  address: document.querySelector("#address").value,
  city: document.querySelector("#city").value,
  email: document.querySelector("#email").value
}

//-----------------------------------Control of validation of the form--------------------------//

//---The name---//
const theName = formValues.firstName;
if(namesRegExp.test(theName)){
}

else if ((formValues.firstName) == ""){
  const emptyFirstName = document.getElementById("firstNameErrorMsg")
  emptyFirstName.insertAdjacentHTML("afterend", `<p>Ce champ est vide</p>`)
}

else{
const firstNameError = document.getElementById("firstNameErrorMsg");
firstNameError.insertAdjacentHTML("afterend", `<p>Le prénom n'est pas valide</p>`);
}

//---The last name---//
const theLastName = formValues.lastName;
if(namesRegExp.test(theLastName)){
}

else if ((formValues.lastName) == ""){
  const emptyLastName = document.getElementById("lastNameErrorMsg")
  emptyLastName.insertAdjacentHTML("afterend", `<p>Ce champ est vide</p>`)
}

else{
  const lastNameError = document.getElementById("lastNameErrorMsg");
  lastNameError.insertAdjacentHTML("afterend", `<p>Le nom n'est pas valide</p>`)
}

//---The address---//
const theAddress = formValues.address;
if(namesRegExp.test(theAddress)){
}

else if ((formValues.address) == ""){
  const emptyAddress = document.getElementById("addressErrorMsg")
  emptyAddress.insertAdjacentHTML("afterend", `<p>Ce champ est vide</p>`)
}
else{
  const addressError = document.getElementById("addressErrorMsg");
  addressError.insertAdjacentHTML("afterend", `<p>L'adresse n'est pas valide</p>`)
}

//---The city---//
const theCity = formValues.city;
if(namesRegExp.test(theCity)){
}

else if ((formValues.city) == ""){
  const emptyCity = document.getElementById("cityErrorMsg")
  emptyCity.insertAdjacentHTML("afterend", `<p>Ce champ est vide</p>`)
}
else{
  const cityError = document.getElementById("cityErrorMsg");
  cityError.insertAdjacentHTML("afterend", `<p>Le nom de la ville n'est pas valide</p>`)
}

//---The Email---//
const theEmail = formValues.email
if(emailRegExp.test(theEmail)){ 
}

else if ((formValues.email) == ""){
  const emptyEmail = document.getElementById("emailErrorMsg")
  emptyEmail.insertAdjacentHTML("afterend", `<p>Ce champ est vide</p>`)
}
else{
  const emailError = document.getElementById("emailErrorMsg");
  emailError.insertAdjacentHTML("afterend", `<p>L'email n'est pas valide</p>`)
}

localStorage.setItem("formValues", JSON.stringify(formValues));


//---Send data to server---//
const sendValues = {
  productsInLocalStorage,
  formValues
}

let idProduct = [];
if(productsInLocalStorage == null || productsInLocalStorage == 0){
  console.log("Oops... votre panier est vide!")
  alert("Oops... votre panier est vide!");
  for(let pro = 0; pro < productsInLocalStorage.length; pro++){
    idProduct.push(productsInLocalStorage[pro].id);
    }
}


//---Control of the cart before placing an order---//

const order = {
  products: idProduct,
  contact: formValues
};
console.log(order);

function sendToServer()
{fetch("http://localhost:3000/api/products/order", {
  method: "POST",
  body: JSON.stringify(order),
  headers: {
    "Accept" : "application/JSON",
    "Content-Type" : "application/json",
  }
})
.then(async(response) => response.json())
.then((order) => {
  console.log(order)
  console.log(order.orderId)
  localStorage.setItem("orderId", order.orderId);
  window.location.href = "confirmation.html";
})
.catch((error)=>{
  console.error(error);
  alert("Il y a un problème avec le serveur");
})}

//---Control of the form before sending to server---//

if((namesRegExp.test(theName)) && (namesRegExp.test(theLastName)) && (addressRegExp.test(theAddress)) && (cityRegExp.test(theCity)) && (emailRegExp.test(theEmail))){

  localStorage.setItem("formValues", JSON.stringify(formValues));
  alert("Commande validé")

  sendToServer();
}else{
  console.log("Veuillez bien remplir le formulaire");
  alert("Veuillez bien remplir le formulaire")
}
});

//---Automatically fill in form with the data saved in the local Storage--//

const dataLocalStorage = localStorage.getItem("formValues");
const dataLocalStorageObject = JSON.parse(dataLocalStorage);

function fillInForm(input){

document.querySelector(`#${input}`).value = dataLocalStorageObject[input];
console.log(dataLocalStorageObject)}


fillInForm("firstName");
fillInForm("lastName");
fillInForm("address");
fillInForm("city");
fillInForm("email");






  










