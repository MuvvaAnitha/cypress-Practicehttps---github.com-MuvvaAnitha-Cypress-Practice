/// <reference types="Cypress" />

describe('DemoQA Website', () => {
    it('Launch sites',()=>{
      cy.visit('https://demoqa.com/automation-practice-form')
    })

})

describe('Student Registration Form', () => {
  it('Interacting with text fields',()=>{
    cy.get('#firstName').type('Anitha').should('have.value','Anitha')  
    cy.get('#lastName').type('Muvva').should('have.value','Muvva')
  }) 
  
  it('Interacting with Email field',()=>{
  cy.get('#userEmail').type('Test@gmail.com').should('have.value','Test@gmail.com')  
  }) 

  it('Interacting with radio button',()=>{
    cy.get('#genterWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').click()
  })
  
  it('Interacting with Mobile field',()=>{
  cy.get('#userNumber').type('1234567898').should('have.value','1234567898') 
  })
  
  it('Interacting with Datepicker ', ()=>{ 
    cy.get('#dateOfBirthInput')
    .click()
    .get('.react-datepicker__day--011')
    .click()
    cy.get('#dateOfBirthInput')
    .should('have.value', '11 Nov 2022')
 })

    it('Interacting with Subjects field',()=>{
      cy.get(".subjects-auto-complete__value-container").type('english{enter}')  
      })
    
    
    it('Interacting with checkboxes',()=>{
      cy.get("#hobbies-checkbox-2").click()
      cy.get('#hobbies-checkbox-1').click()
    }) 

    
    it('Interacting with Address text filed',()=>{
      cy.get('#currentAddress').type('Galaxy by Aurobindo Realty 3rd Floor, South Wing, Aurobindo Galaxy Survey Number No. 83/1, TSIIC Raidurg, Hyderabad, Telangana 500081')
    })
    
    it('Interacting with Dropdown State and city',()=>{
      cy.get("#state").click()
        cy.contains("div","NCR").click()

  })
     
    it('Interacting with Dropdown State and city',()=>{
      cy.get("#city").click()
        cy.contains('uttarpradesh').click()
    })


    it('Interacting with Submit Button',()=>{
      cy.get('#submit').click({force:true})
    }) 
    
})

    
    
    
   



  