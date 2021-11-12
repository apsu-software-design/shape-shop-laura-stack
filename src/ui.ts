//User Interface for The Shopping Cart 
//@author James Church

import readlineSync = require('readline-sync'); //for easier repeated prompts
import {Product} from './products';
import {ShapeModel} from './ShapeModel'; 
import {ProductView} from './productView'
import {ShoppingCartView} from './shoppingCartView'
import {PriceView} from './priceView';
import {RemovalView} from './removalView';

// Hey look. It's a global variable. This is totally cool, right?
//let shopping_cart: Product[] = [];
//let quantity_cart: number[] = [];

let shapeMod:ShapeModel = new ShapeModel; 

/**
 * Function to run the UI
 */
export function start() {
  showMainMenu();
}

/** UNEDITED/ORIGINAL FUNCTION
 * The main menu. Will show until the user exits
 */
function showMainMenu() {
  while(true){ //run until we exit
    console.log(`Welcome to the Shape Store! We offer the best shapes! Pick an option:
  1. Add an item to the cart.
  2. Remove an item to the cart.
  3. View the items in the cart.
  4. View the price of all items.
  5. Quit.`);

    let response = readlineSync.question('> ')
    if(response === '5' || response.slice(0,2).toLowerCase() === ':q'){
      break; //stop looping, thus leaving method
    }

    switch(response) { //handle each response
      case '1': addItemToCart(); break;
      case '2': removeItemFromCart(); break;
      case '3': viewItemsInCart(); break;
      case '4': viewCartTotal(); break;
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

    let product: ProductView = new ProductView(); 
    console.log(product.getView());
    /*console.log(`Here you can select your shape. Pick an option:
    
  1. Buy a Triangle!
  2. Buy a Square!
  3. Buy a Pentagon!
  4. Go back. Don't buy anything.`);*/

    let response = readlineSync.question('> ')

    switch(response) { //handle each response
      case '1': shapeMod.addProduct(new Product("Triangle", 3.5, "It's got three sides!")); break;
      case '2': shapeMod.addProduct(new Product("Square", 4.5, "It's got four sides!")); break;
      case '3': shapeMod.addProduct(new Product("Pentagon", 5.5, "It's got five sides!")); break;
      default: console.log('Invalid option!');
    }
    console.log(''); //extra empty line for revisiting
}

function letUserSelectQuantity() {
    console.log(`How many of this shape would you like to purchase?
  `);

    let response = readlineSync.question('> ')
    shapeMod.setQuantity((parseInt(response)));
    console.log(''); //extra empty line for revisiting
}

function removeItemFromCart() {
    console.log(`Select an item to be removed from the cart.
  `);

  viewRemovedItems(); 

    /*for (let i = 0; i < shopping_cart.length; i++) {
        console.log(i+": "+shopping_cart[i].getName());
    }*/

    let response = readlineSync.question('> ')
    let toRemove = parseInt(response);

    shapeMod.removeProduct(toRemove);
    //quantity_cart.splice(toRemove, 1);

    console.log(''); //extra empty line for revisiting
}

function viewRemovedItems(){
    let itemsInCart: RemovalView = new RemovalView(shapeMod); 
    console.log(itemsInCart.getView().toString()); 
}

function viewItemsInCart() {
    let itemsInCart: ShoppingCartView = new ShoppingCartView(shapeMod); 
    console.log(itemsInCart.getView().toString());
}

function viewCartTotal() {
    let itemsInCart: PriceView = new PriceView(shapeMod);
    console.log(itemsInCart.getView());
}
