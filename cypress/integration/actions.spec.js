describe('Actions Test', () => {
  before(function() {
    //
  })

  after(function(){
    //
  })

  beforeEach(function() {
    cy.visit('https://devexpress.github.io/testcafe/example/')
    //
  })

  afterEach(function() {
   // 
  })

  it('submit developer name', function() {
    // cy.get('#developer-name').type('Rehan')
    // cy.get('#submit-button').scrollIntoView().click()
    cy.submitDeveloper('Aliza')

    cy.get('.result-content').should('be.visible')
    cy.get('h1').contains('Aliza')
    cy.url().should('include', 'thank-you')
  })

  it('should enable slider', function() {
    cy.get('#slider').as('slider')
    cy.get('@slider').should('have.class', 'ui-state-disabled')
    cy.get('#tried-test-cafe').scrollIntoView().click()
    cy.get('@slider').should('not.have.class', 'ui-state-disabled')
    cy.get('@slider').should('have.class', 'ui-widget-content')
  })

  it('should have empty value by default', function() {
    cy.get('#comments').as('Textarea')
    cy.get('#tried-test-cafe').scrollIntoView().click()

    cy.get('@Textarea').should('have.value', '')
    cy.get('@Textarea').should('have.be.empty')
    cy.get('@Textarea').type('New value for testing')
    cy.get('@Textarea').should('have.value', 'New value for testing')
    


  })
})