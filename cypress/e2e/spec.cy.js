import { LoginMethods } from "./Login/Login/login.methods"
import { HomeMethods } from "./Home/Home.methods"
import { HomeElements } from "./Home/Home.elements"

describe('template spec', () => {
  it('passes', () => {
  //const user = 'isaavedra';
 // const password = 'isaavedra'
  cy.visit('https://www.demoblaze.com/')
  HomeMethods.clickOnProductsLink('Iphone 6 32gb')
  cy.wait(5000)
})
})