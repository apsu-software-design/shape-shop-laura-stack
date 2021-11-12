import {ShapeModel} from './ShapeModel';


export class ProductView {

	//private state: ShapeModel; 


	/*constructor(temp: ShapeModel){
		this.state = temp;
	}*/

	getView(): String{
		let productList : String = (`Here you can select your shape. Pick an option:
    1. Buy a Triangle!
    2. Buy a Square!
    3. Buy a Pentagon!
    4. Go back. Don't buy anything.`);
        return productList;
	}
}