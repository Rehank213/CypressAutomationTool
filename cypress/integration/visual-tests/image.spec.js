describe('My first visual regression test', () => {
  before(function() {
      cy.visit('http://example.com/')
  })

  it('should load home apge', function() {
    cy.url().should('include', 'example.com')
  })

  it('should take page snapshot', function() {
    cy.matchImageSnapshot()

  })
})