import {t, Selector} from "testcafe";
import {PRODUCTS} from "../data/Constants";

class ShoppingCartPage {

    constructor() {
        this.cartItemContainer = Selector('.cart_item')
        this.checkoutButton = Selector('button.checkout_button');
    }

    async validateItemsInCart(productNames){
        let itemsInCart = await this.cartItemContainer.count
        await t.expect(itemsInCart).eql(productNames.length)
        for(let i = 0; i < itemsInCart; i++){
            await t.expect(this.cartItemContainer.nth(i).innerText).contains(PRODUCTS[i].NAME)
        }
    }

}

export default new ShoppingCartPage();
