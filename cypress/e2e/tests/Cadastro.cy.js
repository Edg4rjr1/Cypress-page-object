
import Cadastro from "../../support/pages/cadastro/CadastroObj.js";

beforeEach(() => {
    Cadastro.acessarCadastroPage();
});

describe('Teste cadastros', () => { 
    it('Deve realizar um cadastro com dados válidos', () => {
       Cadastro.preencherCadastro('junior', 'junior123@hotmail.com', 'junior123')
    });

    it('Deve exibir mensagem de erro ao cadastrar com e-mail inválido', () => {
        Cadastro.preencherCadastro('junior', 'junior123hotmail.com', 'junior123')
        Cadastro.validarMsgErroEmail()
    });

    it('Deve exibir mensagem de erro ao cadastrar com senha inferior a 6 caracteres', () => {
        Cadastro.preencherCadastro('junior', 'junior123@hotmail.com', 'junio')
        Cadastro.validarMsgErroSenha()
    });

    it('Cadastro sem colocar nome', () => {
        Cadastro.preencherCadastroErrado('junior123@hotmail.com', 'junior')
        Cadastro.validarMsgErroNome()
    });


});