# yblky
Code Louisville project (YouthBuild Louisville student site )


JavaScript -
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


          // this function controls the "myCart" and makes it appear for shoppers (Who add to the cart) and it does not appear
          // for people who are not shopping.


function myFunction() {
    cartItems.push(1);

    if (cartItems.length < 0 ){
        document.getElementById("cartIcon").style.display = "none";
    }else {
        document.getElementById("cartIcon").style.display = "inline";
    };
    

};
// end of cart code


CSS -

.oftheweek {

    margin: auto;
    margin-bottom: 20px;
    

}

.oftheweek a:hover {

    color: maroon;

}
