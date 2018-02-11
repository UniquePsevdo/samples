class ShoppingDataType{

    constructor(){
        this.shoppingList = ['coffee', 'chicken', 'pizza']
    }

    getShoppingList(){
        return this.shoppingList.join(', ')
    }

    addItem(item){
        this.shoppingList.push(item)
    }
}
export default ShoppingDataType