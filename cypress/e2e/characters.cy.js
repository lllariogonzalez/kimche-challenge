const APP_URL = 'http://localhost:5173/'

describe('Rick and Morty', () => {
  beforeEach(() => {
    cy.visit(APP_URL)
  })

  it('user can view characters', () => {
    cy.get('.card').should('have.length', 20)
    cy.contains('Rick Sanchez')
    cy.contains('Morty Smith')
    cy.contains('Annie')
    cy.contains('Page 1')
    cy.contains('826 characters')
  })

  it('user can go to next and prev page characters', () => {
    cy.contains('Next').click()
    cy.contains('Aqua Morty')
    cy.contains('Page 2')
    cy.get('button').should('have.length', 4)
    cy.contains('Prev').click()
    cy.contains('Page 1')
    cy.contains('826 characters')
  })

  it('user can search Rick Sanchez character', () => {
    cy.get('input').type('Rick Sanchez')
    cy.get('.card').should('have.length', 4)
    cy.contains('Page 1 / 1')
    cy.contains('4 characters')
  })

  it('user can not found Mario', () => {
    cy.get('input').type('Mario')
    cy.contains('Character not found')
  })

  it('user can view details Rick Sanchez character', () => {
    cy.get('.card').first().click()
    cy.get('[alt="Portal Rick and Morty"]')
    cy.contains('Species: Human')
    cy.contains('Location: Citadel of Ricks')
    cy.contains('Origin: Earth (C-137)')
    cy.contains('Dimension: Dimension C-137')
    cy.get('[alt="Rick Sanchez"]').should('have.length', 2)
  })

  it('user can view filters characters and reset filters', () => {
    cy.get('select[name="status"]').select('Unknown')
    cy.contains('Abradolf Lincler')
    cy.contains('Fleeb')
    cy.contains('Page 1 / 5')
    cy.contains('100 characters')
    cy.get('select[name="species"]').select('Robot')
    cy.contains('Robot Rick')
    cy.contains('Page 1 / 1')
    cy.contains('9 characters')
    cy.get('select[name="gender"]').select('Genderless')
    cy.contains('Robot Snake')
    cy.contains('Gotron')
    cy.contains('Page 1 / 1')
    cy.contains('2 characters')
    cy.contains('Unknown')
    cy.contains('Robot')
    cy.contains('Genderless')
    cy.get('[aria-label="Reset filters"]').click()
    cy.contains('826 characters')
    cy.contains('Page 1 / 42')
  })
})
