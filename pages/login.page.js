class Login {

    get loginPageLogo() {return $(".login_logo")}
    get loginPageAppIcon() {return $(".bot_column")}
    get loginPageWarningMessage() {return $(".login-box")}
    get loginUserName() {return $("#user-name")}
    get loginPassword() {return $("#password")}
    get loginBtn() {return $(".btn_action")}

    /**
     * This function enters username in the 'Username' field from 'Login' page 
     * @param {string} text text to be entered as username
     */
    enterUserNameLoginPage(text) {
        this.loginUserName.waitForDisplayed()
        this.loginUserName.addValue(text)
    }

    /**
     * This function enters password in the 'Password' field from 'Login' page
     *  @param {string} text text to be entered as password
     */
    enterPasswordLoginPage(text){
        this.loginPassword.waitForDisplayed()
        this.loginPassword.addValue(text)
    }

    /**
     * This function clicks on the 'Login' button from 'Login' page
     */
    clickLoginBtnLoginPage(){
        this.loginBtn.waitForDisplayed()
        this.loginBtn.click()
    }

    /**
     * This function gets the warning message text from 'Login' page
     */
    warningTextLoginPage(){
        return this.loginPageWarningMessage.getText()
    }

}

module.exports = new Login()
