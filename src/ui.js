"use strict";
//User Interface for The Shopping Cart 
//@author James Church
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
var readlineSync = require("readline-sync"); //for easier repeated prompts
var products_1 = require("./products");
var ShapeModel_1 = require("./ShapeModel");
var productView_1 = require("./productView");
var shoppingCartView_1 = require("./shoppingCartView");
var priceView_1 = require("./priceView");
var removalView_1 = require("./removalView");
// Hey look. It's a global variable. This is totally cool, right?
//let shopping_cart: Product[] = [];
//let quantity_cart: number[] = [];
var shapeMod = new ShapeModel_1.ShapeModel;
/**
 * Function to run the UI
 */
function start() {
    showMainMenu();
}
exports.start = start;
/** UNEDITED/ORIGINAL FUNCTION
 * The main menu. Will show until the user exits
 */
function showMainMenu() {
    while (true) { //run until we exit
        console.log("Welcome to the Shape Store! We offer the best shapes! Pick an option:\n  1. Add an item to the cart.\n  2. Remove an item to the cart.\n  3. View the items in the cart.\n  4. View the price of all items.\n  5. Quit.");
        var response = readlineSync.question('> ');
        if (response === '5' || response.slice(0, 2).toLowerCase() === ':q') {
            break; //stop looping, thus leaving method
        }
        switch (response) { //handle each response
            case '1':
                addItemToCart();
                break;
            case '2':
                removeItemFromCart();
                break;
            case '3':
                viewItemsInCart();
                break;
            case '4':
                viewCartTotal();
                break;
            default: console.log('Invalid option!');
        }
        console.log(''); //extra empty line for revisiting
    }
}
//UNCHANGED FUNCTION
function addItemToCart() {
    letUserSelectItem();
    letUserSelectQuantity();
}
function letUserSelectItem() {
    var product = new productView_1.ProductView();
    console.log(product.getView());
    /*console.log(`Here you can select your shape. Pick an option:
    
  1. Buy a Triangle!
  2. Buy a Square!
  3. Buy a Pentagon!
  4. Go back. Don't buy anything.`);*/
    var response = readlineSync.question('> ');
    switch (response) { //handle each response
        case '1':
            shapeMod.addProduct(new products_1.Product("Triangle", 3.5, "It's got three sides!"));
            break;
        case '2':
            shapeMod.addProduct(new products_1.Product("Square", 4.5, "It's got four sides!"));
            break;
        case '3':
            shapeMod.addProduct(new products_1.Product("Pentagon", 5.5, "It's got five sides!"));
            break;
        default: console.log('Invalid option!');
    }
    console.log(''); //extra empty line for revisiting
}
function letUserSelectQuantity() {
    console.log("How many of this shape would you like to purchase?\n  ");
    var response = readlineSync.question('> ');
    shapeMod.setQuantity((parseInt(response)));
    console.log(''); //extra empty line for revisiting
}
function removeItemFromCart() {
    console.log("Select an item to be removed from the cart.\n  ");
    viewRemovedItems();
    /*for (let i = 0; i < shopping_cart.length; i++) {
        console.log(i+": "+shopping_cart[i].getName());
    }*/
    var response = readlineSync.question('> ');
    var toRemove = parseInt(response);
    shapeMod.removeProduct(toRemove);
    //quantity_cart.splice(toRemove, 1);
    console.log(''); //extra empty line for revisiting
}
function viewRemovedItems() {
    var itemsInCart = new removalView_1.RemovalView(shapeMod);
    console.log(itemsInCart.getView().toString());
}
function viewItemsInCart() {
    var itemsInCart = new shoppingCartView_1.ShoppingCartView(shapeMod);
    console.log(itemsInCart.getView().toString());
}
function viewCartTotal() {
    var itemsInCart = new priceView_1.PriceView(shapeMod);
    console.log(itemsInCart.getView());
}
