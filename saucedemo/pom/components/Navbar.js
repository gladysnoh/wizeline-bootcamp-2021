import {Selector, t} from "testcafe";

class Navbar{
    constructor() {
        this.shoppingCartButtonContainer = Selector('#shopping_cart_container')
        this.burguerMenuButton = Selector('#react-burger-menu-btn')
        this.logOutOption = Selector('#logout_sidebar_link')
        this.cartBadgeCount = Selector('.shopping_cart_badge')
        this.shoppingCartLink = this.shoppingCartButtonContainer.find('.shopping_cart_link')
    }
    async logOutAction(){
        await t
            .click(this.burguerMenuButton)
            .click(this.logOutOption)
    }
}
export default new Navbar()