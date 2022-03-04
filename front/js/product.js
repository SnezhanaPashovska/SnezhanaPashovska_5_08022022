

const queryStringUrlId = window.location.search;
console.log(queryStringUrlId);

const theId = queryStringUrlId.slice(4);
console.log(theId);

const params = new URLSearchParams(queryStringUrlId);
console.log(params);

const id = params.get("id");

let products = fetch(`http://localhost:3000/api/products/${id}`)


    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })
    

//Processing data from API
    .then (function (products){

        //Image
        let item = document.getElementById("imgId");
        item.innerHTML += `
            <img src="${products.imageUrl}" alt="${products.altTxt}">`;

        //Title
        let title = document.getElementById("title");
        title.innerHTML += `${products.name}`;

        //Price
        let price = document.getElementById("price");
        price.innerHTML += `${products.price}`;

        //Description
        let description = document.getElementById("description");
        description.innerHTML += `${products.description}`;

        //Color option
        function colors(product){
        colors.forEach(products =>{
        let colors = document.getElementById("colors");
        colors.innerHTML += `
        <option value ="">${products.colors}</option>`;
        })}
        console.log(products);   

    })
.catch(err => console.log("Error", err));


//let product = {
    //colors: [`${products.colors}`],
   // description: `${products.description}`,
    //imageUrl: `${products.imageUrl}`,
    //name: `${products.name}`,
    //price: `${products.price}`,
    //_id: `${products._id}`
  //};




