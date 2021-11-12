"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemovalView = void 0;
var RemovalView = /** @class */ (function () {
    function RemovalView(curr) {
        this.state = curr;
    }
    RemovalView.prototype.getView = function () {
        var qty = this.state.qtyOfItem();
        var shoppingCart = this.state.viewItemsInCart();
        var returnString = new String("Itemsfor removal:");
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
    return RemovalView;
}());
exports.RemovalView = RemovalView;
