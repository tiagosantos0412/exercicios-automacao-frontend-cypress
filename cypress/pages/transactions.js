class Transactions {
    selectorsList(){
        const selectors = {
            userBalance: "[data-test='sidenav-user-balance']",
            startNewTransaction: "[data-test='nav-top-new-transaction']",
            selectContact: "[data-test='user-list-item-oO4QNxnN9']",
            amount: "[name='amount']",
            description: "[name='description']",
            request: "[data-test='transaction-create-submit-request']",
            payment: "[data-test='transaction-create-submit-payment']",
            returnToTransactions: "[data-test='new-transaction-return-to-transactions']",
            createAnotherTransaction: "[data-test='new-transaction-create-another-transaction']",
            confirmTransaction: "[data-test='sidenav']",
        }
        return selectors
    }

    checkPositiveBalance(){
        if(this.selectorsList().userBalance > 0){
            return true
        }
    }

    executeNewTransactionPayment(amount, description){
        cy.get(this.selectorsList().startNewTransaction).click()
        cy.get(this.selectorsList().selectContact).click()
        cy.get(this.selectorsList().amount).clear().type(amount)
        cy.get(this.selectorsList().description).clear().type(description)
        cy.get(this.selectorsList().payment).click()
        cy.get(this.selectorsList().confirmTransaction).should('be.visible')
    }

    executeNewTransactionRequest(amount, description){
        cy.get(this.selectorsList().startNewTransaction).click()
        cy.get(this.selectorsList().selectContact).click()
        cy.get(this.selectorsList().amount).clear().type(amount)
        cy.get(this.selectorsList().description).clear().type(description)
        cy.get(this.selectorsList().request).click()
        cy.get(this.selectorsList().confirmTransaction).should('be.visible')
    }
}

export default Transactions