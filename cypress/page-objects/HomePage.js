import BasePage from "./BasePage"
import { baseurl } from '../fixtures/config'

class HomePage extends BasePage {
  
  visit() {
    cy.visit(baseurl)
  }

  caraouselIsVisible() {
    cy.get('#carousel').should('be.visible')
  }

  clickOnHome() {
    cy.get('#homeMenu').click()
  }

  clickOnOnlineBanking() {
    cy.get('#onlineBankingMenu').click()
  }

  clickOnFeedback() {
    cy.get('#feedback').click()
  }


}
  
export default HomePage