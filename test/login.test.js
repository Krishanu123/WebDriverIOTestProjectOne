const loginTest = require("../pages/login.page")
const credentialsData = require("../data/credentials.data")
const inventoryTest = require("../pages/inventory.page")
const cartTest = require("../pages/cart.page")
const productDetailsTest = require("../pages/productDetails.page")
const checkoutOneTest = require("../pages/checkoutOne.page") 
const checkoutTwoTest = require("../pages/checkoutTwo.page")
const checkoutCompleteTest = require("../pages/checkoutComplete.page")


//*************************************** 'LOGIN PAGE' ACTIONS START ****************************************//

describe ("'Login' page actions", function(){

    it("should verify that if user has browsed to the correct url",()=>{
        browser.url('/')
        expect(browser.getUrl()).equals('https://www.saucedemo.com/')
    })

    it("should verify that if 'Logo' is existing, displayed and displayed in viewport in 'Login' page",()=>{
        loginTest.loginPageLogo.waitForDisplayed()
        expect(loginTest.loginPageLogo.isExisting()).to.be.true
        expect(loginTest.loginPageLogo.isDisplayed()).to.be.true
        expect(loginTest.loginPageLogo.isDisplayedInViewport()).to.be.true
    })

    it("should verify that if 'App Icon' is existing, displayed and displayed in viewport in 'Login' page",()=>{
        loginTest.loginPageAppIcon.waitForDisplayed()
        expect(loginTest.loginPageAppIcon.isExisting()).to.be.true
        expect(loginTest.loginPageAppIcon.isDisplayed()).to.be.true
        expect(loginTest.loginPageAppIcon.isDisplayedInViewport()).to.be.true
    })

    it("should verify that if 'Username' field is existing, displayed and displayed in viewport in 'Login' page",()=>{
        loginTest.loginUserName.waitForDisplayed()
        expect(loginTest.loginUserName.isExisting()).to.be.true
        expect(loginTest.loginUserName.isDisplayed()).to.be.true
        expect(loginTest.loginUserName.isDisplayedInViewport()).to.be.true
    })

    it("should verify that if 'Password' field is existing, displayed and displayed in viewport in 'Login' page",()=>{
        loginTest.loginPassword.waitForDisplayed()
        expect(loginTest.loginPassword.isExisting()).to.be.true
        expect(loginTest.loginPassword.isDisplayed()).to.be.true
        expect(loginTest.loginPassword.isDisplayedInViewport()).to.be.true
    })

    it("should verify that if 'LOGIN' buttion is existing, displayed and displayed in viewport in 'Login' page",()=>{
        loginTest.loginBtn.waitForDisplayed()
        expect(loginTest.loginBtn.isExisting()).to.be.true
        expect(loginTest.loginBtn.isDisplayed()).to.be.true
        expect(loginTest.loginBtn.isDisplayedInViewport()).to.be.true
    })

    it("should verify that if warning text is shown when both 'Username' and 'Password' fields are empty in 'Login' page",()=>{
        assert.equal('',loginTest.loginUserName.getValue())
        assert.equal('',loginTest.loginPassword.getValue())
        loginTest.clickLoginBtnLoginPage()
        expect(loginTest.warningTextLoginPage()).equals('Epic sadface: Username is required')             
    })

    it("should verify that if warning text is shown when 'Password' field is empty in 'Login' page",()=>{
        loginTest.enterUserNameLoginPage(credentialsData.loginUserNameData)
        assert.equal(credentialsData.loginUserNameData,loginTest.loginUserName.getValue())
        assert.equal('',loginTest.loginPassword.getValue())
        loginTest.clickLoginBtnLoginPage()
        expect(loginTest.warningTextLoginPage()).equals('Epic sadface: Password is required')         
    })

    it("should verify that if warning text is shown when wrong username and password are sent for 'Username' and 'Password' field respectively in 'Login' page",()=>{
        loginTest.loginUserName.clearValue()
        loginTest.loginPassword.clearValue()
        loginTest.enterUserNameLoginPage('test')
        assert.equal('test',loginTest.loginUserName.getValue())
        loginTest.enterPasswordLoginPage('test')
        assert.equal('test',loginTest.loginPassword.getValue())
        loginTest.clickLoginBtnLoginPage()
        expect(loginTest.warningTextLoginPage()).equals('Epic sadface: Username and password do not match any user in this service')         
    })

    it("should verify that if warning text is shown when wrong username is sent for the 'Username' field in 'Login' page",()=>{
        loginTest.loginUserName.clearValue()
        loginTest.enterUserNameLoginPage('test')
        assert.equal('test',loginTest.loginUserName.getValue())
        loginTest.loginPassword.clearValue()
        loginTest.enterPasswordLoginPage(credentialsData.loginPasswordData)
        assert.equal(credentialsData.loginPasswordData,loginTest.loginPassword.getValue())
        loginTest.clickLoginBtnLoginPage()
        expect(loginTest.warningTextLoginPage()).equals('Epic sadface: Username and password do not match any user in this service')        
    })

    it("should verify that if warning text is shown when wrong password is sent for the 'Password' field in 'Login' page",()=>{
        loginTest.loginUserName.clearValue()
        loginTest.enterUserNameLoginPage(credentialsData.loginUserNameData)
        assert.equal(credentialsData.loginUserNameData,loginTest.loginUserName.getValue())
        loginTest.loginPassword.clearValue()
        loginTest.enterPasswordLoginPage('test')
        assert.equal('test',loginTest.loginPassword.getValue())
        loginTest.clickLoginBtnLoginPage()
        expect(loginTest.warningTextLoginPage()).equals('Epic sadface: Username and password do not match any user in this service')        
    })

    it ("should verify that if login is successful and moved to 'Inventory' page", () =>{
        loginTest.loginUserName.clearValue()
        loginTest.enterUserNameLoginPage(credentialsData.loginUserNameData)
        assert.equal(credentialsData.loginUserNameData,loginTest.loginUserName.getValue())
        loginTest.loginPassword.clearValue()
        loginTest.enterPasswordLoginPage(credentialsData.loginPasswordData)
        assert.equal(credentialsData.loginPasswordData,loginTest.loginPassword.getValue())
        loginTest.clickLoginBtnLoginPage()
        expect(browser.getUrl()).equals('https://www.saucedemo.com/inventory.html')
        inventoryTest.inventoryPageLogo.waitForDisplayed()
        expect(inventoryTest.inventoryPageLogo.isExisting()).to.be.true
        expect(inventoryTest.inventoryPageLogo.isDisplayed()).to.be.true
        expect(inventoryTest.inventoryPageLogo.isDisplayedInViewport()).to.be.true
    })
})

//*************************************** 'LOGIN PAGE' ACTIONS END *****************************************//

//************************************ 'INVENTORY PAGE' ACTIONS START ***************************************//

describe ("'Inventory' page actions", function(){

    it ("should verify that if 'Logo' is existing, displayed and displayed in viewport in 'Inventory' page", () =>{
        inventoryTest.inventoryPageLogo.waitForDisplayed()
        expect(inventoryTest.inventoryPageLogo.isExisting()).to.be.true
        expect(inventoryTest.inventoryPageLogo.isDisplayed()).to.be.true
        expect(inventoryTest.inventoryPageLogo.isDisplayedInViewport()).to.be.true
    })

    it ("should verify that if 'Sub-header' is existing, displayed and displayed in viewport in 'Inventory' page", () =>{
        inventoryTest.inventorySubheader.waitForDisplayed()
        expect(inventoryTest.inventorySubheader.isExisting()).to.be.true
        expect(inventoryTest.inventorySubheader.isDisplayed()).to.be.true
        expect(inventoryTest.inventorySubheader.isDisplayedInViewport()).to.be.true
        assert.equal('Products',inventoryTest.inventorySubheader.getText())
    })

    it ("should verify that if 'Burger' icon is existing, displayed and displayed in viewport in 'Inventory' page", () =>{
        inventoryTest.inventoryBurgerIcon.waitForDisplayed()
        expect(inventoryTest.inventoryBurgerIcon.isExisting()).to.be.true
        expect(inventoryTest.inventoryBurgerIcon.isDisplayed()).to.be.true
        expect(inventoryTest.inventoryBurgerIcon.isDisplayedInViewport()).to.be.true 
    })

    it ("should verify that if 'Cart' icon is existing, displayed and displayed in viewport in 'Inventory' page", () =>{
        inventoryTest.inventoryCartIcon.waitForDisplayed()
        expect(inventoryTest.inventoryCartIcon.isExisting()).to.be.true
        expect(inventoryTest.inventoryCartIcon.isDisplayed()).to.be.true
        expect(inventoryTest.inventoryCartIcon.isDisplayedInViewport()).to.be.true
    })

    it ("should verify that if 'Dropdown' icon is existing, displayed and displayed in viewport in 'Inventory' page", () =>{
        inventoryTest.inventoryDropDownIcon.waitForDisplayed()
        expect(inventoryTest.inventoryDropDownIcon.isExisting()).to.be.true
        expect(inventoryTest.inventoryDropDownIcon.isDisplayed()).to.be.true
        expect(inventoryTest.inventoryDropDownIcon.isDisplayedInViewport()).to.be.true
    })

    it ("should verify that if Footer' is existing, displayed and displayed in viewport when scrolled down in 'Inventory' page", () =>{
        inventoryTest.inventoryPageFooter.scrollIntoView()
        inventoryTest.inventoryPageFooter.waitForDisplayed()
        expect(inventoryTest.inventoryPageFooter.isExisting()).to.be.true
        expect(inventoryTest.inventoryPageFooter.isDisplayed()).to.be.true
        expect(inventoryTest.inventoryPageFooter.isDisplayedInViewport()).to.be.true
        expect(inventoryTest.inventoryPageFooter.getText()).equals('© 2019 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
    })

    it ("should verify that if 'Burger' icon from 'Inventory' page has been clicked", () =>{
        inventoryTest.clickBurgerIconInventory()
        expect(inventoryTest.returnBurgerIconFirstOptionNameInventory()).equals('All Items')
    })

    it ("should verify that if first item in 'Burger' icon from 'Inventory' page has been clicked", () =>{
        inventoryTest.inventoryBurgerIconFirstOption.waitForDisplayed()
        inventoryTest.clickBurgerIconFirstOptionInventory()
        expect(browser.getUrl()).equals('https://www.saucedemo.com/inventory.html')
    })

    it.skip ("should verify that if the 'Dropdown' icon has been selected from 'Inventory' page", () =>{
        inventoryTest.clickDropDownIconInventory()
        inventoryTest.clickDropDownOptionInventory()
        browser.pause(5000)
    })
    
    it ("should verify that if 'ADD TO CART' button has been clicked for the first item from 'Inventory' page", () =>{
        inventoryTest.inventoryFirstProductAddToCart.waitForDisplayed()
        inventoryTest.clickAddToCartForFirstProductFromInventory()
        assert.equal('REMOVE',inventoryTest.inventoryFirstProductAddToCartTextChange.getText())
        expect(inventoryTest.returnCartValueInventory()).equals('1')
    })

    it ("should verify that if the second item details has been clicked from 'Inventory' page and moved to 'Product details' page", () =>{
        inventoryTest.clickSecondProductDetailsInventory()
        expect(browser.getUrl()).equals('https://www.saucedemo.com/inventory-item.html?id=0')
    })
})

//************************************ 'INVENTORY PAGE' ACTIONS END ****************************************//

//******************************** 'PRODUCT DETAILS' PAGE ACTIONS START *************************************//

describe ("Product details page actions", function(){
    
    
    it ("should verify that if 'Logo' is existing, displayed and displayed in viewport in 'Product Details' page", () =>{
        productDetailsTest.productDetailsPageLogo.waitForDisplayed()
        expect(productDetailsTest.productDetailsPageLogo.isExisting()).to.be.true
        expect(productDetailsTest.productDetailsPageLogo.isDisplayed()).to.be.true
        expect(productDetailsTest.productDetailsPageLogo.isDisplayedInViewport()).to.be.true  
    })

    it ("should verify that if 'Burger' icon is existing, displayed and displayed in viewport in 'Prodcut Details' page", () =>{
        productDetailsTest.productDetailsBurgerIcon.waitForDisplayed()
        expect(productDetailsTest.productDetailsBurgerIcon.isExisting()).to.be.true
        expect(productDetailsTest.productDetailsBurgerIcon.isDisplayed()).to.be.true
        expect(productDetailsTest.productDetailsBurgerIcon.isDisplayedInViewport()).to.be.true  
    })

    it ("should verify that if 'Cart' icon is existing, displayed, displayed in viewport and updated in 'Prodcut Details' page", () =>{
        productDetailsTest.productDetailsCartIcon.waitForDisplayed()
        expect(productDetailsTest.productDetailsCartIcon.isExisting()).to.be.true
        expect(productDetailsTest.productDetailsCartIcon.isDisplayed()).to.be.true
        expect(productDetailsTest.productDetailsCartIcon.isDisplayedInViewport()).to.be.true
        expect(productDetailsTest.productDetailsPageCartValue()).equals('1') 
    })

    it ("should verify that if 'Back' butoton is existing, displayed and displayed in viewport in 'Prodcut Details' page", () =>{
        productDetailsTest.productDetailsBackBtn.waitForDisplayed()
        expect(productDetailsTest.productDetailsBackBtn.isExisting()).to.be.true
        expect(productDetailsTest.productDetailsBackBtn.isDisplayed()).to.be.true
        expect(productDetailsTest.productDetailsBackBtn.isDisplayedInViewport()).to.be.true 
    })

    it ("should verify product name from 'Product Details' page ", () =>{
        productDetailsTest.productDetailsProductName.waitForDisplayed()
        expect(productDetailsTest.productDetailsProductName.isExisting()).to.be.true
        expect(productDetailsTest.productDetailsProductName.isDisplayed()).to.be.true
        expect(productDetailsTest.productDetailsProductName.isDisplayedInViewport()).to.be.true
        expect(productDetailsTest.productDetailsPageGetProductName()).equals('Sauce Labs Bike Light')   
    })

    it ("should verify that if 'ADD TO CART' button is existing, displayed and displayed in viewport in 'Product Details' page", () =>{
        productDetailsTest.productDetailsAddToCart.waitForDisplayed()
        expect(productDetailsTest.productDetailsAddToCart.isExisting()).to.be.true
        expect(productDetailsTest.productDetailsAddToCart.isDisplayed()).to.be.true
        expect(productDetailsTest.productDetailsAddToCart.isDisplayedInViewport()).to.be.true   
    })

    it ("should verify that if clicked on 'ADD TO CART' button from 'Product Details' page", () =>{
        productDetailsTest.addToCartProductFromProductDetailsPage()
        assert.equal('REMOVE',productDetailsTest.productDetailsAddToCartTextChange.getText())
        expect(productDetailsTest.productDetailsPageCartValue()).equals('2')   
    })

    it ("should verify that if 'Back' button has been clicked from 'Product Details' page", () =>{
        productDetailsTest.clickBackButtonFromProductDetails()
        expect(browser.getUrl()).equals('https://www.saucedemo.com/inventory.html')
        expect(inventoryTest.returnCartValueInventory()).equals('2')
    })

    it ("should verify that if 'Cart' icon has been clicked from 'Prodcut Details' page and moved to 'Cart' page", () =>{
        inventoryTest.clickShoppingCartIconInventory()
        expect(browser.getUrl()).equals('https://www.saucedemo.com/cart.html')
    })

})

//******************************** 'PRODUCT DETAILS' PAGE ACTIONS END ****************************************//

//****************************************** 'CART PAGE' ACTIONS START ****************************************//

describe ("'Cart page' actions",function(){

    it ("should verify that if 'Burger' icon is existing, displayed and displayed in viewport in 'Cart' page", () =>{
        cartTest.cartPageBurgerIcon.waitForDisplayed()
        expect(cartTest.cartPageBurgerIcon.isExisting()).to.be.true
        expect(cartTest.cartPageBurgerIcon.isDisplayed()).to.be.true
        expect(cartTest.cartPageBurgerIcon.isDisplayedInViewport()).to.be.true
    })

    it ("should verify that if 'Logo' is existing, displayed and displayed in viewport in 'Cart' page", () =>{
        cartTest.cartPageLogo.waitForDisplayed()
        expect(cartTest.cartPageLogo.isExisting()).to.be.true
        expect(cartTest.cartPageLogo.isDisplayed()).to.be.true
        expect(cartTest.cartPageLogo.isDisplayedInViewport()).to.be.true
    })

    it ("should verify that if 'Cart' icon with updated value is existing, displayed and displayed in viewport in 'Cart' page", () =>{
        cartTest.cartPageCartIcon.waitForDisplayed()
        expect(cartTest.cartPageCartIcon.isExisting()).to.be.true
        expect(cartTest.cartPageCartIcon.isDisplayed()).to.be.true
        expect(cartTest.cartPageCartIcon.isDisplayedInViewport()).to.be.true
        expect(cartTest.returnCartPageCartValue()).equals('2')
    })

    it ("should verify that if 'Sub-header' is existing, displayed and displayed in viewport in 'Cart' page", () =>{

        cartTest.cartPageSubheader.waitForDisplayed()
        expect(cartTest.cartPageSubheader.isExisting()).to.be.true
        expect(cartTest.cartPageSubheader.isDisplayed()).to.be.true
        expect(cartTest.cartPageSubheader.isDisplayedInViewport()).to.be.true
        assert.equal('Your Cart',cartTest.cartPageSubheader.getText())
    })

    it ("should verify that if 'Footer' is existing, displayed and displayed in viewport when scrolled down in 'Cart' page", () =>{
        cartTest.cartPageFooter.scrollIntoView()
        cartTest.cartPageFooter.waitForDisplayed()
        expect(cartTest.cartPageFooter.isExisting()).to.be.true
        expect(cartTest.cartPageFooter.isDisplayed()).to.be.true
        expect(cartTest.cartPageFooter.isDisplayedInViewport()).to.be.true
        expect(cartTest.cartPageFooter.getText()).equals('© 2019 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
    })

    it ("should verify that if the first added item from 'Inventory' is in 'Cart' page", () =>{
        cartTest.cartPageFirstProductName.waitForDisplayed()
        expect(cartTest.cartPageFirstProductName.isExisting()).to.be.true
        expect(cartTest.cartPageFirstProductName.isDisplayed()).to.be.true
        expect(cartTest.returnCartFirstProductName()).equals('Sauce Labs Backpack')
        assert.equal('REMOVE',cartTest.cartPageFirstProductAddCartTextChange.getText())
    })

    it ("should verify that if the second added item from 'Inventory' is in 'Cart' page", () =>{
        cartTest.cartPageSecondProductName.waitForDisplayed()
        expect(cartTest.cartPageSecondProductName.isExisting()).to.be.true
        expect(cartTest.cartPageSecondProductName.isDisplayed()).to.be.true
        expect(cartTest.returnCartSecondProductName()).equals('Sauce Labs Bike Light')
        assert.equal('REMOVE',cartTest.cartPageSecondProductAddCartTextChange.getText())
    })

    it ("should verify that if 'CONTINUE SHOPPING' button is existing, displayed and displayed in viewport in 'Cart' page", () =>{
        cartTest.cartPageContinueShoppingBtn.waitForDisplayed()
        expect(cartTest.cartPageContinueShoppingBtn.isExisting()).to.be.true
        expect(cartTest.cartPageContinueShoppingBtn.isDisplayed()).to.be.true
        expect(cartTest.cartPageContinueShoppingBtn.isDisplayedInViewport()).to.be.true
    })

    it ("should verify that if 'CHECKOUT' button is existing, displayed and displayed in viewport in 'Cart' page", () =>{
        cartTest.cartPageCheckoutBtn.waitForDisplayed()
        expect(cartTest.cartPageCheckoutBtn.isExisting()).to.be.true
        expect(cartTest.cartPageCheckoutBtn.isDisplayed()).to.be.true
        expect(cartTest.cartPageCheckoutBtn.isDisplayedInViewport()).to.be.true
    })

    it ("should verify that if 'CONTINUE SHOPPING' button has been clicked in 'Cart' page", () =>{
        cartTest.clickContinueShoppingBtnCart()
        expect(browser.getUrl()).equals('https://www.saucedemo.com/inventory.html')
    })

    it ("should verify that if 'ADD TO CART' button has been clicked for third product from 'Innventory' page", () =>{ 
        inventoryTest.clickAddToCartForThirdProductFromInventory()
        assert.equal('REMOVE',inventoryTest.inventoryThirdProductAddToCartTextChange.getText())
        expect(inventoryTest.returnCartValueInventory()).equals('3')
    })

    it ("should verify that of 'Cart' icon has been clicked from 'Innventory' page", () =>{

        inventoryTest.clickShoppingCartIconInventory()
        expect(browser.getUrl()).equals('https://www.saucedemo.com/cart.html')
        expect(cartTest.returnCartPageCartValue()).equals('3')
    })

    it ("should verify that the third added item from 'Innventory' page is in 'Cart' page", () =>{
        cartTest.cartPageThirdProductName.waitForDisplayed()
        expect(cartTest.cartPageThirdProductName.isExisting()).to.be.true
        expect(cartTest.cartPageThirdProductName.isDisplayed()).to.be.true
        expect(cartTest.cartPageThirdProductName.isDisplayedInViewport()).to.be.true
        expect(cartTest.returnCartThirdProductName()).equals('Sauce Labs Bolt T-Shirt')
        assert.equal('REMOVE',cartTest.cartPageThirdProductAddCartTextChange.getText())
    })

    it ("should verify that if the third item has been removed from 'Cart' page", () =>{
        cartTest.clickRemoveButtonForThirdProductCart()
        expect(cartTest.returnCartPageCartValue()).equals('2')
        expect(cartTest.cartPageThirdProductName.isExisting()).to.be.false
        expect(cartTest.cartPageThirdProductName.isDisplayed()).to.be.false
        expect(cartTest.cartPageThirdProductName.isDisplayedInViewport()).to.be.false
    })

    it ("should verify that if the 'CHECKOUT' button has been clicked in 'Cart' page and moved to 'Checkout One' page", () =>{
        cartTest.clickCheckoutBtnCart()
        expect(browser.getUrl()).equals('https://www.saucedemo.com/checkout-step-one.html')
    })

})

//****************************************** 'CART PAGE' ACTIONS END ****************************************//

//******************************** 'CHECKOUT ONE' PAGE ACTIONS START ****************************************//

describe ("'Checkout One' page actions",function(){

    it ("should verify that if 'Burger' icon is existing, displayed and displayed in viewport in 'Checkout One' page", () =>{
        checkoutOneTest.checkoutOneBurgerIcon.waitForDisplayed()
        expect(checkoutOneTest.checkoutOneBurgerIcon.isExisting()).to.be.true
        expect(checkoutOneTest.checkoutOneBurgerIcon.isDisplayed()).to.be.true
        expect(checkoutOneTest.checkoutOneBurgerIcon.isDisplayedInViewport()).to.be.true
    })

    it ("should verify that if 'Logo' is existing, displayed and displayed in viewport in 'Checkout One' page", () =>{
        checkoutOneTest.checkoutOneLogo.waitForDisplayed()
        expect(checkoutOneTest.checkoutOneLogo.isExisting()).to.be.true
        expect(checkoutOneTest.checkoutOneLogo.isDisplayed()).to.be.true
        expect(checkoutOneTest.checkoutOneLogo.isDisplayedInViewport()).to.be.true 
    })

    it ("should verify that if 'Cart' icon is existing, displayed, displayed in viewport and updated in 'Checkout One' page", () =>{
        checkoutOneTest.checkoutOneCartIcon.waitForDisplayed()
        expect(checkoutOneTest.checkoutOneCartIcon.isExisting()).to.be.true
        expect(checkoutOneTest.checkoutOneCartIcon.isDisplayed()).to.be.true
        expect(checkoutOneTest.checkoutOneCartIcon.isDisplayedInViewport()).to.be.true
        expect(checkoutOneTest.returnCheckoutOnePageCartValue()).equals('2')
    })

    it ("should verify that if 'Sub-header' is existing, displayed and displayed in viewport in 'Checkout One' page", () =>{
        checkoutOneTest.checkoutOneSubheader.waitForDisplayed()
        expect(checkoutOneTest.checkoutOneSubheader.isExisting()).to.be.true
        expect(checkoutOneTest.checkoutOneSubheader.isDisplayed()).to.be.true
        expect(checkoutOneTest.checkoutOneSubheader.isDisplayedInViewport()).to.be.true
        assert.equal('Checkout: Your Information',checkoutOneTest.checkoutOneSubheader.getText())
    })

    it ("should verify that if 'Footer' is existing, displayed and displayed in viewport when scrolled down in 'Checkout One' page", () =>{
        checkoutOneTest.checkoutOneFooter.scrollIntoView()
        checkoutOneTest.checkoutOneFooter.waitForDisplayed()
        expect(checkoutOneTest.checkoutOneFooter.isExisting()).to.be.true
        expect(checkoutOneTest.checkoutOneFooter.isDisplayed()).to.be.true
        expect(checkoutOneTest.checkoutOneFooter.isDisplayedInViewport()).to.be.true
        expect(checkoutOneTest.checkoutOneFooter.getText()).equals('© 2019 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
    })

    it ("should verify that if 'CANCEL' button is existing, displayed and displayed in viewport in 'Checkout One' page", () =>{
        checkoutOneTest.checkoutOneCancelBtn.waitForDisplayed()
        expect(checkoutOneTest.checkoutOneCancelBtn.isExisting()).to.be.true
        expect(checkoutOneTest.checkoutOneCancelBtn.isDisplayed()).to.be.true
        expect(checkoutOneTest.checkoutOneCancelBtn.isDisplayedInViewport()).to.be.true
    })

    it ("should verify that if 'CONTINUE' button is existing, displayed and displayed in viewport in 'Checkout One' page", () =>{
        checkoutOneTest.checkoutOneContinueBtn.waitForDisplayed()
        expect(checkoutOneTest.checkoutOneContinueBtn.isExisting()).to.be.true
        expect(checkoutOneTest.checkoutOneContinueBtn.isDisplayed()).to.be.true
        expect(checkoutOneTest.checkoutOneContinueBtn.isDisplayedInViewport()).to.be.true
    })

    it ("should verify that if 'CANCEL' button has been clicked in 'Checkout One' page one and 'CHECKOUT' button has been clicked from 'Cart' page and moved to 'Checkout One' page", () =>{
        checkoutOneTest.clickCancelBtnCheckoutOnePage()
        expect(browser.getUrl()).equals('https://www.saucedemo.com/cart.html')
        cartTest.clickCheckoutBtnCart()
        expect(browser.getUrl()).equals('https://www.saucedemo.com/checkout-step-one.html')
    })

    it ("should verify that if warning message is shown when firstname, lastname and postal/zipcode is not available for the 'First Name', 'Last Name' and 'Zip/Postal Code' fields respectively and 'CONTINUE' button has been clicked from 'Checkout One' page", () =>{
        checkoutOneTest.clickContinueBtnCheckoutOnePage()
        checkoutOneTest.checkoutOneWarningText.waitForDisplayed()
        assert.equal('Error: First Name is required',checkoutOneTest.checkoutOneWarningText.getText())
    })

    it ("should verify that if warning message shown when lastname and postal/zipcode is not available for the 'Last Name' and 'Zip/Postal Code' fields respectively and 'CONTINUE' button has been clicked from 'Checkout One' page", () =>{
        checkoutOneTest.enterFirstNameCheckoutOne(credentialsData.checkoutPageFirstNameData)
        assert.equal(credentialsData.checkoutPageFirstNameData,checkoutOneTest.checkoutOneFirstName.getValue())
        checkoutOneTest.clickContinueBtnCheckoutOnePage()
        checkoutOneTest.checkoutOneWarningText.waitForDisplayed()
        assert.equal('Error: Last Name is required',checkoutOneTest.checkoutOneWarningText.getText())
    })

    it ("should verify that if warning message is shown when postal/zipcode is not available for the 'Zip/Postal Code' field and 'CONTINUE' button has been clicked from 'Checkout One' page", () =>{
        checkoutOneTest.enterLastNameCheckoutOne(credentialsData.checkoutPageLastNameData)
        assert.equal(credentialsData.checkoutPageLastNameData,checkoutOneTest.checkoutOneLastName.getValue())
        checkoutOneTest.clickContinueBtnCheckoutOnePage()
        checkoutOneTest.checkoutOneWarningText.waitForDisplayed()
        assert.equal('Error: Postal Code is required',checkoutOneTest.checkoutOneWarningText.getText())
    })

    it ("should verify that if 'CONTINUE' button has been clicked from 'Checkout One' page and moved to 'Checkout Two' page", () =>{
        checkoutOneTest.enterPostalORZipCheckoutOne(credentialsData.checkoutPagePostalOrZipCodeData)
        assert.equal(credentialsData.checkoutPagePostalOrZipCodeData,checkoutOneTest.checkoutOnePostalOrZipCode.getValue())
        checkoutOneTest.clickContinueBtnCheckoutOnePage()
        expect(browser.getUrl()).equals('https://www.saucedemo.com/checkout-step-two.html')
    })

})

//******************************* 'CHECKOUT ONE' PAGE ACTIONS END ****************************************//

//******************************** 'CHECKOUT TWO' PAGE ACTIONS START ****************************************//

describe ("'Checkout Two' page actions",function(){

    it ("should verify that if 'Burger' icon is existing, displayed and displayed in viewport in 'Checkout Two' page", () =>{
        checkoutTwoTest.checkoutTwoBurgerIcon.waitForDisplayed()
        expect(checkoutTwoTest.checkoutTwoBurgerIcon.isExisting()).to.be.true
        expect(checkoutTwoTest.checkoutTwoBurgerIcon.isDisplayed()).to.be.true
        expect(checkoutTwoTest.checkoutTwoBurgerIcon.isDisplayedInViewport()).to.be.true
    })

    it ("should verify that if 'Logo' is existing, displayed and displayed in viewport in 'Checkout Two' page", () =>{
        checkoutTwoTest.checkoutTwoLogo.waitForDisplayed()
        expect(checkoutTwoTest.checkoutTwoLogo.isExisting()).to.be.true
        expect(checkoutTwoTest.checkoutTwoLogo.isDisplayed()).to.be.true
        expect(checkoutTwoTest.checkoutTwoLogo.isDisplayedInViewport()).to.be.true 
    })

    it ("should verify that if 'Cart' icon is existing, displayed, displayed in viewport and updated in 'Checkout Two' page", () =>{
        checkoutTwoTest.checkoutTwoCartIcon.waitForDisplayed()
        expect(checkoutTwoTest.checkoutTwoCartIcon.isExisting()).to.be.true
        expect(checkoutTwoTest.checkoutTwoCartIcon.isDisplayed()).to.be.true
        expect(checkoutTwoTest.checkoutTwoCartIcon.isDisplayedInViewport()).to.be.true
        expect(checkoutTwoTest.returnCheckoutTwoPageCartValue()).equals('2')
    })

    it ("should verify that if 'Sub-header' is existing, displayed and displayed in viewport in 'Checkout Two' page", () =>{
        checkoutTwoTest.checkoutTwoSubheader.waitForDisplayed()
        expect(checkoutTwoTest.checkoutTwoSubheader.isExisting()).to.be.true
        expect(checkoutTwoTest.checkoutTwoSubheader.isDisplayed()).to.be.true
        expect(checkoutTwoTest.checkoutTwoSubheader.isDisplayedInViewport()).to.be.true
        assert.equal('Checkout: Overview',checkoutTwoTest.checkoutTwoSubheader.getText())
    })

    it ("should verify that if 'Footer' is existing, displayed and displayed in viewport when scrolled down in 'Checkout Two' page", () =>{
        checkoutTwoTest.checkoutTwoFooter.scrollIntoView()
        checkoutTwoTest.checkoutTwoFooter.waitForDisplayed()
        expect(checkoutTwoTest.checkoutTwoFooter.isExisting()).to.be.true
        expect(checkoutTwoTest.checkoutTwoFooter.isDisplayed()).to.be.true
        expect(checkoutTwoTest.checkoutTwoFooter.isDisplayedInViewport()).to.be.true
        expect(checkoutTwoTest.checkoutTwoFooter.getText()).equals('© 2019 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
    })

    it ("should verify that if 'CANCEL' button is existing, displayed and displayed in viewport in 'Checkout Two' page", () =>{
        checkoutTwoTest.checkoutTwoCancelBtn.waitForDisplayed()
        expect(checkoutTwoTest.checkoutTwoCancelBtn.isExisting()).to.be.true
        expect(checkoutTwoTest.checkoutTwoCancelBtn.isDisplayed()).to.be.true
        expect(checkoutTwoTest.checkoutTwoCancelBtn.isDisplayedInViewport()).to.be.true
    })

    it ("should verify that if 'FINISH' button is existing, displayed and displayed in viewport in 'Checkout Two' page", () =>{
        checkoutTwoTest.checkoutTwoFinishBtn.waitForDisplayed()
        expect(checkoutTwoTest.checkoutTwoFinishBtn.isExisting()).to.be.true
        expect(checkoutTwoTest.checkoutTwoFinishBtn.isDisplayed()).to.be.true
        expect(checkoutTwoTest.checkoutTwoFinishBtn.isDisplayedInViewport()).to.be.true
    })

    it ("should verify that if the first added item from 'Inventory' is in 'Checkout Two' page", () =>{
        checkoutTwoTest.checkoutTwoFirstProductName.waitForDisplayed()
        expect(checkoutTwoTest.checkoutTwoFirstProductName.isExisting()).to.be.true
        expect(checkoutTwoTest.checkoutTwoFirstProductName.isDisplayed()).to.be.true
        expect(checkoutTwoTest.returnCheckoutTwoFirstProductName()).equals('Sauce Labs Backpack')
    })

    it ("should verify that if the second added item from 'Inventory' is in 'Checkout Two' page", () =>{
        checkoutTwoTest.checkoutTwoSecondProductName.waitForDisplayed()
        expect(checkoutTwoTest.checkoutTwoSecondProductName.isExisting()).to.be.true
        expect(checkoutTwoTest.checkoutTwoSecondProductName.isDisplayed()).to.be.true
        expect(checkoutTwoTest.returnCheckoutTwoSecondProductName()).equals('Sauce Labs Bike Light')
    })

    it ("should verify that if 'Payment Information' is existing and displayed in 'Checkout Two' page", () =>{
        checkoutTwoTest.checkoutTwoPaymentInformation.waitForDisplayed()
        expect(checkoutTwoTest.checkoutTwoPaymentInformation.isExisting()).to.be.true
        expect(checkoutTwoTest.checkoutTwoPaymentInformation.isDisplayed()).to.be.true
        assert.equal('SauceCard #31337',checkoutTwoTest.checkoutTwoPaymentInformation.getText())
    })

    it ("should verify that if 'Shipping Information' is existing and displayed in 'Checkout Two' page", () =>{
        checkoutTwoTest.checkoutTwoShippingInformation.waitForDisplayed()
        expect(checkoutTwoTest.checkoutTwoShippingInformation.isExisting()).to.be.true
        expect(checkoutTwoTest.checkoutTwoShippingInformation.isDisplayed()).to.be.true
        assert.equal('FREE PONY EXPRESS DELIVERY!',checkoutTwoTest.checkoutTwoShippingInformation.getText())
    })

    it ("should verify that if 'Summary Sub-total' is existing, displayed and displayed in viewport in 'Checkout Two' page", () =>{
        checkoutTwoTest.checkoutTwoSummarySubTotal.waitForDisplayed()
        expect(checkoutTwoTest.checkoutTwoSummarySubTotal.isExisting()).to.be.true
        expect(checkoutTwoTest.checkoutTwoSummarySubTotal.isDisplayed()).to.be.true
        expect(checkoutTwoTest.checkoutTwoSummarySubTotal.isDisplayedInViewport()).to.be.true
        assert.equal('Item total: $39.98',checkoutTwoTest.checkoutTwoSummarySubTotal.getText())
    })

    it ("should verify that if 'Summary Tax' is existing, displayed and displayed in viewport in 'Checkout Two' page", () =>{
        checkoutTwoTest.checkoutTwoSummaryTax.waitForDisplayed()
        expect(checkoutTwoTest.checkoutTwoSummaryTax.isExisting()).to.be.true
        expect(checkoutTwoTest.checkoutTwoSummaryTax.isDisplayed()).to.be.true
        expect(checkoutTwoTest.checkoutTwoSummaryTax.isDisplayedInViewport()).to.be.true
        assert.equal('Tax: $3.20',checkoutTwoTest.checkoutTwoSummaryTax.getText())
    })

    it ("should verify that if 'Summary Total' is existing, displayed and displayed in viewport in 'Checkout Two' page", () =>{
        checkoutTwoTest.checkoutTwoSummaryTotal.waitForDisplayed()
        expect(checkoutTwoTest.checkoutTwoSummaryTotal.isExisting()).to.be.true
        expect(checkoutTwoTest.checkoutTwoSummaryTotal.isDisplayed()).to.be.true
        expect(checkoutTwoTest.checkoutTwoSummaryTotal.isDisplayedInViewport()).to.be.true
        assert.equal('Total: $43.18',checkoutTwoTest.checkoutTwoSummaryTotal.getText())
    })

    it("should verify that 'CANCEL' button has been clicked from 'Checkout Two' page and moved to 'Inventory' page",()=>{
        checkoutTwoTest.clickCancelButtnCheckoutTwoPage()
        expect(browser.getUrl()).equals('https://www.saucedemo.com/inventory.html')
    })

    it("should verify that if moved to 'Checkout Two' page",()=>{
        inventoryTest.clickShoppingCartIconInventory()
        expect(browser.getUrl()).equals('https://www.saucedemo.com/cart.html')
        cartTest.clickCheckoutBtnCart()
        expect(browser.getUrl()).equals('https://www.saucedemo.com/checkout-step-one.html')
        checkoutOneTest.enterFirstNameCheckoutOne(credentialsData.checkoutPageFirstNameData)
        assert.equal(credentialsData.checkoutPageFirstNameData,checkoutOneTest.checkoutOneFirstName.getValue())
        checkoutOneTest.enterLastNameCheckoutOne(credentialsData.checkoutPageLastNameData)
        assert.equal(credentialsData.checkoutPageLastNameData,checkoutOneTest.checkoutOneLastName.getValue())
        checkoutOneTest.enterPostalORZipCheckoutOne(credentialsData.checkoutPagePostalOrZipCodeData)
        assert.equal(credentialsData.checkoutPagePostalOrZipCodeData,checkoutOneTest.checkoutOnePostalOrZipCode.getValue())
        checkoutOneTest.clickContinueBtnCheckoutOnePage()
        expect(browser.getUrl()).equals('https://www.saucedemo.com/checkout-step-two.html')
    })

    it("should verify that 'FINISH' button has been clicked from 'Checkout Two' page and moved to 'Checkout Complete' page",()=>{
        checkoutTwoTest.clickFinishButtnCheckoutTwoPage()
        expect(browser.getUrl()).equals('https://www.saucedemo.com/checkout-complete.html')
    })

})

//******************************* 'CHECKOUT TWO' PAGE ACTIONS END ****************************************//

//******************************* 'CHECKOUT COMPLETE' PAGE ACTIONS START ****************************************//

describe ("'Checkout Two' page actions",function(){

    it ("should verify that if 'Burger' icon is existing, displayed and displayed in viewport in 'Checkout Complete' page", () =>{
        checkoutCompleteTest.checkoutCompleteBurgerIcon.waitForDisplayed()
        expect(checkoutCompleteTest.checkoutCompleteBurgerIcon.isExisting()).to.be.true
        expect(checkoutCompleteTest.checkoutCompleteBurgerIcon.isDisplayed()).to.be.true
        expect(checkoutCompleteTest.checkoutCompleteBurgerIcon.isDisplayedInViewport()).to.be.true
    })

    it ("should verify that if 'Logo' is existing, displayed and displayed in viewport in 'Checkout Complete' page", () =>{
        checkoutCompleteTest.checkoutCompleteLogo.waitForDisplayed()
        expect(checkoutCompleteTest.checkoutCompleteLogo.isExisting()).to.be.true
        expect(checkoutCompleteTest.checkoutCompleteLogo.isDisplayed()).to.be.true
        expect(checkoutCompleteTest.checkoutCompleteLogo.isDisplayedInViewport()).to.be.true 
    })

    it ("should verify that if 'Cart' icon is existing, displayed, displayed in viewport and updated in 'Checkout Complete' page", () =>{
        checkoutCompleteTest.checkoutCompleteCartIcon.waitForDisplayed()
        expect(checkoutCompleteTest.checkoutCompleteCartIcon.isExisting()).to.be.true
        expect(checkoutCompleteTest.checkoutCompleteCartIcon.isDisplayed()).to.be.true
        expect(checkoutCompleteTest.checkoutCompleteCartIcon.isDisplayedInViewport()).to.be.true
    })

    it ("should verify that if 'Sub-header' is existing, displayed and displayed in viewport in 'Checkout Complete' page", () =>{
        checkoutCompleteTest.checkoutCompleteSubheader.waitForDisplayed()
        expect(checkoutCompleteTest.checkoutCompleteSubheader.isExisting()).to.be.true
        expect(checkoutCompleteTest.checkoutCompleteSubheader.isDisplayed()).to.be.true
        expect(checkoutCompleteTest.checkoutCompleteSubheader.isDisplayedInViewport()).to.be.true
        assert.equal('Finish',checkoutCompleteTest.checkoutCompleteSubheader.getText())
    })

    it ("should verify that if 'Footer' is existing, displayed and displayed in viewport when scrolled down in 'Checkout Two' page", () =>{
        checkoutCompleteTest.checkoutCompleteFooter.scrollIntoView()
        checkoutCompleteTest.checkoutCompleteFooter.waitForDisplayed()
        expect(checkoutCompleteTest.checkoutCompleteFooter.isExisting()).to.be.true
        expect(checkoutCompleteTest.checkoutCompleteFooter.isDisplayed()).to.be.true
        expect(checkoutCompleteTest.checkoutCompleteFooter.isDisplayedInViewport()).to.be.true
        expect(checkoutCompleteTest.checkoutCompleteFooter.getText()).equals('© 2019 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
    })

    it ("should verify that if 'Thank You Message' is existing, displayed and displayed in viewport when scrolled down in 'Checkout Two' page", () =>{
        checkoutCompleteTest.checkoutCompleteThankYouMessage.scrollIntoView()
        checkoutCompleteTest.checkoutCompleteThankYouMessage.waitForDisplayed()
        expect(checkoutCompleteTest.checkoutCompleteThankYouMessage.isExisting()).to.be.true
        expect(checkoutCompleteTest.checkoutCompleteThankYouMessage.isDisplayed()).to.be.true
        expect(checkoutCompleteTest.checkoutCompleteThankYouMessage.isDisplayedInViewport()).to.be.true
        expect(checkoutCompleteTest.checkoutCompleteThankYouMessage.getText()).equals('THANK YOU FOR YOUR ORDER')
    })

    it ("should verify that if 'Order Detail' is existing, displayed and displayed in viewport when scrolled down in 'Checkout Two' page", () =>{
        checkoutCompleteTest.checkoutCompleteOrderDetail.scrollIntoView()
        checkoutCompleteTest.checkoutCompleteOrderDetail.waitForDisplayed()
        expect(checkoutCompleteTest.checkoutCompleteOrderDetail.isExisting()).to.be.true
        expect(checkoutCompleteTest.checkoutCompleteOrderDetail.isDisplayed()).to.be.true
        expect(checkoutCompleteTest.checkoutCompleteOrderDetail.isDisplayedInViewport()).to.be.true
        expect(checkoutCompleteTest.checkoutCompleteOrderDetail.getText()).equals('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    })

    it ("should verify that if 'Pony Logo' is existing, displayed and displayed in viewport when scrolled down in 'Checkout Two' page", () =>{
        checkoutCompleteTest.checkoutCompletePonyLogo.scrollIntoView()
        checkoutCompleteTest.checkoutCompletePonyLogo.waitForDisplayed()
        expect(checkoutCompleteTest.checkoutCompletePonyLogo.isExisting()).to.be.true
        expect(checkoutCompleteTest.checkoutCompletePonyLogo.isDisplayed()).to.be.true
        expect(checkoutCompleteTest.checkoutCompletePonyLogo.isDisplayedInViewport()).to.be.true
    })

    it ("should verify that if 'Burger' icon from 'Checkout Complete' page has been clicked", () =>{
        checkoutCompleteTest.clickBurgerIconCheckoutComplete()
        expect(checkoutCompleteTest.returnBurgerIconThirdOptionCheckoutComplete()).equals('Logout')
    })

    it ("should verify that if the third item in 'Burger' icon from 'Checkout Complete' page has been clicked", () =>{
        checkoutCompleteTest.checkoutCompleteBurgerIconThirdOption.waitForDisplayed()
        checkoutCompleteTest.clickBurgerIconThirdOptionCheckoutComplete()
        expect(browser.getUrl()).equals('https://www.saucedemo.com/index.html')
    })

})


//******************************* 'CHECKOUT CPMPLETE' PAGE ACTIONS END ****************************************//