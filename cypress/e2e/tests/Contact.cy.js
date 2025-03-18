import Contact from "../../support/pages/contact/Contact";

describe('Contatc us', () => {
  it('Preencher dados para contato', () => {
    Contact.acessarPageCnt()
    Contact.preencherDadosCnt('Edgar', 'edgar@teste.com', '987654321', 'Não consigo rastrear meu produto', 'xxxxxxxxxxxxxxxxx')
  
    
  });
})
