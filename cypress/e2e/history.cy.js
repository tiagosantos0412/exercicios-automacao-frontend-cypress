import userData from '../fixtures/users/user-data.json'
import Login from '../pages/login'
import HistoryTransactions from '../pages/history'
import Dashboard from '../pages/dashboard'

const login = new Login()
const history = new  HistoryTransactions()
const dashboard = new Dashboard()

describe('realworld-app Tests', ()=>{
    it('Contain History Transactions', ()=>{
        login.accesLogin()
        login.loginWithAnyUser(
            userData.userSuccess.userName,
            userData.userSuccess.password
        )
        dashboard.checkDashboardPage()
        history.containTransaction()
    })
    it('No Contain History Transactions', ()=>{
        login.accesLogin()
        login.loginWithAnyUser(
            userData.historyUserFail.userName,
            userData.historyUserFail.password
        )
        dashboard.checkDashboardPage()
        history.noContainTransaction()
    })
})
