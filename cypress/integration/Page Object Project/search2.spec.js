import HomePage from '../../page-objects/HomePage'
import SearchResultsPage from '../../page-objects/SearchResultsPage'
import TopNavbar from '../../page-objects/components/TopNavbar'

describe('Searchbox Test', ()=> {
  const homePage = new HomePage()
  const topNavbar = new TopNavbar()
  const searchResultsPage = new SearchResultsPage()

  before(function() {
    homePage.visit()
  })
    
  it('Should search for keywork via search box', function() {
    topNavbar.search('bank {enter}')
  })
  
  it('should display search results', function() {
    searchResultsPage.searchResults()
  })
  
  it('should display home page again', function() {
    cy.go('back')
    cy.title().should('eq', 'Zero - Personal Banking - Loans - Credit Cards')
  })
})