import {ShapeModel} from './ShapeModel'

export class ShoppingCartView{

	private state: ShapeModel;


	constructor(temp:ShapeModel){
		this.state = temp;
	}

	public getView():String{
		
		let shoppingCart = this.state.viewItemsInCart();
		let qty = this.state.qtyOfItem();
		

		let returnString : String = new String(""); 
		
		for(let i = 0; i < shoppingCart.length; i++){
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