export class ThankForYourPurchaseElements{
    static get buttons(){
        return{
            get okButton(){
                return cy.contains('button', 'OK');
            },
        }
    }
    static get icons(){
        return{
            get greenCheckMark(){
                return cy.get('.sa-success')
            }
        }
    }
}