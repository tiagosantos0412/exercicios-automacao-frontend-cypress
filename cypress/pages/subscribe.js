class Subscribe {
    selectorsList(){
        const selectors = {
            firstName: "[name='firstName']",
            lastName: "[name='lastName']",
            userName: "[name='userName']",
            password: "[name='password']",
            confirmPassword: "[name='confirmPassword']",
            submitForm: '.SignUpForm-form',
            bankName: "[name='bankName']",
            routingNumber: "[name='routingNumber']",
            accountNumber: "[name='accountNumber']",
            saveBankAccount: '.BankAccountForm-submit',
        }
        return selectors
    }

    accessSubscribe(){
        cy.visit('signup')
    }

    subscribeUser(firstName, lastName, userName, password){
        cy.get(this.selectorsList().firstName).clear().type(firstName)
        cy.get(this.selectorsList().lastName).clear().type(lastName)
        cy.get(this.selectorsList().userName).clear().type(userName)
        cy.get(this.selectorsList().password).clear().type(password)
        cy.get(this.selectorsList().confirmPassword).clear().type(password)
        cy.get(this.selectorsList().submitForm).click()
    }
}
export default Subscribe