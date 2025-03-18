import Login from "../../support/Pages/Login/Login.js";
import Compras from "../../support/pages/compras/Compras.js";

describe('Fluxo de compras', () => { 
    it('Fluxo de compras', () => {
        Login.acessarSite();
        Login.preencherLoginValido('edgar123@hotmail.com', 'edgar123');
        Compras.produtoNoCarrinho();
        Compras.preencherDadosCompra()
    });


});