describe('Should be open at Browser', () => {
  it('sucessfully opens', () => {
    cy.visit('/')
  })

  it('Writing a repo name', () => {
    cy.get('[data-testid="input"]')
      .type('wanderhungerbuhler')
  })

  it('Clicking a button for searh a repo name', () => {
    cy.get('[data-testid="button"]')
      .contains('Pesquisar')
      .click()
  })

  it('Clicking a link for a new search', () => {
    cy.get('a')
      .contains('Fazer outra pesquisa')
      .click()
  })
})
