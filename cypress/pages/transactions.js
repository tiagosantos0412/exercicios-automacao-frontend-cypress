class Transactions {
    selectorsList(){
        const selectors = {
            startNewTransaction: "[data-testid='AttachMoneyIcon']",
            selectContact: "[data-test='user-list-item-uBmeaz5pX']",
            amount: "[name='amount']",
            description: "[name='description']",
            request: "[data-test='transaction-create-submit-request']",
            payment: "[data-test='transaction-create-submit-payment']",
            returnToTransactions: "[data-test='new-transaction-return-to-transactions']",
            createAnotherTransaction: "[data-test='new-transaction-create-another-transaction']",
        }
        return selectors
    }
}

export default Transactions