
let productsInLocalStorage = JSON.parse(localStorage.getItem("item"));
//console.table(productsInLocalStorage);
//console.log('localStorage ='+productsInLocalStorage);
const emptyCart = document.querySelector("#cart__items");
let cart = JSON.parse(localStorage.getItem("item"))
  cart.sort(function compare(a, b) {
    if (a.id > b.id) return 1;
    if (a.colors > b.colors) return 1;
  });
  console.log(cart);
  
  let sumPrice = 0;


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
//if the cart is empty
function cartItems(){

  if(productsInLocalStorage === null || productsInLocalStorage == 0){
    const noItems = `<p>Votre panier est vide</p>`;
    emptyCart.innerHTML = noItems;
    console.log (noItems);
    
  //if there are items in the cart
  } else {
  
    //console.log(productsInLocalStorage);
    fetchJsonProduct().then((info) => {
      /* console.log(info); */
    const itemsInCart = document.querySelector("#cart__items");
    
    for(let item of productsInLocalStorage) {
   
 ///--------------------------------DOM elements-----------------------------------------------------------------//
      let cartStructure = [];

      itemsInCart.insertAdjacentHTML("afterend", `
              <article class="cart__item" data-id="${item.id}" data-color="${item.color}">
                      <div class="cart__item__img">
                        <img src="${item.image}" alt="${item.altTxt}">
                      </div>
                      <div class="cart__item__content">
                        <div class="cart__item__content__description">
                          <h2>${item.name}</h2>
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
  cartStructure = itemsInCart;

  }    
         
cartCheckout();
function cartCheckout() {
 //----Total quantity---//  
  const selectedQuantity = document.querySelector(".itemQuantity");
  let itemQuantity = selectedQuantity.value; 
  console.log(itemQuantity);     
  const quantityInDom = document.querySelector("#totalQuantity");
  const totalQuantity = cart.reduce((acc, quantity) => acc + quantity); 
  console.log(totalQuantity);
                                                
                                        
  if (items.length != 0){
      sumPrice = info.price * itemQuantity;
      console.log(info.price);
      console.log(itemQuantity);
      quantityInDom.innerHTML = `${totalQuantity}`;
      }
      else{
      sumPrice = 0
      quantityInDom.innerHTML = "0";
      }
      //Total Price
                                        
      const priceInDOM = document.getElementById("totalPrice");
      const totalPrice = sumPrice;
      priceInDOM.innerHTML = `${totalPrice}`;

      }
    }
  )}   
}};
cartItems();









