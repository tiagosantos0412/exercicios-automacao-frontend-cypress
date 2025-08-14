import userData from '../fixtures/users/user-data.json'
import Login from '../pages/login'
import Dashboard from '../pages/dashboard'
import Transactions from '../pages/transactions'

const login = new Login()
const dashboard = new Dashboard()
const transaction = new Transactions()

//Load Chance
const Chance = require('chance')
//Instanciate Chance
var chance = new Chance()

const transactionInfo = {
  requestAmount: chance.floating({ min: -25000, max: 0, fixed: 2 }),
  paymentAmount: chance.floating({ min: -10, max: 25000, fixed: 2 }),
  description: chance.word()
}

describe('realworld-app Tests', ()=>{
  it('Transaction Payment', ()=>{
    login.accesLogin()
    login.loginWithAnyUser(
      userData.transactionUser.userName, 
      userData.transactionUser.password
    )
    dashboard.checkDashboardPage()
    transaction.executeNewTransactionPayment(
      transactionInfo.paymentAmount,
      transactionInfo.description
    )
  })
    it('Transaction Request', ()=>{
    login.accesLogin()
    login.loginWithAnyUser(
      userData.transactionUser.userName, 
      userData.transactionUser.password
    )
    dashboard.checkDashboardPage()
    transaction.executeNewTransactionRequest(
      transactionInfo.requestAmount,
      transactionInfo.description
    )
  })
})