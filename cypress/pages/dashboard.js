class Dashboard {
    selectorList(){
        const selectors = {
            dashboardGrid: '.MuiPaper-elevation1',
        }
        return selectors
    }
    checkDashboardPage(){
        cy.get(this.selectorList().dashboardGrid)
    }
}
export default Dashboard