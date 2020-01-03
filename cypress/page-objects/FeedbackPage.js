import BasePage from "./BasePage"

class FeedbackPage extends BasePage {
  
  visit() {
    cy.visit('http://zero.webappsecurity.com/')
  }

  feedbackFormIsVisible() {
    cy.get('#feedback-title').should('be.visible')
    cy.get('form').should('be.visible')      
  }

  fillFeedbackForm(name, email, subject, comments) {
    cy.get('#name').type(name)
    cy.get('#email').type(email)
    cy.get('#subject').type(subject)
    cy.get('#comment').type(comments)
  }

  submitFeedbackForm() {
    cy.contains('Send Message').click()
  }

  showSuccessMessage() {
    cy.get('#feedback-title').should('be.visible')
  }


}
  
export default FeedbackPage