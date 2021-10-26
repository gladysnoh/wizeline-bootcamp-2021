# wizeline-challenge
This repository was created in order to deliver my bootcamp chanllenge assessment

# Installation
In order to have the project's dependencies, please run the following command: `npm install`

# How to use my test scripts

1. To run login cases(A, B and C) execute:
`npm run login-test`
2. To run shopping cart cases(E and F) execute:
`npm run products-test`
3. And finally to run the complete purchase test(G), execute:
`npm run shopping-process-test`

If you want to execute all the tests at once, use the following command:
`npm run tests-from-config-file`
This will also execute the tests on Chrome and Firefox.

To generate reports please execute:
`npm run generate-report`

NOTE: The project uses the [allure](https://www.npmjs.com/package/testcafe-reporter-allure) package, so in order to see the HTML with all its content (and execute the generate script), you must have Java and the JAVA_HOME variable configured in your machine. 

Than you! :)
