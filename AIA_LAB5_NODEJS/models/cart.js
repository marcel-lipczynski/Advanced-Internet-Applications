module.exports = class Cart{
    constructor(oldCart){
        this.items = oldCart.items || [];
        this.totalPrice = oldCart.totalPrice || 0;
    }

    add(product, id) {
        const addedProduct = {id: product.id, name: product.name, price: product.price, imageUrl: product.imageUrl};
        const existingProduct = this.items.find(prod => prod.id === +id);
        if(existingProduct){
            console.log('Product already in the cart');
        }else{
            this.items.push(addedProduct);
            this.totalPrice += +product.price;
        }
    }

    delete(id){
        const productIndex = this.items.findIndex(prod => prod.id === +id);
        console.log(productIndex);
        if(productIndex != -1){
            this.totalPrice -= +this.items[productIndex].price;
            this.items.splice(productIndex, 1);
        }

    }


}