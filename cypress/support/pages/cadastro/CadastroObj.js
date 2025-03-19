import cadastroElements from "./elements"

class Cadastro{
    acessarCadastroPage(){
        cy.visit('https://automationpratice.com.br/register')
    }
    preencherCadastro(name, email, password){
        cy.get(cadastroElements.campoNome).type(name)
        cy.get(cadastroElements.campoEmail).type(email)
        cy.get(cadastroElements.campoSenha).type(password)
        cy.get(cadastroElements.botaoCadastro).click()
    }

    preencherCadastroErrado(email, password){
        cy.get(cadastroElements.campoEmail).type(email)
        cy.get(cadastroElements.campoSenha).type(password)
        cy.get(cadastroElements.botaoCadastro).click()
    }

    validarMsgErro(){
        cy.get(cadastroElements.validarErro).should('be.visible')
    }
   
}

export default new Cadastro