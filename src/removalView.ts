import {ShapeModel} from './ShapeModel'

export class RemovalView{
	private state: ShapeModel;

	constructor(curr:ShapeModel){
		this.state = curr;
	}

	getView(): String{

		let qty = this.state.qtyOfItem(); 
		let shoppingCart = this.state.viewItemsInCart(); 

		let returnString: String = new String("Itemsfor removal:");

		for(let i = 0; i < shoppingCart.length;i++){
			let allProducts: string = (
			   "\n"
                +("\n       Name: "+shoppingCart[i].getName().toString())
                +("\n      Price: "+shoppingCart[i].getPrice().toString())
                +("\nDescription: "+shoppingCart[i].getDescription().toString())
                +("\n   Quantity: "+qty[i].toString()));
				returnString = returnString.concat(allProducts); 
		}
		return returnString; 
	}
}