import Home from "../../support/pages/home/Home";

beforeEach(() => {
    Home.acessarPageHome()
});
    
describe('Página home', () => {
  it('Buscar produtos', () => {
    Home.buscarProduto()
    
  });

 it('Limpar carrinho de compras', () => {
    Home.limparCarrinho()
 }); 
})
