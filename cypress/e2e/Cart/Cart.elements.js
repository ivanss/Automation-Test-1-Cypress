export class CartElements{
    static get Button(){
        return{
            get PlaceOrderButton(){
               return cy.get('button[data-toggle="modal"]');
        },
    }
}  

////td[text()="Samsung galaxy s6"]/ancestor::tr//a
    static get Links(){
        return{
             delete(Productname){
               return cy.contains('td', Productname).closest('tr').find('a');
             },
        }
    }
}
