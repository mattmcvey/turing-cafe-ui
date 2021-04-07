describe('Reservations Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200,
      body: [{
          "id": 1,
          "name": "Christie",
          "date": "12/29",
          "time": "7:00",
          "number": 12
      },
      {
          "id": 2,
          "name": "Leta",
          "date": "4/5",
          "time": "7:00",
          "number": 2
      },
      {
          "id": 3,
          "name": "Pam",
          "date": "1/21",
          "time": "6:00",
          "number": 4
      }]
    })
    cy.visit('http://localhost:3000')
  })
  it('should have a title of Turing Cafe Reservations', () => {
    cy.contains('Turing Cafe Reservations')
  })
  it('should display cards from API on load', () => {
    cy.contains('Christie')
    cy.contains('Leta')
    cy.contains('Pam')
  })
  it('should contain text input fields', () => {
    cy.get('input').first().type('Matt').next().type('11/22').next().type('7').next().type('12')
  })
  it('should be able to submit text inputs', () => {
    cy.get('input').first().type('Matt').next().type('11/22').next().type('7').next().type('12').get('button').first().click()
  })
  it('should display newly submitted reservation', () => {
    cy.get('input').first().type('Matt').next().type('11/22').next().type('7').next().type('12').get('button').first().click().get('.card').last().contains('Matt')
  })
})
