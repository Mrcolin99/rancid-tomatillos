describe('single movie page', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
    }, { fixture: 'movies' })
    cy.visit('localhost:3000/')
  })

  it('should navigate to single movie ', () => {
    cy.get(':nth-child(1) > a > .moviePoster').click()
    cy.intercept({
      method: 'GET',
      url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919'
    }, { fixture: 'singleMovie' })
    cy.get('.movieDetails')
    cy.get('.detailsContainer')
      .contains('Average')
  })

  it('should be able to return to the home page', () => {
    cy.get('.homeLink').click()
    cy.get(':nth-child(1) > a > .moviePoster')
  })
})
