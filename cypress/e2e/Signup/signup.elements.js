export class SignupElements{
    static get textboxes(){
        return {
            get username(){
            return cy.get('input[data-form-type="username"]')
        },
            get password(){
            return cy.get('input[data-form-type="password"]')
            },
         };
    }

    static get buttons(){
        return{
            get Close(){
                return cy.contains('button', 'Close').eq(1)
            },
            get Singup(){
                return cy.contains('button', 'Sign up')
            },
        };
    }

}