import loginElements from './elements.js';

class Login {
    acessarSite() {
        cy.visit('https://automationpratice.com.br/login');
    }

    preencherLoginValido(email, password) {
        cy.get(loginElements.campoUsuario).type(email);
        cy.get(loginElements.campoSenha).type(password);
        cy.get(loginElements.botaoLogin).should('exist').should('be.visible').click();
        cy.wait(2000);
        cy.get('.swal2-confirm').should('be.visible').click();
        cy.url().should('eq', 'https://automationpratice.com.br/my-account');
    }

    preencherLoginInvalido(email, password) {
        cy.get(loginElements.campoUsuario).type(email);
        cy.get(loginElements.campoSenha).type(password);
        cy.get(loginElements.botaoLogin).should('be.visible').click();
        cy.get('.invalid_input').should('be.visible');
    }

    logout() {
        cy.url().should('eq', 'https://automationpratice.com.br/my-account');
        cy.get('.nav > :nth-child(6) > a').click();
    }

    mensagemLogout() {
        cy.contains('Logout Sucessfull').should('be.visible');
    }
}

export default new Login();