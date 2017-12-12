describe('My First Test', function() {
  it('Visits the ICGL QA application page', function() {
    cy.visit('http://172.16.1.4/')
	
	cy.get('input[name=emailid]').type('mritunjay.sinha@oxanepartners.com')
	cy.get('input[name=password]').type('Oxane@123{enter}')
	
	//cy.get('input[name=emailid]').type('borrower.oxane@oxanepartners.com')
	//cy.get('input[name=password]').type('Oxane@123{enter}')
	
	cy.url().should('include', '/dashboard')
    cy.get('h1').should('contain', 'Borrower')
	//cy.get('.login-button').click()
	//cy.get('.blotter-active').shadowRoot.get('Office Property 2').click()
	
  })
})
