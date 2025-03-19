class Compras {
    
    produtoNoCarrinho(){
    cy.get(':nth-child(4) > .offcanvas-toggle').should('be.visible').click()
    cy.get('#menuShopText').should('be.visible').click()
    cy.get(':nth-child(2) > :nth-child(1) > .mobile-sub-menu > :nth-child(2) > a').should('be.visible').click()
    cy.wait(1500);
    cy.get(':nth-child(3) > .offcanvas-toggle > .fa').should('be.visible').click()   
    cy.get('.offcanvas-cart-action-button > :nth-child(2) > .theme-btn-one').click()
    }

    
    preencherDadosCompra(){
        cy.get('#fname').type('Edgar')
        cy.get('#lname').type('Junior')
        cy.get('#cname').type('XXXX')
        cy.get('#email').type('xxx@teste.com')
        cy.get('#country').select('usa')
        cy.get('#city').select('Aland Islands')
        cy.get('#zip').type('00000')
        cy.get('#faddress').type('Bairro de cima, rua de baixo, 0009')
        cy.get('#messages').type('É isso')
        cy.get('.form-check-label').click()
        cy.get('.checkout-area-bg > .theme-btn-one').click()
        cy.get('#headingOne > div > label').click()
        cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').click()
        cy.contains('Congrats').should('be.visible')
    }


}

export default new Compras;