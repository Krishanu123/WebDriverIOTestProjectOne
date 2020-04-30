class ProductDetails{

    get productDetailsPageLogo() { return $(".header_label")}
    get productDetailsBurgerIcon() { return $(".bm-burger-button")}
    get productDetailsCartIcon() { return $("#shopping_cart_container a")}
    get productDetailsCartIconUpdated() {return $(".shopping_cart_badge")}
    get productDetailsBackBtn() {return $(".inventory_details_back_button")}
    get productDetailsProductName() {return $(".inventory_details_name")}
    get productDetailsAddToCart() {return $(".btn_primary ")}
    get productDetailsAddToCartTextChange() { return $(".btn_secondary")}

    /**
     * This function returns the cart value from 'Product Details' page
     */
    productDetailsPageCartValue() {
        this.productDetailsCartIconUpdated.waitForDisplayed()
        return this.productDetailsCartIconUpdated.getText()
    }

    /**
     * This function returns the product name from 'Product Details' page
     */
    productDetailsPageGetProductName(){
        this.productDetailsProductName.waitForDisplayed()
        return this.productDetailsProductName.getText()
    }

    /**
     * This function clicks on 'ADD TO CART' button from 'Product Details' page
     */
    addToCartProductFromProductDetailsPage(){
        this.productDetailsAddToCart.waitForDisplayed()
        this.productDetailsAddToCart.click()
    }

    /**
     * This function clicks on 'Back' button from 'Product Details' page
     */
    clickBackButtonFromProductDetails(){
        this.productDetailsBackBtn.click()

    }
    
}

module.exports = new ProductDetails()