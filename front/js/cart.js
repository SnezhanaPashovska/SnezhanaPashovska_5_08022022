let productsInLocalStorage = JSON.parse(localStorage.getItem("item"));
console.log('localStorage ='+productsInLocalStorage);
const emptyCart = document.querySelector("#cart__items");

if(productsInLocalStorage === null || productsInLocalStorage == 0){
  const noItems = `<p>Votre panier est vide</p>`;
  emptyCart.innerHTML = noItems;
  console.log (noItems);
  
} else {

  console.log(productsInLocalStorage.lenght);

  const itemsInCart = document.querySelector("#cart__items");
  for(let product of productsInLocalStorage) {

    let cartStructure = [];

    console.log(product);

    itemsInCart.innerHTML += `
            <article class="cart__item" data-id="${product.id}" data-color="${product.colors}">
                    <div class="cart__item__img">
                      <img src="${product.image}" alt="${product.altTxt}">
                    </div>
                    <div class="cart__item__content">
                      <div class="cart__item__content__description">
                        <h2>${product.name}</h2>
                        <p>${product.colors}</p>
                        <p>${product.price}€</p>
                      </div>
                      <div class="cart__item__content__settings">
                        <div class="cart__item__content__settings__quantity">
                          <p>Qté :${productsInLocalStorage.selectedQuantity} </p>
                          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="">
                        </div>
                        <div class="cart__item__content__settings__delete">
                          <p class="deleteItem">Supprimer</p>
                        </div>
                      </div>
                    </div>
                  </article>`;
                }
      console.log('itemsInCart = '+itemsInCart);
      cartStructure = itemsInCart;
    };
                console.log('cartStructure = '+cartStructure);
                
                 
  
