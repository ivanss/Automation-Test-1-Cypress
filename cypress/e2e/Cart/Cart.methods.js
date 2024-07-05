import { CartElements } from "./Cart.elements";

export class CartMethods{
    static ClickOnDeleteLink(Productname){
        CartElements.Links.delete(Productname).click();
    }
}