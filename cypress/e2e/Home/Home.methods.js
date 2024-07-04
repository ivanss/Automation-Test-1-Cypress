import { HomeElements } from "./Home.elements";

export class HomeMethods{
    static clickOnPhonesOptions(){
        HomeElements.CategoriesMenu.phone.click();
    }
    static clickOnLaptosOptions(){
        HomeElements.CategoriesMenu.laptops.click();
    }
    static clickOnMonitorsOptions(){
        HomeElements.CategoriesMenu.monitors.click();
    }

    static clickOnProductsLink(productname){
        HomeElements.Products(productname).click()
    }
}