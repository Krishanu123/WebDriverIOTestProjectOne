class Inventory {

    get inventoryPageLogo() { return $(".app_logo")}
    get inventoryBurgerIcon() { return $(".bm-burger-button")}
    get inventoryBurgerIconFirstOption() { return $(".bm-item-list #inventory_sidebar_link")}
    get inventoryCartIcon() { return $("#shopping_cart_container a")}
    get inventorySubheader() { return $(".product_label")}
    get inventoryDropDownIcon() { return $(".product_sort_container")}
    get inventoryDropDownOption() { return $(".product_sort_container option:nth-child(1)")}
    get inventoryPageFooter() { return $(".footer_copy")}
    get inventoryFirstProductAddToCart() { return $(".inventory_list .inventory_item:nth-child(1) .btn_primary")}
    get inventoryFirstProductAddToCartTextChange() { return $(".inventory_list .inventory_item:nth-child(1) .btn_secondary")}
    get inventorySecondProduct() {return $(".inventory_list .inventory_item:nth-child(2) a .inventory_item_name")}
    get inventoryThirdProductAddToCart() { return $(".inventory_list .inventory_item:nth-child(3) .btn_primary")}
    get inventoryThirdProductAddToCartTextChange() { return $(".inventory_list .inventory_item:nth-child(3) .btn_secondary")}
    get cartIconUpdatedInventory() {return $(".shopping_cart_badge")}

    /**
     * This function clicks on the 'Burger' icon from 'Inventory' page
     */
    clickBurgerIconInventory(){
        this.inventoryBurgerIcon.waitForDisplayed()
        this.inventoryBurgerIcon.click()
    }

    /**
     * This function clicks on the first item of the 'Burger' icon from 'Inventory' page
     */
    clickBurgerIconFirstOptionInventory(){
        this.inventoryBurgerIconFirstOption.waitForDisplayed(3000)
        this.inventoryBurgerIconFirstOption.click()
    }

    /**
     * This function returns the name of the first item of the 'Burger' icon from 'Inventory' page
     */
    returnBurgerIconFirstOptionNameInventory(){
        return this.inventoryBurgerIconFirstOption.getText()
    }

    /**
     * This function clicks on the 'Dropdown' icon from 'Inventory' page
     */
    /*clickDropDownIconInventory() {
        this.inventoryDropDownIcon.waitForDisplayed()
        this.inventoryDropDownIcon.getValue()
       // this.inventoryDropDownIcon.moveTo()  
        this.inventoryDropDownIcon.click()
    }*

    /**
     * This function clicks on the second element from the 'Dropdown' icon from 'Inventory' page
     */
    /*clickDropDownOptionInventory() {
        this.inventoryDropDownOption.waitForDisplayed()  
        this.inventoryDropDownOption.moveTo()  
        this.inventoryDropDownOption.click()        
    }*/

    /**
     * This function clicks on the 'ADD TO CART' button for the first product from 'Inventory' page
     */
    clickAddToCartForFirstProductFromInventory() {
        this.inventoryFirstProductAddToCart.waitForDisplayed()
        this.inventoryFirstProductAddToCart.click() 
    }
    
    /**
     * This function clicks on the second product from 'Inventory' page
     */
    clickSecondProductDetailsInventory(){
        this.inventorySecondProduct.waitForDisplayed()
        this.inventorySecondProduct.click()
    }

    /**
     * This function clicks on the 'ADD TO CART' button for the third product from 'Inventory' page
     */
    clickAddToCartForThirdProductFromInventory() {
        this.inventoryThirdProductAddToCart.waitForDisplayed()
        this.inventoryThirdProductAddToCart.click()
    }

    /**
     * This function clicks on the 'Cart' icon from 'Inventory' page
     */
    clickShoppingCartIconInventory() {
        this.inventoryCartIcon.click() 
    }

    /**
     * This function returns the 'Cart' icon's updated value from 'Inventory' page
     */
    returnCartValueInventory() {
        this.cartIconUpdatedInventory.waitForDisplayed()
        return this.cartIconUpdatedInventory.getText()
    }

}

module.exports = new Inventory()