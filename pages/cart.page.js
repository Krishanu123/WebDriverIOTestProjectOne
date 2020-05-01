class Cart {

    get cartPageLogo() { return $(".app_logo")}
    get cartPageBurgerIcon() { return $(".bm-burger-button")}
    get cartPageCartIcon() { return $("#shopping_cart_container a")}
    get cartPageCartIconUpdated() {return $(".shopping_cart_badge")}
    get cartPageSubheader() { return $(".subheader")}
    get cartPageFooter() { return $(".footer_copy")}
    get cartPageFirstProductName() { return $(".cart_list .cart_item:nth-child(3) .inventory_item_name")}
    get cartPageFirstProductAddCartTextChange() {return $(".cart_list .cart_item:nth-child(3) .btn_secondary")}
    get cartPageSecondProductName() { return $(".cart_list .cart_item:nth-child(4) .inventory_item_name")}
    get cartPageSecondProductAddCartTextChange() {return $(".cart_list .cart_item:nth-child(4) .btn_secondary")}
    get cartPageThirdProductName() { return $(".cart_list .cart_item:nth-child(5) .inventory_item_name")}
    get cartPageThirdProductAddCartTextChange() {return $(".cart_list .cart_item:nth-child(5) .btn_secondary")}
    get cartPageContinueShoppingBtn() { return $(".cart_footer .btn_secondary")}
    get cartPageCheckoutBtn() {return $(".cart_footer .btn_action")}

    /**
     * This function returns the value of the 'Cart' icon from 'Cart' page 
     */
    returnCartPageCartValue() {
        this.cartPageCartIconUpdated.waitForDisplayed()
        return this.cartPageCartIconUpdated.getText()
    }
    
    /**
     * This function returns the name of the first product from 'Cart' page 
     */
    returnCartFirstProductName(){
        this.cartPageFirstProductName.waitForDisplayed()
        return this.cartPageFirstProductName.getText()
    }

    /**
     * This function returns the name of the second product from 'Cart' page 
     */
    returnCartSecondProductName(){
        this.cartPageSecondProductName.waitForDisplayed()
        return this.cartPageSecondProductName.getText()
    }

    /**
     * This function returns the name of the third product from 'Cart' page 
     */
    returnCartThirdProductName(){
        this.cartPageThirdProductName.waitForDisplayed()
        return this.cartPageThirdProductName.getText()
    }

    /**
     * This function clicks on the 'CONTINUE SHOPPING' buttion from 'Cart' page 
     */
    clickContinueShoppingBtnCart(){
        this.cartPageContinueShoppingBtn.click()
    }

    /**
     * This function clicks on the 'REMOVE' buttion for the third product from 'Cart' page 
     */
    clickRemoveButtonForThirdProductCart(){
        this.cartPageThirdProductAddCartTextChange.waitForDisplayed()
        this.cartPageThirdProductAddCartTextChange.click()
    }

    /**
     * This function clicks on the 'CHECKOUT' buttion for the third product from 'Cart' page
     */
    clickCheckoutBtnCart(){
        this.cartPageCheckoutBtn.waitForDisplayed()
        this.cartPageCheckoutBtn.click()
    }

}

module.exports = new Cart()