
describe('Using after each method', () => {
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

  after(() => {
    cy.log('Test suite finished')
  })
})

describe('Using after each method', () => {
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
  
  afterEach(() => {
    cy.log('Test case finished')
  })
})



