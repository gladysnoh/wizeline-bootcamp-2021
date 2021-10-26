import {CREDENTIALS, PRODUCTS, SUCCESS_PURCHASE_MESSAGE, URLS} from "../data/Constants";
import LoginPage from "../pages/LoginPage";
import ProductsListPage from "../pages/ProductsListPage";
import Navbar from "../components/Navbar";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import CheckoutPage from "../pages/CheckoutPage";
import OverviewPage from "../pages/OverviewPage";
import CheckoutCompletePage from "../pages/CheckoutCompletePage";

fixture ('Products List testing ')
    .page`${URLS.LOGIN_URL}`
    .beforeEach(async t => {
        await LoginPage.submitLoginForm(CREDENTIALS.ACCEPTED_CREDENTIALS.STANDARD_USERNAME, CREDENTIALS.ACCEPTED_CREDENTIALS.PASSWORD)
        await t.maximizeWindow()
    })

test('G) As a User I should be able to complete a purchase', async t =>{
    const products = PRODUCTS.map((product) => product.NAME);
    await ProductsListPage.addSpecificProductsToCart(products)
    await t.click(Navbar.shoppingCartLink)
    // We should be on shopping cart page
    await t.expect(ShoppingCartPage.checkoutButton.exists).ok()
    await ShoppingCartPage.validateItemsInCart(products)
    await t.click(ShoppingCartPage.checkoutButton)
    // We should be on
    await t.expect(CheckoutPage.continueButton.exists).ok()
    await CheckoutPage.fillCheckoutInfoForm()
    await t.click(CheckoutPage.continueButton)
    // We should be on the overview page
    await t.expect(OverviewPage.finishButton.exists).ok()
    await t.click(OverviewPage.finishButton)
    await t.expect(CheckoutCompletePage.thankYouMessage.innerText).eql(SUCCESS_PURCHASE_MESSAGE)
})