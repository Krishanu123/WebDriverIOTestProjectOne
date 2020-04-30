class CheckoutOne {

    get checkoutOneLogo() { return $(".app_logo")}
    get checkoutOneBurgerIcon() { return $(".bm-burger-button")}
    get checkoutOneCartIcon() { return $("#shopping_cart_container a")}
    get checkoutOneCartIconUpdated() {return $(".shopping_cart_badge")}
    get checkoutOneSubheader() { return $(".subheader")}
    get checkoutOneFooter() { return $(".footer_copy")}
    get checkoutOneCancelBtn() { return $(".cart_cancel_link")}
    get checkoutOneContinueBtn() { return $(".cart_button")}
    get checkoutOneWarningText() { return $("h3")}
    get checkoutOneFirstName() { return $("#first-name")}
    get checkoutOneLastName() { return $("#last-name")}
    get checkoutOnePostalOrZipCode() { return $("#postal-code")}

    /**
     * This function returns the value of the 'Cart' icon from 'Checkout One' page
     */
    returnCheckoutOnePageCartValue() {
        this.checkoutOneCartIconUpdated.waitForDisplayed()
        return this.checkoutOneCartIconUpdated.getText()
    }

    /**
     * This function will click on the 'CONTINUE' button from 'Checkout One' page
     */
    clickContinueBtnCheckoutOnePage() {
        this.checkoutOneContinueBtn.waitForDisplayed()
        this.checkoutOneContinueBtn.click()
        
    }

    /**
     * This function will click on the 'CANCEL' button from 'Checkout One' page 
     */
    clickCancelBtnCheckoutOnePage() {
        this.checkoutOneCancelBtn.waitForDisplayed()
        this.checkoutOneCancelBtn.click()
        
    }
    
    /**
     * This function will click on the 'CONTINUE' button from 'Checkout One' page
     */
    warningTextCheckoutOnePage() {
        this.checkoutOneWarningText.waitForDisplayed()
        return this.checkoutOneWarningText.getValue()
    }

    /**
    * This function enters first name in 'Checkout One' page for the 'First Name' field
    * @param {string} text text to be entered as first name
    */
    enterFirstNameCheckoutOne(text) {
        this.checkoutOneFirstName.waitForDisplayed()
        this.checkoutOneFirstName.addValue(text)
    }

    /**
    * This function enters last name in 'Checkout One' page for the 'Last Name' field
    * @param {string} text text to be entered as first name
    */
   enterLastNameCheckoutOne(text) {
    this.checkoutOneLastName.waitForDisplayed()
    this.checkoutOneLastName.addValue(text)
    }

    /**
    * This function enters postal name or zip code in 'Checkout One' page for the 'Zip/Postal Code' field
    * @param {string} text text to be entered as first name
    */
   enterPostalORZipCheckoutOne(text) {
    this.checkoutOnePostalOrZipCode.waitForDisplayed()
    this.checkoutOnePostalOrZipCode.addValue(text)
    }

}

module.exports = new CheckoutOne()