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

    // delete(id){
    //     const productInCart = this.items.find(prod => prod.id === id);
    //     if(productInCart){
    //         this.items.find
    //     }

    // }


}