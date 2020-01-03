describe('Navbar Test', ()=> {
  
  before('', function() {
    cy.visit('http://zero.webappsecurity.com/')
    cy.url().should('include', 'http://zero.webappsecurity.com/')
    cy.title().should('eq', 'Zero - Personal Banking - Loans - Credit Cards')
  })

  it('should display Online Banking content', function() {
    cy.get('#onlineBankingMenu').as('Link_OnLineBanking')

    cy.get('@Link_OnLineBanking').click()
    cy.get('h1').contains('Online Banking')
    cy.get('#online_banking_features').should('be.visible')
  })

  it('should display Feedback content', function() {
    cy.get('#feedback').as('Link_Feedback')

    cy.get('@Link_Feedback').click()
    cy.get('h3').contains('Feedback')      
  })
  
  it('should display home page again', function() {
    cy.get('.brand').click()
    cy.title().should('eq', 'Zero - Personal Banking - Loans - Credit Cards')

  })

})