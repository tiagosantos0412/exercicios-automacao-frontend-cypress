import userData from '../fixtures/users/user-data.json'
import Login from '../pages/login'
import Transactions from '../pages/transactions'

const login = new Login()
const transaction = new Transactions()
//Load Chance
const Chance = require('chance')
//Instanciate Chance
var chance = new Chance()

const infoTransaction = {
    amount: chance.floating({min: 0, max: 100, fixed: 2}), 
    description: chance.word()
}

describe('realworld-app Tests',()=>{
  it('New Transaction Payment', ()=>{
    login.loginWithAnyUser(
       userData.transactionUser.userName,
       userData.transactionUser.password 
    )
    
  })
})