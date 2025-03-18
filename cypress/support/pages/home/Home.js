class Home{
    acessarPageHome(){
        cy.visit('https://automationpratice.com.br/')
    }
    buscarProduto(){
        cy.get('.mobile-right-side > .header-action-link > :nth-child(1)').click()
        cy.get('form > input').should('be.visible').type('T-shirt')
        cy.get('.btn').click()
        cy.contains('Check out the Results').should('be.visible')
    }
    limparCarrinho(){
        cy.get(':nth-child(3) > .offcanvas-toggle > .item-count').click()
        cy.get('.offcanvas-cart-action-button > :nth-child(1) > .theme-btn-one').click()
        cy.get('.cart_submit > .theme-btn-one').click()
        cy.get('.empaty_cart_area > h3').should('be.visible')    }
}
export default new Home;