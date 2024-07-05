export class PlaceOrderElements{
    static get TextBoxes(){
        return{
            get name(){
                return cy.get('input[data-form-type="name"]');
            },
            get contry(){
                return cy.get('input[data-form-type="address,country"]');
            },
            get city(){
                return cy.get('input[data-form-type="address,city"]');
            },
            get creditCard(){
                return cy.get('input[data-form-type="payment,credit_card"]');
            },
            get month(){
                return cy.get('input[data-form-type="date,expiration,credit_card,payment,month"]');
            },
            get year(){
                return cy.get('input[data-form-type="date,expiration,credit_card,payment,year"]');
            },
        }
    }

    static get buttons(){
        return{
            get closeBotton(){
                return cy.get('div[id="orderModal"] button').eq(1);
            },
            get purchaseBotton(){
                return cy.contains('button', 'Purchase');
            },
        }
    }
}