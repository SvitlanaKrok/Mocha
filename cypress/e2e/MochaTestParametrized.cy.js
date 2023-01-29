///<reference types="cypress"/>

describe('Parametrized tests', () => {
describe('First option', () => {
const paramTest = ({testData, expectedResult}) =>
      function () {    
        cy.visit('https://google.com/');
        cy.get('.gLFyf').type(`${testData}`);
        cy.get('.gLFyf').should("contain.value", `${expectedResult}`);
      }


    it('search data', paramTest({testData: 1, expectedResult: 1}))
    it('search data', paramTest({testData: 2, expectedResult: 2}))
    it('search data', paramTest({testData: 3, expectedResult: 3}))
    it('search data', paramTest({testData: 'Cypress', expectedResult: 'Cypress'}))
    })


describe('Second option', () => {
  const data = [
      {testData: 1, expectedResult: 1},
      {testData: 2, expectedResult: 2},
      {testData: 3, expectedResult: 3},
      {testData: 'Cypress', expectedResult: 'Cypress'}
    ]
  
    data.forEach(({testData, expectedResult}) => {
      it(`search date  ${testData}`, () => {
        cy.visit('https://google.com/');
        cy.get('.gLFyf').type(`${testData}`);
        cy.get('.gLFyf').should("contain.value", `${expectedResult}`);
      })
    })
})
})
  