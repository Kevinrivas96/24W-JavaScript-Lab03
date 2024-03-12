// That's it! Now on to Lab 3...
// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes,
    assortments of cheeses,
    specialty sauces,
    different meat patties(beef, chicken, vegetarian),
    single, double, or triple patty,
    Pickles, hot peppers, olives etc.
*/
// add some extra if you want
// Make sure that the function allows for the output of a sentence that describes the hamburger, too

// Retrive the output div tag element from HTML  
const outputTable = document.getElementById('output');
const qty = document.querySelector("#qty");
const price = document.querySelector("#price");
const summary = document.querySelector("#summary");
const btn = document.querySelector("#btn");
const total = document.querySelector("#total");

function Hamburger(customerName, orderCount, hamburgerSize, isCombo = Boolean, bunType, vegetables, cheeseType, sauces, meatType, pattyCount = Number, extras, itemPrice) {
    this.customerName = customerName; // String
    this.orderCount = orderCount; // Number
    this.hamburgerSize = hamburgerSize; // String
    this.isCombo = isCombo; // Boolean
    this.bunType = bunType; // String
    this.vegetables = vegetables; // Array
    this.cheeseType = cheeseType; // String
    this.sauces = sauces; // Array
    this.meatType = meatType; // String
    this.pattyCount = pattyCount; // Number
    this.extras = extras; // Array
    this.itemPrice = itemPrice; // Number

    this.summary = function () {
        qty.textContent = this.orderCount + "x";
        summary.textContent = `Customer Name: ${this.customerName.toUpperCase()} - Hamburger Size: ${this.hamburgerSize}, Bun Type: ${this.bunType}, Cheese: ${this.cheeseType}, Sauces: ${this.sauces}, Meat: ${this.pattyCount}x ${this.meatType}, Extras: ${this.extras}, Combo: ${this.isCombo === true ? "Yes" : "No"}`;
        price.textContent = `$${this.itemPrice}`;
        total.textContent = `$${this.itemPrice * this.orderCount}`
    }
}

let orderNumber1 = new Hamburger("Kevin", 3, "Large", true, "white", ["pickles", "tomato", "lettuce"], "Habanero", ["chipotle", "Ranch"], "Beef", 2, ["Hot peppers"], 19.99);

let orderNumber2 = new Hamburger("Bryan", 2, "Medium", false, "Integral", ["Jalapenos", "Lettuce", "Tomato", "Cucumber"], "Cheddar", ["chipotle", "Ranch", "BBQ"], "Chicken", 3, ["Olives", "Onions"], 14.99);

let firstOrder = false

btn.addEventListener('click', function () {
    if (firstOrder === false) {
        orderNumber1.summary();
        firstOrder = true;
    } else {
        orderNumber2.summary();
        firstOrder = false;
    }
})



// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS