import { Selector, t } from 'testcafe';
import {CHECKOUT_INFO} from "../data/Constants";

class CheckoutPage {
    constructor() {
        this.firstNameInput = Selector('#first-name');
        this.lastNameInput = Selector('#last-name');
        this.zipCodeInput = Selector('#postal-code');
        this.continueButton = Selector('#continue')
    }

    async fillCheckoutInfoForm() {
        await t.typeText(this.firstNameInput, CHECKOUT_INFO.FIRST_NAME, {paste: true})
        await t.typeText(this.lastNameInput(), CHECKOUT_INFO.LAST_NAME, {paste: true})
        await t.typeText(this.zipCodeInput(), CHECKOUT_INFO.ZIP_CODE, {paste: true})
    }
}

export default new CheckoutPage()
