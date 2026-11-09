import {Page, Locator } from "@playwright/test"

export class Checkout{

    page : Page
    checkout : Locator
    country : Locator
    checkbox : Locator
    purchase : Locator
    lastmsg : Locator

    constructor(page : Page){

        this.page = page
        this.checkout = this.page.getByRole('button',{name: 'checkout'})
        this.country = this.page.locator("#country")
        this.checkbox = this.page.getByText("I agree with the term &")
        this.purchase = this.page.getByRole('button', {name:'Purchase'})
        this.lastmsg = this.page.getByText( "Success! Thank you! Your order will be delivered in next few weeks :-).")

    }

 async clickoncheckout (countryname: string )
 {
await this.checkout.click()
await this.page.waitForTimeout(2000)

 await this.country.click()
 await this.country.fill(countryname)
 await this.page.waitForTimeout(2000)

  await this.checkbox.check()
  await this.page.waitForTimeout(2000)

   await this.purchase.click()
    await this.page.waitForTimeout(2000)


 }


}
