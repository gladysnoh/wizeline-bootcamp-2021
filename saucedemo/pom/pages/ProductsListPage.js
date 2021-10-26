import {Selector, t} from "testcafe";
class ProductsListPage{
    constructor() {
        this.sortDropdown = Selector('.select_container .product_sort_container')
        this.sortLowHighPriceOption = this.sortDropdown.find('option').withText('Price (low to high)')
        this.productItemContainer = Selector('.inventory_item')
        this.productItemPrice = this.productItemContainer.find('.inventory_item_price')
        //Selecting all item
        this.addToCartButton = '.btn_primary.btn_inventory'

    }

    async getProductPricesFromList() {
        const itemsLength = await this.productItemPrice.count;
        const prices = [];
        for (let i = 0; i < itemsLength; i++) {
            const priceText = await this.productItemPrice.nth(i).innerText || '';
            prices.push(Number(priceText.substring(1).trim()) || 0);
        }
        return prices;
    }

    async addItemsToCart(numberOfItems){
        const itemsOnScreen = await this.productItemContainer.count
        if(itemsOnScreen >= numberOfItems){
            for(let i = 0; i < numberOfItems; i++){
                await t.click(this.productItemContainer.find(this.addToCartButton))
            }
            return true
        } else{
            return false
        }
    }

    async addSpecificProductsToCart(productNames) {
        // add the found product to cart!
        for (let i = 0; i < productNames.length; i++) {
            await t.click(this.productItemContainer.withText(productNames[i]).find(this.addToCartButton));
        }
    }

}
export default new ProductsListPage()