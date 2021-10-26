import LoginPage from "../pages/LoginPage";
import {CREDENTIALS, PRODUCTS, URLS} from "../data/Constants";
import ProductsListPage from "../pages/ProductsListPage";
import Navbar from "../components/Navbar";
import ShoppingCartPage from "../pages/ShoppingCartPage";

fixture ('Products List Testing')
    .page`${URLS.LOGIN_URL}`
    .beforeEach(async t => {
        await LoginPage.submitLoginForm(CREDENTIALS.ACCEPTED_CREDENTIALS.STANDARD_USERNAME, CREDENTIALS.ACCEPTED_CREDENTIALS.PASSWORD)
        await t.maximizeWindow()
    })

test('D) As a User I should be able to sort products by price(Low to High)', async t =>{
    await t.click(ProductsListPage.sortDropdown)
    await t.click(ProductsListPage.sortLowHighPriceOption)
    const sortedPrices = await ProductsListPage.getProductPricesFromList();
    for (let i = 0; i < sortedPrices.length; i++) {
        // We are on the last price, it does not have a next number to compare, so break the loop.
        if (i === sortedPrices.length - 1) {
            break;
        }
        // The current price must be low or equals to the next value.
        await t.expect(sortedPrices[i]).lte(sortedPrices[i + 1]);
    }
})

test('E) As a user I should be able to add multiple items to the shopping cart', async t=> {
    await ProductsListPage.addItemsToCart(4)
    const badgeCount = await Navbar.cartBadgeCount.innerText
    await t.expect(Number(badgeCount)).eql(4)
})

test('F) As a user I should be able to add single item to the shopping cart', async t=>{
    // This is an array of products which contains the Onesie Product only.
    const onesieProduct = [PRODUCTS[0].NAME];
    await ProductsListPage.addSpecificProductsToCart(onesieProduct)
    await t.click(Navbar.shoppingCartLink)
    await ShoppingCartPage.validateItemsInCart(onesieProduct)
})

