class AccountCreated{

    static GetAccountCreted(CreatedText){
        cy.get('b')
        .should('have.text',CreatedText);
    }
    static GetCongratulationMessage(CongratulationMessage){
        cy.get('.col-sm-9 > :nth-child(2)')
        .should('have.text',CongratulationMessage)
    }
    static GetOnlineMessage(OnlineMessage){
        cy.get('.col-sm-9 > :nth-child(3)')
        .should('have.text',OnlineMessage);
    }
    static GetContinueButton(){
        cy.get('[data-qa="continue-button"]')
        .should('be.visible')
        .click();
    }

}

export default AccountCreated;