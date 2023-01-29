describe('Using before method', () => {
  before(() => {
 cy.visit('https://google.com/');
})

  it('Test1', () => {
    cy.get('.gLFyf').type('bbjb');
  })

  it('Test2', () => {
    cy.visit('https://google.com/');
    cy.get('.gLFyf').type('bbjb');
  })

  it('Test3', () => {
    cy.visit('https://google.com/');
    cy.get('.gLFyf').type('bbjb');
  })

  it('Test4', () => {
    cy.visit('https://google.com/');
    cy.get('.gLFyf').type('bbjb');
  })
})

describe('Using before each method', () => {
  beforeEach(() => {
 cy.visit('https://google.com/');
})

  it('Test1', () => {
    cy.get('.gLFyf').type('bbjb');
  })

  it('Test2', () => {
    cy.get('.gLFyf').type('bbjb');
  })

  it('Test3', () => {
    cy.get('.gLFyf').type('bbjb');
  })

  it('Test4', () => {
    cy.get('.gLFyf').type('bbjb');
  })
})




