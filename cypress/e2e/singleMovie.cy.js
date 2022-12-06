describe('single movie page', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
    })
    cy.visit('localhost:3000/')
    })
    it('should navigate to single movie', () => {
      cy.get(':nth-child(1) > div > .moviePoster').click()
      cy.get('.movieDetails')
      .contains('Average')
    })
})
