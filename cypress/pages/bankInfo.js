class BankInfo{
    selectorsList(){
        const selectors = {
            bankName: "[name='bankName']",
            routingNumber: "[name='routingNumber']",
            accountNumber: "[name='accountNumber']",
            saveBankAccount: '.BankAccountForm-submit',
            doneButton: "[data-test='user-onboarding-next']",
        }
        return selectors
    }

    editBanckInfo(bankName, routingNumber, accountNumber){
        cy.get(this.selectorsList().bankName).clear().type(bankName)
        cy.get(this.selectorsList().routingNumber).clear().type(routingNumber)
        cy.get(this.selectorsList().accountNumber).clear().type(accountNumber)    
        cy.get(this.selectorsList().saveBankAccount).click()    
        cy.get(this.selectorsList().doneButton).click()    
    }
}

export default BankInfo