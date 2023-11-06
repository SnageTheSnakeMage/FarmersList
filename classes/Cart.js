const Product = require('../classes/Product.js');


class Cart{
    constructor(products, total){
        this.products = [],
        this.total = 0
    }

    addProduct(product){
        this.products.push(product)
        this.total += product.price
    }

    removeProduct(i){
        let remove = this.products.splice(i, 1)
        this.total -= remove[0].price
    }
}


module.exports = Cart