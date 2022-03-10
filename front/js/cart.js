let productsInLocalStorage = JSON.parse(localStorage.getItem("item"));
//console.table(productsInLocalStorage);
//console.log('localStorage ='+productsInLocalStorage);
const emptyCart = document.querySelector("#cart__items");

//-----------------------------Retrieving the price-----------------------------------------------//
/* const getProducts = fetch ("http://localhost:3000/api/products")
  .then(function(res){
  if(res.ok){
      return res.json();
  }
})
.then (async function(resultAPI){
  products = await resultAPI;
  //console.table(products);
  if (products){
      cartItems(products);
  }
})
.catch(err => console.log("Error", err));
console.log(getProducts);  */
 ///-------------------------------------------------------------------------------------------------//


//if the cart is empty
function cartItems(){

if(productsInLocalStorage === null || productsInLocalStorage == 0){
  const noItems = `<p>Votre panier est vide</p>`;
  emptyCart.innerHTML = noItems;
  console.log (noItems);
  
//if there are items in the cart
} else {

  //console.log(productsInLocalStorage);

  const itemsInCart = document.querySelector("#cart__items");
  for(let item of productsInLocalStorage) {

    let cartStructure = [];

    itemsInCart.innerHTML += `
            <article class="cart__item" data-id="${item.id}" data-color="${item.color}">
                    <div class="cart__item__img">
                      <img src="${item.image}" alt="${item.altTxt}">
                    </div>
                    <div class="cart__item__content">
                      <div class="cart__item__content__description">
                        <h2>${item.name}</h2>
                        <p>${item.color}</p>
                        <p>${item.price}€</p>
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
                  </article>`;
                }
      //console.log(itemsInCart);
      cartStructure = itemsInCart;
      //console.log(cartStructure);
    }}

    cartItems();

//-----------------------------------------------Delete button---------------------------------//
function deleteProduct(){
  let btnDelete = document.querySelector(".deleteItem");

  for (let i = 0; i < btnDelete.length; i++){
    btnDelete[i].addEventlistener("click", (event) => {
      event.preventDefault();

      let deleteId = productsInLocalStorage[i].id;
      console.log("delete"+ deleteId);
      let deleteColor = productsInLocalStorage[i].color;

      productsInLocalStorage = productsInLocalStorage.filter(el => el.id !== deleteId || el.color !== deleteColor);
      console.log(productsInLocalStorage);

      localStorage.setItem("item", JSON.stringify(productsInLocalStorage));

      alert ("supprimé");
      location.reload();
    
    })
  } 
}
 deleteProduct();
console.log(deleteProduct);

//----------------------------------------------Change quantity--------------------------------------------//

function changeQuantity(){
  let modifyQuantity = document.querySelector(".itemQuantity");

  for(let j = 0; j < modifyQuantity.length; j++){
    modifyQuantity[j].addEventlistener("change", (e) => {
      e.preventDefault();

      let qModify = productsInLocalStorage[j].quantity;
      let modifValue = modifyQuantity[j].valueAsNumber;

      const resultFind = productsInLocalStorage.find((el) => el.modifValue !== qModify);

      resultFind.quantity = modifValue;
      productsInLocalStorage[j].quantity = resultFind.quantity;

      localStorage.setItem("item", JSON.stringify(productsInLocalStorage));

      location.reload();
    })
  }
}
changeQuantity();
//console.log(changeQuantity);


                
                
                 
