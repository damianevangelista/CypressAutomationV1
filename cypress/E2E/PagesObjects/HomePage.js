/// <reference types="cypress" />
class HomePage{

    static GetUrl(){
        cy.visit(Cypress.env("Url"));
    }
    static SignupLogin(){
        cy.get("a[href='/login']").click()
    }
    static Logout(){
        cy.get('.shop-menu > .nav > :nth-child(4) > a')
        .should('be.visible')
        .click();
    }
    static GetLoggedUser(LoggedUser){
        cy.get(':nth-child(10) > a')
        .should('be.visible')
        .should('contain',LoggedUser)
    }
    static GetContact(){
        cy.get("a[href='/contact_us']")
        .should('be.visible')
        .click();
    }
    static GetProducts(){
        cy.get('.shop-menu > .nav > :nth-child(2) > a')
        .should('be.visible')
        .click()
        //.should('have.text')
    }

}
export default HomePage;