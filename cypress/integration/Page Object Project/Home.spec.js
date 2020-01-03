import HomePage from '../../page-objects/HomePage'

describe('BasePage test', () => {
  it('HomePage should work', function() {
	const homePage = new HomePage()
    homePage.visit()
    homePage.pause(3000)
    homePage.caraouselIsVisible()
    //testing for branch in Git

  })

})