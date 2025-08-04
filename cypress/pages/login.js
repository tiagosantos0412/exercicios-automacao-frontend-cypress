class Login {
    selectorsList(){
        const selectors = {
            userName: '[name=username]',
            password: '[name=password]',
            loginButton: '[type=submit]',
            wrongAlert: '.MuiAlert-standardError',
        }
        return selectors
    }

    accesLogin(){
        cy.visit('signin')
    }

    loginWithAnyUser(userName, password){
        cy.get(this.selectorsList().userName).type(userName)
        cy.get(this.selectorsList().password).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    loginWithWrongUser(userName, password){
        cy.get(this.selectorsList().userName).type(userName)
        cy.get(this.selectorsList().password).type(password)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().wrongAlert)
    }
}

export default Login