export class ProductDetailsElements{
    static get buttons(){
        return{
            get addtocart(){
                return cy.contains('a', 'Add to cart')
            }
        }
    }
}