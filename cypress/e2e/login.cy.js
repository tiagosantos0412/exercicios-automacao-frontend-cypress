import userData from '../fixtures/users/user-data.json'
import Login from '../pages/login'
import Dashboard from '../pages/dashboard'
import { log } from 'async'

const login = new Login()
const dashboard = new Dashboard()

describe('realworld-app Tests', ()=>{
  it('Login Success', ()=>{
    login.accesLogin()
    login.loginWithAnyUser(
      userData.userSuccess.userName, 
      userData.userSuccess.password
    )
    dashboard.checkDashboardPage()
  })
  it('Login Fail', ()=>{
    login.accesLogin()
    login.loginWithWrongUser(
      userData.userFail.userName, 
      userData.userFail.password
    )
  })
})