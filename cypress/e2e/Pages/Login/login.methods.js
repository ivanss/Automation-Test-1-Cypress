import { LoginElements } from "./login.elements";

export class LoginMethods {
    static insertUsername(username){
        LoginElements.textboxes.username.invoke('val', username) 
           }
    static insertpassword(password){
        LoginElements.textboxes.password.invoke('val', password)
        }
    static clickOnLoginButton(){
        LoginElements.buttons.Login.click()
    }
    static Login(Username, Password){
        this.insertUsername(Username)
        this.insertpassword(Password)
        this.clickOnLoginButton()
    
    }
}

