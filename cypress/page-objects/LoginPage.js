import BasePage from "./BasePage"

class LoginPage extends BasePage {
  
  loginFormIsVisible() {
    cy.get('#login_form').should('be.visible')
  }

  displayErrorMessage() {
    cy.get('.alert-error').as('Error_Message')
    cy.get('@Error_Message').should('be.visible')
  }

  clickForgotPasswordLink() {
    cy.contains('Forgot your password ?').click()
  }
}
  
export default LoginPage