/// <reference types="cypress" />
import HomePage from "../PagesObjects/HomePage"
describe("Products Test Cases",()=>{

    beforeEach("",()=>{
        HomePage.GetUrl();
        HomePage.GetProducts();
        cy.fixture("example").then(function(data) {
            this.data = data;
        });
    })

    it("Add Product to Cart", function(){
        
    })
})