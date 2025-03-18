class Cadastro{
    acessarCadastroPage(){
        cy.visit('https://automationpratice.com.br/register')
    }
    preencherCadastro(name, email, password){
        cy.get('#user').type(name)
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#btnRegister').click()
    }

    preencherCadastroErrado(email, password){
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#btnRegister').click()
    }

    validarMsgErroEmail(){
        cy.get('#errorMessageFirstName').should('be.visible')
    }
    validarMsgErroSenha(){
        cy.get('#errorMessageFirstName').should('be.visible')
    }
    validarMsgErroNome(){
        cy.get('#errorMessageFirstName').should('be.visible')
    }
}

export default new Cadastro