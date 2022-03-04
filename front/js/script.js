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
      theProduct.innerHTML += `
          <a href="./product.html?id=${products._id}">
            <article>
              <img src="${products.imageUrl}" alt="${products.altTxt}">
              <h3 class="productName">${products.name}</h3>
              <p class="productDescription">${products.description}</p>
            </article>
          </a>`;
    });
    console.log(articles);
    console.log(getProducts);
  })
  .catch(err => console.log("Error", err));
  

      

    



//class products {
 // constructor (imageUrl, altTxt, name, description){
   // this.image = imageUrl;
    //this.alt = altTxt;
    //this.name = name;
    //this.description = description;
  //} 
//};

//let myProducts = new products(imageUrl, altTxt, name, description);{
 // imageUrl: "http://localhost:3000/api/products/"+imageUrl;
 // altTxt: "";
  //name: "";
  //description: ""
//}

//let products = {
  //altTxt: "",
  //colors: [""],
  //description: "",
  //imageUrl: "",
  //name: "",
  //price: 0,
  //_id: ""
//}; 


















