/// <reference types="cypress" />
class Products{

    static GetSpecialImage(){
        cy.get('#sale_image')
        .should('be.visible');
    }
    static GetSearchProductsinput(ProductName){
        cy.get('#search_product').type(`${ProductName}`)
        .should('be.visible')
        .and('have.value',ProductName);
    }
    static GetSearchProductsButton(){
        cy.get('#submit_search')
        .should('be.visible')
        .click();
    }
    static GetProductsTitle(ProductsTitle){
        cy.get('.left-sidebar > :nth-child(1)')
        .should('be.visible')
        .should('have.text',ProductsTitle);
    }
    static GetCategoryTitle(CategoryTitle){
        cy.get('.left-sidebar > :nth-child(1)')
        .should('be.visible')
        .should('have.text',CategoryTitle)
    }
    static AddRandomProductsToCart(Product){
        cy.get(':nth-child('+`${Product}`+') > .product-image-wrapper > .choose > .nav > li > a')
        .click();
    }

}
export default Products;