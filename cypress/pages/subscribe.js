class Subscribe {
    selectorsList(){
        const selectors = {
            firstName: "[name='firstName']",
            lastName: "[name='lastName']",
            userName: "[name='username']",
            password: "[name='password']",
            confirmPassword: "[name='confirmPassword']",
            submitForm: ('[data-test="signup-submit"]'),
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