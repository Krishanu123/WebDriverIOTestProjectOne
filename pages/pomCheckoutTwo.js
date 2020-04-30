class CheckoutTwo{

    get checkoutTwoLogo() { return $(".app_logo")}
    get checkoutTwoBurgerIcon() { return $(".bm-burger-button")}
    get checkoutTwoCartIcon() { return $("#shopping_cart_container a")}
    get checkoutTwoCartIconUpdated() {return $(".shopping_cart_badge")}
    get checkoutTwoSubheader() { return $(".subheader")}
    get checkoutTwoFooter() { return $(".footer_copy")}
    get checkoutTwoCancelBtn() { return $(".cart_cancel_link")}
    get checkoutTwoFinishBtn() { return $(".cart_button")}
    get checkoutTwoFirstProductName() { return $(".cart_list .cart_item:nth-child(3) .inventory_item_name")}
    get checkoutTwoSecondProductName() { return $(".cart_list .cart_item:nth-child(4) .inventory_item_name")}
    get checkoutTwoPaymentInformation() { return $(".summary_info .summary_value_label:nth-child(2)")}
    get checkoutTwoShippingInformation() { return $(".summary_info .summary_value_label:nth-child(4)")}
    get checkoutTwoSummarySubTotal() { return $(".summary_subtotal_label")}
    get checkoutTwoSummaryTax() { return $(".summary_tax_label")}
    get checkoutTwoSummaryTotal() { return $(".summary_total_label")}

    /**
     * This function returns the value of the 'Cart' icon from 'Checkout Two' page
     */
    returnCheckoutTwoPageCartValue() {
        this.checkoutTwoCartIconUpdated.waitForDisplayed()
        return this.checkoutTwoCartIconUpdated.getText()
    }

    /**
     * This function returns the name of the first product from 'Checkout Two' page 
     */
    returnCheckoutTwoFirstProductName(){
        this.checkoutTwoFirstProductName.waitForDisplayed()
        return this.checkoutTwoFirstProductName.getText()
    }

    /**
     * This function returns the name of the second product from 'Checkout Two' page 
     */
    returnCheckoutTwoSecondProductName(){
        this.checkoutTwoSecondProductName.waitForDisplayed()
        return this.checkoutTwoSecondProductName.getText()
    }

   /**
     * This function clicks on the 'CANCEL' button from 'Checkout Two' page 
     */
    clickCancelButtnCheckoutTwoPage(){
        this.checkoutTwoCancelBtn.waitForDisplayed()
        this.checkoutTwoCancelBtn.click()

    }
       /**
     * This function clicks on the 'FINISH' button from 'Checkout Two' page 
     */
    clickFinishButtnCheckoutTwoPage(){
        this.checkoutTwoFinishBtn.waitForDisplayed()
        this.checkoutTwoFinishBtn.click()

    }

}

module.exports = new CheckoutTwo()