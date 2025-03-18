
import Cadastro from "../../support/pages/cadastro/Cadastro.js";

beforeEach(() => {
    Cadastro.acessarCadastroPage();
});

describe('Teste cadastros', () => { 
    it('Cadastro válidos', () => {
       Cadastro.preencherCadastro('junior', 'junior123@hotmail.com', 'junior123')
    });

    it('Cadastro com e-mail inválido', () => {
        Cadastro.preencherCadastro('junior', 'junior123hotmail.com', 'junior123')
        Cadastro.validarMsgErroEmail()
    });

    it('Cadastro com senha inferior a 6 digitos', () => {
        Cadastro.preencherCadastro('junior', 'junior123@hotmail.com', 'junio')
        Cadastro.validarMsgErroSenha()
    });

    it('Cadastro sem colocar nome', () => {
        Cadastro.preencherCadastroErrado('junior123@hotmail.com', 'junior')
        Cadastro.validarMsgErroNome()
    });


});