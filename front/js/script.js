//Retreiving Data from API

const getProducts = fetch ("http://localhost:3000/api/products");

async function retrieveInfo (url){
  const getProducts = await fetch (url);
  let websiteData = getProducts.json();
  console.log(websiteData);
}

//Processing data from API

const nameOfProducts = [
  {altTxt: "Photo d'un canapé bleu, deux places",
  colors: ["Blue", "White", "Black"],
  description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  imageUrl: "http://localhost:3000/images/kanap01.jpeg",
  name: "Kanap Sinopé",
  price: 1849,
  _id: "107fb5b75607497b96722bda5b504926"
  }, 

  {altTxt: "Photo d'un canapé jaune et noir, quattre places",
  colors: ["Black/Yellow", "Black/Red"],
  description: "Morbi nec erat aliquam, sagittis urna non, laoreet justo. Etiam sit amet interdum diam, at accumsan lectus.",
  imageUrl: "http://localhost:3000/images/kanap02.jpeg",
  name: "Kanap Cyllène",
  price: 4499,
  _id: "415b7cacb65d43b2b5c1ff70f3393ad1"}, 

  {altTxt: "Photo d'un canapé d'angle, vert, trois places",
  colors: ["Green", "Red", "Orange"],
  description: "Pellentesque fermentum arcu venenatis ex sagittis accumsan. Vivamus lacinia fermentum tortor.Mauris imperdiet tellus ante.",
  imageUrl: "http://localhost:3000/images/kanap03.jpeg",
  name: "Kanap Calycé",
  price: 3199,
  _id: "055743915a544fde83cfdfc904935ee7",
  }, 
  {altTxt: "Photo d'un canapé rose, une à deux place",
  colors: ["Pink", "White"],
  description: "Donec mattis nisl tortor, nec blandit sapien fermentum at. Proin hendrerit efficitur fringilla. Lorem ipsum dolor sit amet.",
  imageUrl: "http://localhost:3000/images/kanap04.jpeg",
  name: "Kanap Autonoé",
  price: 1499,
  _id: "a557292fe5814ea2b15c6ef4bd73ed83"}, 

  {altTxt: "Photo d'un canapé gris, trois places",
  colors: ["Grey", "Purple", "Blue"],
  description: "Ut laoreet vulputate neque in commodo. Suspendisse maximus quis erat in sagittis. Donec hendrerit purus at congue aliquam.",
  imageUrl: "http://localhost:3000/images/kanap05.jpeg",
  name: "Kanap Eurydomé",
  price: 2249,
  _id: "8906dfda133f4c20a9d0e34f18adcf06"}, 

  {altTxt: "Photo d'un canapé gris, deux places",
  colors: ["Grey", "Navy"],
  description: "Curabitur vel augue sit amet arcu aliquet interdum. Integer vel quam mi. Morbi nec vehicula mi, sit amet vestibulum.",
  imageUrl: "http://localhost:3000/images/kanap06.jpeg",
  name: "Kanap Hélicé",
  price: 999,
  _id: "77711f0e466b4ddf953f677d30b0efc9"}, 

  {altTxt: "Photo d'un canapé rouge, deux places",
  colors: ["Red", "Silver"],
  description: "EMauris imperdiet tellus ante, sit amet pretium turpis molestie eu. Vestibulum et egestas eros. Vestibulum non lacus orci.",
  imageUrl: "http://localhost:3000/images/kanap07.jpeg",
  name: "Kanap Thyoné",
  price: 1999,
  _id: "034707184e8e4eefb46400b5a3774b5f"}, 

  {altTxt: "Photo d'un canapé rose, trois places",
  colors: ["Pink", "Brown", "Yellow", "White"],
  description: "Mauris molestie laoreet finibus. Aenean scelerisque convallis lacus at dapibus. Morbi imperdiet enim metus rhoncus.",
  imageUrl: "http://localhost:3000/images/kanap08.jpeg",
  name: "Kanap orthosie",
  price: 3999,
  _id: "a6ec5b49bd164d7fbe10f37b6363f9fb"}];

for(productName of nameOfProducts) {
  console.log(productName);
};

//


class myClass{};

let tableauVide = [];


















