import {ShapeModel} from './ShapeModel'


export class PriceView{
	private state: ShapeModel;

	constructor(temp:ShapeModel){
		this.state = temp;
	}

	getView():String{
		let total:number = 0; 
		//let total = 0; 

		for(let i = 0; i < this.state.viewItemsInCart().length; i++){
			total += this.state.qtyOfItem()[i] * this.state.viewItemsInCart()[i].getPrice();
		}
		return "Shopping Cart Total: " + total; 
	}
}