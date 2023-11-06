const Customer = require('./Customer.js');
class Auth{
    constructor(customers){
        this.customers = [];
    }

    register(name,email, shippingAddress){
        let custom = new Customer(name,email,shippingAddress);
        this.customers.push(custom)
    }

    login(email){
        for(let i = 0; i < this.customers.length; i++){
            let customer = this.customers[i];
            if(email === customer.email){
                return customer;
            }
        }
        return null;
    }
}

module.exports = Auth;