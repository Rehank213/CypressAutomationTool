import HomePage from '../../page-objects/HomePage'
import TopNavbar from '../../page-objects/components/TopNavbar'
import tabs from '../../page-objects/components/Tabs'
import LoginPage from '../../page-objects/LoginPage'
import ForgottenPasswordPage from '../../page-objects/ForgottenPassword'


describe('Login Test', () => {
    const homePage = new HomePage()
    const topNavbar = new TopNavbar()
    const loginPage = new LoginPage()
    const forgottenPasswordPage = new ForgottenPasswordPage()
    
    before(function() {
        homePage.visit()
    })
 
    it('should display login form', function() {
        topNavbar.clickOnSignin()
        loginPage.loginFormIsVisible()
    })
 
    it('should display forgotten password form', function() {
        loginPage.clickForgotPasswordLink()
        forgottenPasswordPage.forgotPasswordIsVisible()
    })
 
    it('should submit forgotten password form', function() {
        forgottenPasswordPage.fillEmail()
    })
 
    it('should display success message', function() {
        forgottenPasswordPage.showSuccessMessage()
    })
})