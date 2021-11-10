import {Products} from './products';

class ShapeModel{

	private shoppingCart: Product[] = [];
	private quantityOfItem: number[] = []; 
	
	
	viewItemsInCart(): Product[]{
		return this.shoppingCart;
	}

	quantityOfItem():number[]{
		return this.quantityOfItem; 
	}

	addProduct(product: Product){
		this.shoppingCart.push(product);
	}

	removeProduct(index: number) { //splice() changes the content of an array with given arguments (got definition/knowledge of splice() from tutorialspoint.com)
		this.shoppingCart.splice(position,1); 
		this.quantityOfItem.splice(position,1); 
	}

	setQuantity(quantity:number){
		this.quantityOfItem.push(quantity); 
	}
	

}