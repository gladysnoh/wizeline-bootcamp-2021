import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    LOGIN_URL: process.env.SWAGLABS_URL
}

export const CREDENTIALS = {
    ACCEPTED_CREDENTIALS: {
        STANDARD_USERNAME: process.env.STANDARD_USERNAME,
        PASSWORD: process.env.PASSWORD
    },

    INVALID: {
        INVALID_USER: process.env.WRONG_USERNAME,
        INVALID_PASSWORD: process.env.WRONG_PASSWORD
    }

}

export const PRODUCTS = [
    {
        NAME: 'Sauce Labs Onesie'
    }, {
        NAME: 'Sauce Labs Bike Light'
    }
]

export const CHECKOUT_INFO = {
    FIRST_NAME: 'Gladys',
    LAST_NAME: 'Noh',
    ZIP_CODE: '12345'
};

export const SUCCESS_PURCHASE_MESSAGE = 'THANK YOU FOR YOUR ORDER';



