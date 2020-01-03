import BasePage from "./BasePage"

class ForgottenPasswordPage extends BasePage {

    forgotPasswordIsVisible() {
        cy.get('#send_password_form').should('be.visible')
        cy.url().should('include', 'forgot-password.html')
    }

    fillEmail() {
        cy.get('#user_email').type('email@email.com')
        cy.contains('Send Password').click()
    }

    showSuccessMessage() {
        cy.get('h3').contains('Forgotten Password')
        cy.url().should('include', 'forgotten-password-send.html')
    }
}

export default ForgottenPasswordPage