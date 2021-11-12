"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductView = void 0;
var ProductView = /** @class */ (function () {
    function ProductView() {
    }
    //private state: ShapeModel; 
    /*constructor(temp: ShapeModel){
        this.state = temp;
    }*/
    ProductView.prototype.getView = function () {
        var productList = ("Here you can select your shape. Pick an option:\n    1. Buy a Triangle!\n    2. Buy a Square!\n    3. Buy a Pentagon!\n    4. Go back. Don't buy anything.");
        return productList;
    };
    return ProductView;
}());
exports.ProductView = ProductView;
