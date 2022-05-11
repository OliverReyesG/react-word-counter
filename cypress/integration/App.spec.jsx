const baseURL = "http://localhost:3000/react-word-counter/"
describe('Tests accuracy counting characters, words, sentences and paragraphs', () => {
  it('Is able to write on the textbox', () => {
    cy.visit(baseURL)
    cy.findByRole('textbox', {name: /write your text here/i}).should('exist')
    cy.findByRole('textbox', {name: /write your text here/i}).type("This is a sample text.")
  })
  
  it('Is able to count characters', () => {
    const charText = "Something."
    cy.visit(baseURL)
    cy.findByRole('textbox', {name: /write your text here/i}).type(charText)
    cy.findByTestId('char-count').should('have.text', 'Characters: ' + charText.length)
  })
  
  it('Is able to count words', () => {
    const words = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"]
    const wordsText = words.join(", ")
    cy.visit(baseURL)
    cy.findByRole('textbox', {name: /write your text here/i}).type(wordsText)
    cy.findByTestId('word-count').should('have.text', 'Words: ' + words.length)
  })
  
  it('Is able to count sentences', () => {
    const sentences = ["This is the first sentence", "This is the second sentence", "This is the third sentence.", "This is the fourth sentence."]
    const sentencesText = sentences.join(". ")
    cy.visit(baseURL)
    cy.findByRole('textbox', {name: /write your text here/i}).type(sentencesText)
    cy.findByTestId('sentence-count').should('have.text', 'Sentences: ' + sentences.length)
  })
  
  it('Is able to count paragraphs', () => {
    const paragraphs = ["This is the first paragraph", "This is the second paragraph", "This is the third paragraph."]
    const paragraphsText = paragraphs.join(".\n")
    cy.visit(baseURL)
    cy.findByRole('textbox', {name: /write your text here/i}).type(paragraphsText)
    cy.findByTestId('paragraph-count').should('have.text', 'Paragraphs: ' + paragraphs.length)
  })
})