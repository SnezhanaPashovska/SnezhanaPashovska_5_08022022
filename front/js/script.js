//Retreiving Data from API
const getProducts = fetch ("http://localhost:3000/api/products")
  .then(function(res){
  if(res.ok){
      return res.json();
  }
})
//Processing data from API - forEach method to loop through arrays with 'articles' callback function. The function is executed for every single element of the array.

  .then(function(articles){
    articles.forEach(products =>{

      const theProduct = document.getElementById("items");
      theProduct.insertAdjacentHTML( "afterbegin", `
          <a href="./product.html?id=${products._id}">
            <article>
              <img src="${products.imageUrl}" alt="${products.altTxt}">
              <h3 class="productName">${products.name}</h3>
              <p class="productDescription">${products.description}</p>
            </article>
          </a>`);
    // console.log(articles);
    // console.log(getProducts);
  })
})
.catch(err => console.log("Error", err));





















