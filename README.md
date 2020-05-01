# WebDriverIOTestProjectOne
This is a test automation project done with WebdriverIO, Mocha and Chai. Allure Report has been used as well to generate reports.
To run this project, perform the following :
1. Clone the repo
2. run npm install
3. run ENV=qa  npm run test -- --spec ./test/login.test.js or ENV=dev  npm run test -- --spec ./test/login.test.js
To get the Allure reports, perform the following : 
1. Open the folder which contains the allure reports in cmd
2. run allure server locationoftheallurereports
