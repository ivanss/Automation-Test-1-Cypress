import { LoginMethods } from "./Login/Login/login.methods"

describe('template spec', () => {
  it('passes', () => {
  const user = 'isaavedra';
  const password = 'isaavedra'
  cy.visit('https://www.demoblaze.com/')
  cy.get('a[data-target="#logInModal"]').click()
  LoginMethods.Login( user, password)
  cy.get('a#nameofuser').should('contain.text', user)
  cy.wait(5000)
})
})