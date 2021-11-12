"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeModel = void 0;
var ShapeModel = /** @class */ (function () {
    function ShapeModel() {
        this.shoppingCart = [];
        this.quantityOfItem = [];
    }
    ShapeModel.prototype.viewItemsInCart = function () {
        return this.shoppingCart;
    };
    ShapeModel.prototype.qtyOfItem = function () {
        return this.quantityOfItem;
    };
    ShapeModel.prototype.addProduct = function (product) {
        this.shoppingCart.push(product);
    };
    ShapeModel.prototype.removeProduct = function (index) {
        this.shoppingCart.splice(index, 1);
        this.quantityOfItem.splice(index, 1);
    };
    ShapeModel.prototype.setQuantity = function (quantity) {
        this.quantityOfItem.push(quantity);
    };
    return ShapeModel;
}());
exports.ShapeModel = ShapeModel;
