import {Page, Locator} from "@playwright/test"

export class ShopPage{

page : Page 
shop : Locator
add : Locator
checkout : Locator
instock :Locator  

constructor (page : Page ){
    this.page = page 
    this.shop = this.page.getByText("Shop")
    this.add  = this.page.getByRole('button',{name: 'Add'}).nth(2)
    this.checkout = this.page.getByText('Checkout ( 1 ) (current)')   
    this.instock = this.page.locator('tbody')
}
 
   async clickonshop(){

    this.shop.click()
    await this.page.waitForTimeout(2000)
    this.add.click()
    await this.page.waitForTimeout(2000)
    this.checkout.click()
    await this.page.waitForTimeout(2000)
   }


}