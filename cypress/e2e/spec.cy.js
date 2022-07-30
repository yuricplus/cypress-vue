describe('Create card', () => {
  let textMock;

  beforeEach(() => {
    cy.fixture('example.json').then(value => {
      textMock = value.text;
    })
  })

  it('passes on load', () => {
    cy.visit('http://localhost:8080')
  })

  it('should write text in input', () => {
    cy.get('input').type(textMock, {
      force: true
    })
  })

  it('should create a card with name', () => {
    cy.get('button').click();
    cy.get('.card span').should(($card) => {
      const text = $card[0].innerText;

      expect(text).equal(textMock)
    })
  })

  it('shoul get error with input empty', () => {
    cy.get('.btn-add').click({
      force: true
    });

    cy.get('.error-msg').should(($error) => {
      const msg = $error[0].innerText;

      expect(msg).equal('Please, set text');
    })
  })

  it('should remove an card', () => {
    cy.get('.btn-remove').click();
    cy.get('.card').should(($card) => {
      expect($card.length).equal(0)
    })
  })
})
