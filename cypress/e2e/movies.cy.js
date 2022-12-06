describe('home page', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
    })
    cy.visit('localhost:3000/')
  })

  it('should display movies', () => {
    cy.get('.movieContainer')
    .children(':nth-child(1)')
    .children('div')
    .children('.moviePoster')
  })

  it('should navigate to single movie, and back home', () => {
    cy.get(':nth-child(1) > div > .moviePoster').click()
    cy.get('.movieDetails')
    cy.get('.title').click()
  })

  it('should throw 500 error', () => {
    cy.intercept(
      'GET',
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {statusCode: 500}
    )
  })
})
