class CheckoutComplete{

    get checkoutCompleteLogo() { return $(".app_logo")}
    get checkoutCompleteBurgerIcon() { return $(".bm-burger-button")}
    get checkoutCompleteBurgerIconThirdOption() { return $(".bm-item-list #logout_sidebar_link")}
    get checkoutCompleteCartIcon() { return $("#shopping_cart_container a")}
    get checkoutCompleteSubheader() { return $(".subheader")}
    get checkoutCompleteFooter() { return $(".footer_copy")}
    get checkoutCompleteThankYouMessage() { return $(".complete-header")}
    get checkoutCompleteOrderDetail() { return $(".complete-text")}
    get checkoutCompletePonyLogo() { return $(".pony_express")}
    

    /**
     * This function clicks on the 'Burger' icon from 'Inventory' page
     */
    clickBurgerIconCheckoutComplete(){
        this.checkoutCompleteBurgerIcon.waitForDisplayed()
        this.checkoutCompleteBurgerIcon.click()
    }

    /**
     * This function returns the name of the third item of the 'Burger' icon from 'Checkout Complete' page
     */
    returnBurgerIconThirdOptionCheckoutComplete(){
        return this.checkoutCompleteBurgerIconThirdOption.getText()
    }

    /**
     * This function clicks on the third item of the 'Burger' icon from 'Checkout Complete' page
     */
    clickBurgerIconThirdOptionCheckoutComplete(){
        this.checkoutCompleteBurgerIconThirdOption.waitForDisplayed()
        this.checkoutCompleteBurgerIconThirdOption.click()
    }

}

module.exports = new CheckoutComplete()