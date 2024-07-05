import {ThankForYourPurchaseElements} from "./thank-you-for-you-purchase.elements"

export class ThankForYourPurchaseMathods{
    static clickOnOkButton(){
        ThankForYourPurchaseElements.buttons.okButton.click();
    }

    static verifyGreenCheckMark(){
        ThankForYourPurchaseElements.icons.greenCheckMark.should('exist'); 
    }
    
}