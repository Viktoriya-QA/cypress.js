describe('Покупка', function () {

     it('Покупка кровати', function () {
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click().click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.checkout').click();
        cy.get('#billing_first_name').type('Виктория');
        cy.get('#billing_last_name').type('Браун');
        cy.get('#billing_address_1').type('Лазурная 1');
        cy.get('#billing_city').type('Орёл');
        cy.get('#billing_state').type('Орловская область');
        cy.get('#billing_postcode').type('167375');
        cy.get('#billing_phone').type('+79995752907');
        cy.get('#billing_email').type('Braun77@mail.ru');
        cy.get('#place_order').click();
        cy.contains('Ваш заказ принят. Благодарим вас.').should('be.visible');
      })
        })