const db = require('../util/db');

module.exports = class Product {
    constructor(name, price, imageUrl) {
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
    }

    static fetchAll(){
       return db.execute('SELECT * FROM products');
    }
}