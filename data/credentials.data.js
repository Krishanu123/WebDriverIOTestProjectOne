 let credentials = {
    loginUserNameData: 'standard_user_test',
    loginPasswordData: 'secret_sauce_test',
    checkoutPageFirstNameData: 'userOneFirstName',
    checkoutPageLastNameData: 'userOneLastName',
    checkoutPagePostalOrZipCodeData : '123'
}

if (process.env.ENV === 'mainline') {
    credentials = {
            loginUserNameData: 'standard_user',
            loginPasswordData: 'secret_sauce',
            checkoutPageFirstNameData: 'userOneFirstName',
            checkoutPageLastNameData: 'userOneLastName',
            checkoutPagePostalOrZipCodeData : '123'
    }
}

else if (process.env.ENV === 'dev') {
    credentials = {
            loginUserNameData: 'performance_glitch_user',
            loginPasswordData: 'secret_sauce',
            checkoutPageFirstNameData: 'userOneFirstName',
            checkoutPageLastNameData: 'userOneLastName',
            checkoutPagePostalOrZipCodeData : '123'
    }
}

module.exports = credentials