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
  amount: chance.floating({ min: 10, max: 1000, fixed: 2 }),
  description: chance.word()
}

describe('realworld-app Tests', ()=>{
  it('Login Success', ()=>{
    login.accesLogin()
    login.loginWithAnyUser(
      userData.transactionUser.userName, 
      userData.transactionUser.password
    )
    dashboard.checkDashboardPage()
    transaction.executeNewTransactionPayment(
      transactionInfo.amount,
      transactionInfo.description
    )
  })
})