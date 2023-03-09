describe('Форма логина и пароля', function () {

     it('Правильный логин, правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

    it('Восстановление пароля', function () {
       cy.reload();
       cy.visit('https://login.qa.studio/');
       cy.get('#forgotEmailButton').click();
       cy.get('#mailForgot').type('german@dolnikov.ru');
       cy.get('#restoreEmailButton').click();
       cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })

    it('Правильный логин, неправильный пароль', function () {
       cy.reload();
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio15');
       cy.get('#loginButton').click();
       cy.contains('Такого логина или пароля нет').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })


    it('Неправильный логин, правильный пароль', function () {
       cy.reload();
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov7.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.contains('Такого логина или пароля нет').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

    it('Кейс валидации', function () {
       cy.reload();
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('germandolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.contains('Нужно исправить проблему валидации').should('be.visible');
        })


    it('Приведение кстрочным буквам', function () {
       cy.reload();
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('GerMan@Dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.contains('Авторизация прошла успешно').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
})



   