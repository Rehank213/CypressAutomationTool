import HomePage from '../../page-objects/HomePage'
import TopNavbar from '../../page-objects/components/TopNavbar'
import Tabs from '../../page-objects/components/Tabs'
import LoginPage from '../../page-objects/LoginPage'
import { username, password} from '../../fixtures/config'

describe('Login Failed Test', () => {
    const homePage = new HomePage()
    const topNavbar = new TopNavbar()
    const loginPage = new LoginPage()
    const tabs = new Tabs()

    before(function() {
        homePage.visit()
    })
 
    it('should display login form', function() {
        topNavbar.clickOnSignin()
        loginPage.loginFormIsVisible()
    })
 
    it('should login to application', function() {
        cy.loginToApp('rkhan', '123456')
    })
 
    it('should display error message', function() {
        loginPage.displayErrorMessage()
    })

    it('should login to application', function() {
        cy.loginToApp(username, password)
    })
 
    it('should display navbar Links after login', function() {
      tabs.diplayNavbarLinks()
    })

    it('should logout from application', function() {
      topNavbar.clickonLogout()
      homePage.caraouselIsVisible()
      


        
    })
})