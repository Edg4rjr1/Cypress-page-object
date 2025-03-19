import Login from "../../support/Pages/Login/LoginObj.js";
import Compras from "../../support/pages/compras/ComprasObj.js";

describe('Fluxo de compras', () => { 
    it('Fluxo de compras', () => {
        Login.acessarSite();
        Login.preencherLoginValido('edgar123@hotmail.com', 'edgar123');
        Compras.produtoNoCarrinho();
        Compras.preencherDadosCompra()
    });


});