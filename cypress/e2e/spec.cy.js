import { LoginMethods } from "./Login/Login/login.methods"
import { HomeMethods } from "./Home/Home.methods"
import { HomeElements } from "./Home/Home.elements"
import {CartMethods} from "./Cart/Cart.methods"

describe('template spec', () => {
  it('passes', () => {
  //const user = 'isaavedra';
 // const password = 'isaavedra'
  cy.visit('https://www.demoblaze.com/')
  cy.wait(30000)
  CartMethods.ClickOnDeleteLink('Samsung galaxy s6')
  cy.wait(30000)
})
})