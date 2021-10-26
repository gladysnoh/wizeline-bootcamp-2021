import {CREDENTIALS, URLS} from "../data/Constants";
import LoginPage from "../pages/LoginPage";
import Navbar from "../components/Navbar";


fixture ('Login testing ')
    .page`${URLS.LOGIN_URL}`
    .beforeEach(async t => {
        await t.maximizeWindow()
    })

test('A) As a User I should be able to Login using standard credentials', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.ACCEPTED_CREDENTIALS.STANDARD_USERNAME, CREDENTIALS.ACCEPTED_CREDENTIALS.PASSWORD)
    await t.expect(Navbar.shoppingCartButtonContainer.exists).ok()
    await Navbar.logOutAction()
})
test('B) As a User I should be able to see an error message when Login with an invalid user', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.INVALID.INVALID_USER, CREDENTIALS.ACCEPTED_CREDENTIALS.PASSWORD)
    await t.expect(LoginPage.warningErrorMessage.innerText).contains('Username and password do not match')
})
test('C) As a User I should be able to Logout from the home page', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.ACCEPTED_CREDENTIALS.STANDARD_USERNAME, CREDENTIALS.ACCEPTED_CREDENTIALS.PASSWORD)
    await Navbar.logOutAction()
    await t.expect(LoginPage.loginButton.exists).ok()
})
