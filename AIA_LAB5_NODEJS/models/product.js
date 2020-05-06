const db = require('../util/db');

module.exports = class Product {
    constructor(id, name, price, imageUrl) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
    }

    static fetchAll(){
       return db.execute('SELECT * FROM products');
    }

    static findById(id){
        return db.query('SELECT * FROM products WHERE id=?', id)
    }
}