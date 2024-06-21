import { LoginMethods } from "./Pages/Login/login.methods"

describe('template spec', () => {
  it('passes', () => {
  cy.visit('https://www.demoblaze.com/')
  cy.get('a[data-target="#logInModal"]').click()
  LoginMethods.Login('ivan', 'saavedra')
  cy.wait(5000)
})
})