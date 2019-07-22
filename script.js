

// this is intended to hide the cart from the navagation unless you have an item in your cart.
var cart = document.getElementById("cartIcon");
console.log("Good1");

var cartItems = [

];
console.log("Good2");

if (cartItems.length < 1 ){
    cart.style.display = "none";
}else {
    cart.style.display = "default";
};

// end of cart code

// this code is inteded allow you to add items to the cart.

