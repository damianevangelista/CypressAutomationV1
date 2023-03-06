/// <reference types="cypress" />
class LoginRegisterUserPage{
    
    //Register Elements
    static GetSingUpLabel(SingUpLabel){
        cy.get('.signup-form > h2')
        .should('be.visible')
        .should('have.value',SingUpLabel);
    }
    static GetRegisterName(Name){
        cy.get('[data-qa="signup-name"]').type(`${Name}`)
        .should('have.value',Name);
    }
    static GetRegisterEmail(Email){
        cy.get("input[data-qa='signup-email']").type(`${Email}`)
        .should('have.value',Email);
    }
    static GetRegisterSingUpButton(){
        cy.get("button[data-qa='signup-button']").click()
        .should("be.visible");
    }
    static GetRegisterLabel(Text){
        cy.get(':nth-child(1) > b')
        .should("have.text",Text)
    }
    static GetMrTitle(MrTitle){
        cy.get('#id_gender1').check()
        .should("be.checked")
        .and("have.value",MrTitle);
    }
    static GetPassword(Password){
        cy.get('[data-qa="password"]').type(`${Password}`)
        .should('have.value',Password);
    }
    static GetDateDay(DateDay){
        cy.get('[data-qa="days"]')
        .select(`${DateDay}`)
        .should('have.value', DateDay);
    }
    static GetDateMonth(DateMonth,DateValue){
        cy.get('[data-qa="months"]')
        .select(`${DateMonth}`)
        .should('have.value', DateValue);
    }
    static GetDateYear(DateYear){
        cy.get('[data-qa="years"]')
        .select(`${DateYear}`)
        .should('have.value', DateYear);
    }
    static GetNewLetter(Letter){
        cy.get('#newsletter').check()
        .should("be.checked");
        ///.and("have.text",Letter);
    }
    static GetSpecialOffer(Option){
        cy.get('#optin').check()
        .should("be.checked");
       //.and("have.value",Option);
    }
    static GetAddressInf(AddressInf){
        cy.get('form > .title > b')
        .should('have.text', AddressInf)
    }
    static GetFirstName(FirstName){
        cy.get('[data-qa="first_name"]').type(`${FirstName}`)
        .should('have.value', FirstName);
    }
    static GetLastName(LastName){
        cy.get('[data-qa="last_name"]').type(`${LastName}`)
        .should('have.value', LastName);
    }
    static GetCompany(Company){
        cy.get('[data-qa="company"]').type(`${Company}`)
        .should('have.value', Company);
    }
    static GetAddress(Address){
        cy.get('[data-qa="address"]').type(`${Address}`)
        .should('have.value', Address);
    }
    static GetAddress2(Address2){
        cy.get('[data-qa="address2"]').type(`${Address2}`)
        .should('have.value', Address2);
    }
    static GetCountry(Country){
        cy.get('[data-qa="country"]')
        .select(`${Country}`)
        .should('have.value', Country);
    }
    static GetState(State){
        cy.get('[data-qa="state"]').type(`${State}`)
        .should('have.value', State);
    }
    static GetCity(City){
        cy.get('[data-qa="city"]').type(`${City}`)
        .should('have.value', City);
    }
    static GetZipCode(ZipCode){
        cy.get('[data-qa="zipcode"]').type(`${ZipCode}`)
        .should('have.value', ZipCode);
    }
    static GetMobilNumber(MobilNumber){
        cy.get('[data-qa="mobile_number"]').type(`${MobilNumber}`)
        .should('have.value', MobilNumber);
    }
    static GetCreateAccountButton(){
        cy.get('[data-qa="create-account"]')
        .should('be.visible')
        .click()
    }

    //Login Elemets
    static GetLoginLabel(LoginLabel){
        cy.get('.login-form > h2')
        .should('be.visible')
        .should('contain.text',LoginLabel);
    }
    static GetLoginEmail(LoginEmail){
        cy.get('[data-qa="login-email"]').type(`${LoginEmail}`)
        .should('have.value',LoginEmail);
    }
    static GetLoginPassword(LoginPassword){
        cy.get('[data-qa="login-password"]').type(`${LoginPassword}`)
        .should('have.value', LoginPassword);
    }
    static GetLoginButton(){
        cy.get('[data-qa="login-button"]')
        .should('be.visible')
        .click();
    }

    
    

}
export default LoginRegisterUserPage;