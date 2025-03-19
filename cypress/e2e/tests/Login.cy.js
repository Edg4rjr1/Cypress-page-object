import Login from "../../support/pages/login/LoginObj";

beforeEach(() => {
    Login.acessarSite()
});

describe('Login', () => {
    it('Login com credenciais inválidas', () => {
        Login.preencherLoginInvalido('edgar123hotmail.com', 'edgar123')
    });
 
    it('Login com credenciais válidas', () => {
        Login.preencherLoginValido('edgar123@hotmail.com', 'edgar123')
    });

    it('Logout', () => {
        Login.preencherLoginValido('edgar123@hotmail.com', 'edgar123')
        Login.logout()
        Login.mensagemLogout()
    });
});

