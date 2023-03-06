/// <reference types="cypress" />
import HomePage from "../PagesObjects/HomePage"
import ContactUs from "../PagesObjects/ContactUsPage"

describe("Contact Test Cases",()=>{

    beforeEach("",()=>{
        HomePage.GetUrl();
        HomePage.GetContact();
        // cy.fixture("example").then(function(data) {
        //     this.data = data;
        // });
    })

    it("FullFill Contact Message Correctly", function(){
      ///  ContactUs.GetContactUsLabel()
    })


})