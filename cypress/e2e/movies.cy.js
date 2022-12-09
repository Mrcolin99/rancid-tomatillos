describe('home page', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
    }, { fixture: 'movies' })
    cy.visit('localhost:3000/')
  })

  it('should display movies', () => {
    cy.get(':nth-child(1) > a > .moviePoster')
    cy.get(':nth-child(2) > a > .moviePoster')
  })

  it('should navigate to single movie, and back home', () => {
    cy.get(':nth-child(1) > a > .moviePoster').click()
    cy.get('.homeLink').click()
  })


  it('should throw 500 error', () => {
    cy.intercept(
      'GET',
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {statusCode: 404}
    )
  })
})
