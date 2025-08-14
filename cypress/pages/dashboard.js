class Dashboard {
    selectorList(){
        const selectors = {
            dashboardGrid: "[data-test='sidenav-user-balance']",
        }
        return selectors
    }
    checkDashboardPage(){
        cy.get(this.selectorList().dashboardGrid).should('be.visible')
    }
}
export default Dashboard