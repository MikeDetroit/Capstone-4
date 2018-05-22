var products = [
{product : "Apples", price: 5.99},
{product : "Orange Juice", price: 2.99},
{product : "Ground Beef", price: 5.99},
{product : "Chicken", price: 3.99},
{product : "Eggs", price: 1.99},
{product : "Cheese", price: 3.99}
];
var cart = [];

function addToCart(i) {
  cart.push(products[i]);
}

function getTotal() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }
  console.log("Your total is: " + total);

}

function displayCart() {
  for (var i = 0; i < cart.length; i++) {
    console.log(cart[i]);
}
getTotal();
}
