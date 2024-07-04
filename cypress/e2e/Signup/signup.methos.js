import { SignupElements } from "./signup.elements";

export class SignupMethos{
    static insertUsername(username){
        SignupElements.textboxes.username.invoke('val', username);
    }

    static insertPassword(password){
        SignupElements.textboxes.password.invoke('val', password);
    }

    static ClickOnSignUpButton(){
        SignupElements.buttons.Singup.click();
    }

    static SingUp(username, password){
        this.insertUsername(username)
        this.insertPassword(password)
        this.ClickOnSignUpButton();
    }
}