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
  paymentAmount: chance.floating({ min: 10, max: 1000, fixed: 2 }),
  paymentDescription: chance.word(),
  rquestAmount: chance.floating({ min: -50000, max: 0, fixed: 2 }),
  requestDescription: chance.word()
}

describe('realworld-app Tests', ()=>{
  it.only('Transaction Payment', ()=>{
    login.accesLogin()
    login.loginWithAnyUser(
      userData.transactionUser.userName, 
      userData.transactionUser.password
    )
    dashboard.checkDashboardPage()
    transaction.executeNewTransactionPayment(
      transactionInfo.paymentAmount,
      transactionInfo.paymentDescription
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
      transactionInfo.paymentAmount,
      transactionInfo.paymentDescription
    )
  })
})