"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceView = void 0;
var PriceView = /** @class */ (function () {
    function PriceView(temp) {
        this.state = temp;
    }
    PriceView.prototype.getView = function () {
        var total = 0;
        //let total = 0; 
        for (var i = 0; i < this.state.viewItemsInCart().length; i++) {
            total += this.state.qtyOfItem()[i] * this.state.viewItemsInCart()[i].getPrice();
        }
        return "Shopping Cart Total: " + total;
    };
    return PriceView;
}());
exports.PriceView = PriceView;
