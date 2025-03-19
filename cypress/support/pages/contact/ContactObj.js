class Contact {
    acessarPageCnt(){
        cy.visit('https://automationpratice.com.br/contact-two')
    }
    preencherDadosCnt(name, email, phone, subject, message){
        cy.get(':nth-child(1) > .form-group > .form-control').type(name)
        cy.get(':nth-child(2) > .form-group > .form-control').type(email)
        cy.get(':nth-child(3) > .form-group > .form-control').type(phone)
        cy.get(':nth-child(4) > .form-group > .form-control').type(subject)
        cy.get('.col-lg-12 > .form-group > .form-control').type(message)
        cy.get('.submit_bitton_contact_one > .theme-btn-one').click()
        cy.get('.swal2-popup').should('be.visible')
    }

}
export default new Contact;