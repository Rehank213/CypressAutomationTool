import HomePage from '../../page-objects/HomePage'
import FeedbackPage from '../../page-objects/FeedbackPage'
import { name, email, subject, comments} from '../../fixtures/feedback-data'

describe('Feedback Test', ()=> {
    const homePage = new HomePage()
    const feedbackPage = new FeedbackPage() 
    
    before(function() {
        homePage.visit()
    })

    it('should display feedback form', function() {
        homePage.clickOnFeedback()
        feedbackPage.feedbackFormIsVisible()
    })

    it('should submit feedback from', function() {
      feedbackPage.fillFeedbackForm(name, email, subject, comments)
      feedbackPage.submitFeedbackForm()
    })

    it('should submit form successfully', function() {
        feedbackPage.showSuccessMessage()
    })       

})