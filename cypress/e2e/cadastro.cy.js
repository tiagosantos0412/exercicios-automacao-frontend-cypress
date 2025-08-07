import userData from '../fixtures/users/user-data.json'
import Subscribe from '../pages/subscribe'
import Login from '../pages/login'
import BankInfo from '../pages/bankInfo'

const subscribe = new Subscribe()
const login = new Login()
const bankInfo = new BankInfo()
//Load Chance
const Chance = require('chance')
//Instanciate Chance
var chance = new Chance()

const password = 'user@000'

const signupData = {
  firstName: chance.first(),
  lastName: chance.last(),
  userName: `user_${chance.integer({ min: 1, max: 200 })}`,
  password, // Sintaxe shorthand ES6 - equivale a password: password
  confirmPassword: password
}

const bankInfoUpdate = {
  bankName: chance.company(),
  routingNumber: chance.string({length: 9, alpha: false, numeric: true}),
  accountNumber: chance.string({length: 9, alpha: false, numeric: true}),
}

describe('realworld-app Tests', ()=>{
  it('New user subscribe - Success', ()=>{
    subscribe.accessSubscribe()
    subscribe.subscribeUser(
      signupData.firstName,
      signupData.lastName,
      signupData.userName,
      signupData.password,
      signupData.confirmPassword
    )
    //login.accesLogin()
    login.loginWithAnyUser(
      signupData.userName,
      signupData.password
    )
    bankInfo.editBanckInfo(
      bankInfoUpdate.bankName,
      bankInfoUpdate.routingNumber,
      bankInfoUpdate.accountNumber
    )
  })
})

describe('realworld-app Tests',()=>{
  it('New user subscribe - Fail', ()=>{
    subscribe.accessSubscribe()
    subscribe.subscribeUser(
      userData.subscribeFail.firstName,
      userData.subscribeFail.lasName,
      userData.subscribeFail.userName,
      userData.subscribeFail.password,
      userData.subscribeFail.confirmPassword
    )
  })
})