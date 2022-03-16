let productsInLocalStorage = JSON.parse(localStorage.getItem("item"));
//console.table(productsInLocalStorage);
//console.log('localStorage ='+productsInLocalStorage);
const emptyCart = document.querySelector("#cart__items");

//-----------------------------Retrieving the price-----------------------------------------------//
let products ="";
let getPrice = [];

const fetchPrice = async () => {
  await fetch("http://localhost:3000/api/products")
  .then((res) => res.json())
  .then((products) => {
    getPrice = products;
    //console.table(getPrice);
    console.log(products);
  })
  .catch(err => console.log("Error", err));
};

fetchPrice();
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
  
      itemsInCart.insertAdjacentHTML("afterend", `
              <article class="cart__item" data-id="${item.id}" data-color="${item.color}">
                      <div class="cart__item__img">
                        <img src="${item.image}" alt="${item.altTxt}">
                      </div>
                      <div class="cart__item__content">
                        <div class="cart__item__content__description">
                          <h2>${item.name}</h2>
                          <p>${item.color}</p>
                          <p>${products.price}€</p>
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
                  }
        //console.log(itemsInCart);
        cartStructure = itemsInCart;
        //console.log(cartStructure);
      }}
  
      cartItems();

//-----------------------------------------------Delete button---------------------------------//
  function deleteProduct(){
   
  let productsInLocalStorage = JSON.parse(localStorage.getItem("item"));
  let btnDelete = document.querySelectorAll(".deleteItem");
  console.log(btnDelete);


    for (let i = 0; i < btnDelete.length; i++){
      
      btnDelete[i].addEventListener("click", (e) => {
       e.preventDefault();

        let deleteId = productsInLocalStorage[i].id;
        console.log(deleteId);
        let deleteColor = productsInLocalStorage[i].color;
        console.log(deleteColor);

        productsInLocalStorage = productsInLocalStorage.filter(el => el.id !== deleteId || el.color !== deleteColor);
        console.log(productsInLocalStorage);

        productsInLocalStorage.map(p => delete p.price)
        localStorage.setItem("item", JSON.stringify(productsInLocalStorage));

        if (productsInLocalStorage.length == 0){
          localStorage.removeItem("item");
        }

        alert ("supprimé");
        location.reload();
      
      });
    }; 
}; 
deleteProduct();
 

  /* function deleteProduct(){
  
  for (let item of productsInLocalStorage){
  let productsInLocalStorage = JSON.parse(localStorage.getItem("item"));
  let btnDelete = document.querySelector(".deleteItem");
  console.log(btnDelete);
  btnDelete.addEventListener("click", (e)=>{
    e.preventDefault();
      let deleteId = productsInLocalStorage.id;
      console.log(deleteId);
      let deleteColor = productsInLocalStorage.color;
      console.log(deleteColor);
      productsInLocalStorage = productsInLocalStorage.filter(el => el.id !== deleteId || el.color !== deleteColor);
      console.log(productsInLocalStorage);
      localStorage.setItem("item", JSON.stringify(productsInLocalStorage));
      alert ("supprimé");
      location.reload();
    })
    }
  };
  deleteProduct();  */
//console.log(deleteProduct);

 /* function deleteProduct(){
    let productsInLocalStorage = JSON.parse(localStorage.getItem("item"));
    let deleteId = productsInLocalStorage.id;
    let deleteColor = productsInLocalStorage.color;
    productsInLocalStorage = productsInLocalStorage.filter(el => el.id !== deleteId || el.color !== deleteColor);
    localStorage.setItem("item", JSON.stringify(productsInLocalStorage));
};
    const btnDelete = document.querySelector(".deleteItem");
    btnDelete.forEach(deleteProduct =>{
    btnDelete.addEventListener("click", (e)=>{
    e.preventDefault();
    
      alert ("supprimé")
    })
  });  */



