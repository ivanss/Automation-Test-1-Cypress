import { PlaceOrderElements } from "./place-order.elements";
import { PlaceOrderElements } from "./place-order.elements";

export class PlaceOrderMethods{
    static insertName(name){
        PlaceOrderElements.TextBoxes.name.invoke('val', name);
    }
    static insertContry(contry){
        PlaceOrderElements.TextBoxes.contry.invoke('val', contry);
    }
    static insertCity(city){
        PlaceOrderElements.TextBoxes.city.invoke('val', city);
    }
    static insertCreditCard(creditCard){
        PlaceOrderElements.TextBoxes.creditCard.invoke('val', creditCard);
    }
    static insertMonth(month){
        PlaceOrderElements.TextBoxes.month.invoke('val', month);
    }
    static insertYear(year){
        PlaceOrderElements.TextBoxes.year.invoke('val', year);
    }

    static clickOnCloseBotton(){
        PlaceOrderElements.buttons.closeBotton.click();
    }
    static clickOnPurchaseBotton(){
        PlaceOrderElements.buttons.purchaseBotton.click();
    }
}