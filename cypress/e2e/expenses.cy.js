
describe('Expenses', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Open form and add a new expense',()=>{

    cy.contains('Add new Expense').click()
    cy.get('input[type="text"]') .type('expense')
    cy.get('input[type="number"]').type('22.7')
    cy.get('input[type="date"]') .type('2023-01-19')
    cy.contains('Add Expense').click()
  })

  it('Add another expense to 2024 and filter expenses by 2024',()=>{

    cy.contains('Add new Expense').click()
    cy.get('input[type="text"]') .type('expense 2')
    cy.get('input[type="number"]').type('23')
    cy.get('input[type="date"]') .type('2024-05-19')
    cy.contains('Add Expense').click()
    cy.get('select').select('2024')
  })

  it('Check if cancel button works', ()=> {

    cy.contains('Add new Expense').click()
    cy.contains('Cancel').click()
  });
})