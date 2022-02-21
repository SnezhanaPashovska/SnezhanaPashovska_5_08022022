
let getProducts = fetch ("http://localhost:3000/api/products");

  async function retrieveInfo (url){
  const getProducts = await fetch (url);
  let websiteData = getProducts.json();
  console.log(websiteData);
}














