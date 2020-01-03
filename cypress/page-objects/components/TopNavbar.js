
class TopNavbar {
  search() {
    cy.get('#searchTerm').as('searchbox')
  
    cy.get('@searchbox').type('bank {enter}')
    cy.url().should('include', 'search.html') 
  }

  clickOnSignin() {
    cy.get('#signin_button').click()
  }

  clickonLogout() {
    cy.get('.icon-user').click()
    cy.get('#logout_link').click()
  }

}

export default TopNavbar