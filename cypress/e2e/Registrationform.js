
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
describe('DemoAutomation Website', () => {
    
    it('Registration form',()=>{
        //cy.viewport(1920,1280);
        cy.viewport(1024,768);
      cy.visit('https://demo.automationtesting.in/Register.html')
          
             //===============TestBox Code============//

          // FirstName and Last Name Address and phone Number //
      cy.get("[ng-model='FirstName']").type('Anitha').should('have.value','Anitha') 
      cy.get("[ng-model='LastName']").type('Muvva').should('have.value','Muvva') 
      cy.get("[ng-model='Adress']").type('Hyderabad')
      cy.get("[ng-model='EmailAdress']").type('Test@gmail.com')
      cy.get("[ng-model='Phone']").type('1234567898')

                      //===============RadioButton Code============//
      
      // cy.get("[value='FeMale']").click({force:true})
      cy.get("[value='FeMale']").check("FeMale")

                      //=============Checkbox Code============//
    
      //cy.get('#checkbox2').click({force:true}) 
      cy.get('#checkbox2').check("Movies")
      cy.get('#checkbox3').check("Hockey")
      cy.get('#checkbox1').check("Cricket")
      cy.get('#checkbox3').uncheck("Hockey")
      //cy.get('#checkbox3').click({force:true}) 
     cy.pause()
      
                //=========Multi select Dropdown Code========//

     
       cy.get('#msdd').click({force:true})        
      cy.get('.ui-autocomplete-multiselect ui-state-default ui-widget').click()
       cy.get('.tooltip').click({force:true})
      cy.get('multi-select').click()
      cy.get('.ng-scope').contains('Arabic').select()
      cy.get('ui-corner-all').contains('Arabic').select()
      cy.get("//a[contains(text(),'Arabic')]").select()
      cy.get('#msdd').select(['Arabic', 'Bulgarian']).invoke('val').should('deep.equal', ['Arabic', 'Bulgarian'])
 

    
    //==============DropDown Code===========//
    
    cy.get("[ng-model='Skill']").eq(0)
    .select('Adobe InDesign').should('have.value', 'Adobe InDesign')
    cy.get("//select[@id='Skills']").eq(0).select("Adobe InDesign")
   
    
    cy.get("[ng-model='yearbox']").click()
    cy.get("//option[contains(text(),'1916')]").select('1916')
    cy.get('.select2-selection__arrow').click()
    cy.get('#select2-country-container').select('Australia').should('have.value', 'Australia')


    cy.get("[ng-model='Password']").type('123456')
    cy.get("[ng-model='CPassword']").type('123456') 
    cy.get('#submitbtn').click()
    cy.get("[type='button']").click()
      //cy.pause()
    })

  })