describe('Navbar Test', ()=> {
  
    before('', function() {
      cy.visit('http://zero.webappsecurity.com/')
      cy.url().should('include', 'http://zero.webappsecurity.com/')
      cy.title().should('eq', 'Zero - Personal Banking - Loans - Credit Cards')
    })

    it('should display feedback form', function() {
        cy.get('#feedback').as('Link_Feedback')
    
        cy.get('@Link_Feedback').click()
        cy.get('form').should('be.visible')   
      })

    it('should submit feedback from', function() {
      //cy.get('#name').type('Rehan Khan')
      cy.xpath('//*[@id="name"]').type('Rehan Khann')

      cy.get('#email').type('rkhan1222@yopmail.com')
      cy.get('#subject').type('Testing')
      cy.get('#comment').type('Comments for Testing')
      cy.contains('Send Message').click()
    })

    it('should submit form successfully', function() {
        cy.get('#feedback-title').should('be.visible')
    })       

})