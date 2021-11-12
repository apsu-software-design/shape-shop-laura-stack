"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCartView = void 0;
var ShoppingCartView = /** @class */ (function () {
    function ShoppingCartView(temp) {
        this.state = temp;
    }
    ShoppingCartView.prototype.getView = function () {
        var shoppingCart = this.state.viewItemsInCart();
        var qty = this.state.qtyOfItem();
        var returnString = new String("");
        for (var i = 0; i < shoppingCart.length; i++) {
            var allProducts = ("\n"
                + ("\n       Name: " + shoppingCart[i].getName().toString())
                + ("\n      Price: " + shoppingCart[i].getPrice().toString())
                + ("\nDescription: " + shoppingCart[i].getDescription().toString())
                + ("\n   Quantity: " + qty[i].toString()));
            returnString = returnString.concat(allProducts);
        }
        return returnString;
    };
    return ShoppingCartView;
}());
exports.ShoppingCartView = ShoppingCartView;
