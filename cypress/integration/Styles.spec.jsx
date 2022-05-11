const baseURL = "http://localhost:3000/react-word-counter/"
describe('Test the ability to switch between themes', () => {
    it('Uses dark theme by default', () => {
        cy.visit(baseURL)
        cy.get('body').should('have.css', 'background-color', 'rgb(18, 18, 18)')
    })
      
    it('Can switch to light theme', () => {
        cy.findByTestId('theme-toggle').click()
        cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
    })
    
    it('Can switch back to dark theme', () => {
        cy.findByTestId('theme-toggle').click()
        cy.get('body').should('have.css', 'background-color', 'rgb(18, 18, 18)')
    })
})