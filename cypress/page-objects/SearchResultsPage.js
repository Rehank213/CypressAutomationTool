
class SearchResultsPage {
      
  searchResults() {
    cy.get('h2').contains('Search Results:') 
  }
}
  
export default SearchResultsPage