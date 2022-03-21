let productsInLocalStorage = JSON.parse(localStorage.getItem("item"));
console.table(productsInLocalStorage);
const productsInCart = document.querySelector(".cartAndFormContainer")
const orderButton = document.getElementById("order")
//console.log(orderButton)
orderButton.addEventListener('click', (event) => {
    submitOrder(event)
})
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
    fetchJsonProduct().then((info) => {
      /* console.log(info); */
    const itemsInCart = document.querySelector("#cart__items");
    
    for(let item of productsInLocalStorage) {
   
 ///--------------------------------DOM elements-----------------------------------------------------------------//
      let cartStructure = [];

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
  cartStructure = itemsInCart;
  }    
         
cartCheckout();
function cartCheckout() {
 //----Total quantity---//  
  const selectedQuantity = document.querySelector(".itemQuantity");
  let itemQuantity = Number(selectedQuantity.value) 
  console.log(itemQuantity);     
  const quantityInDom = document.querySelector("#totalQuantity");
  
  const totalQuantity = Object.values(items).reduce((acc, {quantity}) => acc + quantity, 0);
  console.log(totalQuantity);
   
  productInfo = {
    id: info._id,
    quantity: selectedQuantity.value,
    price: info.price,
    color: info.colors,
    name: info.name
  }

console.log(productInfo.price);
/* console.log(info);  */
                                                                                
  if (items.length != 0){
    for (let l = 0; l < productsInLocalStorage.length; l++){
    function multiply(){

       a = Number (productInfo.quantity);
       b = Number (productInfo.price);
       d = String (productInfo.id);
       c = a * b;
      /*  c = document.getElementById("totalPrice").value; */
       /* c.innerHTML = `${c}`; */
       sumPrice = c;
       sumPrice = document.getElementById("totalPrice");
       sumPrice.innerHTML = `${c}`;
      /* console.log(a);
      console.log(b);
      console.log(c);
      console.log(d);  */
    }
    multiply();
  }
    
  } else{
      sumPrice = 0
      quantityInDom.innerHTML = "0";
      }
      //Total Price
                                        
      /* const priceInDOM = document.getElementById("totalPrice"); */
      const totalPrice = sumPrice;
      /* priceInDOM.innerHTML = `${totalPrice}`; */

      for (let j = 0; j < itemQuantity.length; j++){
        totalQtt += itemQuantity;
        totalQuantity = itemQuantity + itemQuantity;
        let productTotalQuantity = document.querySelector("#totalQuantity");
        productTotalQuantity.innerHTML = totalQtt;
         console.log(totalQtt);
         console.log(totalQuantity);
      }
    }


  }  
)}   
};
};
cartItems();










