describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Нашли и ввели правильный логин
        cy.get('#pass').type('iLoveqastudio1'); // Нашли и ввели правильный пароль
        cy.get('#loginButton').click(); // Нашли и нажали кнопку "Войти"
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяем, что после авторизации видим текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').click(); // Нашли и нажали кнопку "Забыли пароль?"
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Нашли и ввели имейл
        cy.get('#restoreEmailButton').click(); // Нашли и нажали кнопку "Отправить код"
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяем, что видим текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Нашли и ввели правильный логин
        cy.get('#pass').type('Loveqastudio1'); // Нашли и ввели неправильный пароль
        cy.get('#loginButton').click(); // Нашли и нажали кнопку "Войти"
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяем, что видим текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('erman@dolnikov.ru'); // Нашли и ввели неправильный логин
        cy.get('#pass').type('iLoveqastudio1'); // Нашли и ввели правильный пароль
        cy.get('#loginButton').click(); // Нашли и нажали кнопку "Войти"
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяем, что видим текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

    it('Логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); // Нашли и ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Нашли и ввели правильный пароль
        cy.get('#loginButton').click(); // Нашли и нажали кнопку "Войти"
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяем, что видим текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

    it('Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Нашли и ввели логин
        cy.get('#pass').type('iLoveqastudio1'); // Нашли и ввели правильный пароль
        cy.get('#loginButton').click(); // Нашли и нажали кнопку "Войти"
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяем, что после авторизации видим текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

      
})
