class HistoryTransactions {
    selectorList(){
        const selectors = {
            historyButton: '[data-test="nav-personal-tab"]',
            containTrainsaction: '[data-test="transaction-item-e1iMrgVWp"]',
            noTransactionMessage: "[data-test='empty-list-header']",
        }
        return selectors
    }

    containTransaction(){
        cy.get(this.selectorList().historyButton).click(),
        cy.get(this.selectorList().containTrainsaction).should('be.visible')
    }

    noContainTransaction(){
        cy.get(this.selectorList().historyButton).click(),
        cy.get(this.selectorList().noTransactionMessage).should('be.visible')
    }

}

export default HistoryTransactions