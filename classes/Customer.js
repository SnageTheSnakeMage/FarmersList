const Cart = require('../classes/Cart.js');

class Customer{
	constructor(name,email,shippingAddress){
		this.name = name;
		this.email = email;
		this.shippingAddress = shippingAddress;
		this.orderHistory = [];
	}

	addToOrderHistory(cart){
		if(cart instanceof Cart){
			this.orderHistory.push(cart);
		}
		else{
			return
		}
	}
}
module.exports = Customer