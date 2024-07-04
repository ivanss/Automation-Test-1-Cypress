export class HomeElements{
    static get CategoriesMenu(){
        return{
            get phone(){
                return cy.contains('a', 'Phones')
            },
            get laptops(){
                return cy.contains('a', 'Laptops')
            },
            get monitors(){
                return  cy.contains('a', 'Monitors')
            },
        };
    }
    static Products(productname){
        return cy.contains('a', productname)
    }
}
