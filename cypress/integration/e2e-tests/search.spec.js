describe('Searchbox Test', ()=> {
  
  before('', function() {
    cy.visit('http://zero.webappsecurity.com/')
    cy.url().should('include', 'http://zero.webappsecurity.com/')
    cy.title().should('eq', 'Zero - Personal Banking - Loans - Credit Cards')
  })

  it('Should search for keywork via search box', function() {
    cy.get('#searchTerm').as('searchbox')

    cy.get('@searchbox').type('bank {enter}')
    cy.url().should('include', 'search.html') 
  })

  it('should display search results', function() {
    cy.get('h2').contains('Search Results:') 
  })

  it('should display home page again', function() {
    cy.go('back')
    cy.title().should('eq', 'Zero - Personal Banking - Loans - Credit Cards')
  })
})