import {Page, Locator } from "@playwright/test"

export class CheckoutandBuy{

    page : Page
    checkoutbtn : Locator
    Name1 :  Locator
    Surname1 : Locator
    Address1 : Locator 
    Zipcode1 : Locator
    city1 : Locator 
    company1 : Locator 
    radiobtn : Locator
    Buybtn : Locator
    confrimationmsg : Locator 

    constructor (page : Page ){
    this.page = page 

    this.checkoutbtn = this.page.getByRole('button',{name : "Checkout"})
    this.Name1 = this.page.getByPlaceholder("Name",{exact : true})
    this.Surname1 = this.page.getByPlaceholder("Surname",{exact : true})
    this.Address1 = this.page.getByPlaceholder("Address",{exact : true})
    this.Zipcode1 = this.page.getByPlaceholder("Zipcode",{exact : true})
    this.city1 = this.page.getByPlaceholder("City",{exact : true})
    this.company1 = this.page.locator("#s-company")
    this.confrimationmsg = this.page.locator("#order-confirmation")
    this.radiobtn = this.page.locator("#asap")
    this.Buybtn = this.page.getByRole("button", {name: "Buy"})
    }

    async  CheckoutBuy(checkoutName : string,checkoutSurname: string,checkoutAddress:string,checkoutZipcode:string,checkoutcity:string,checkoutcompany:string ){

    await  this.checkoutbtn.click()       


    await  this.Name1.click()
    await this.Name1.fill(checkoutName)
    

    await this.Surname1.click()
    await   this.Surname1.fill(checkoutSurname)
    

   await   this.Address1.click()
   await    this.Address1.fill(checkoutAddress)
  

  await    this.Zipcode1.click()
  await  this.Zipcode1.fill(checkoutZipcode)


   await   this.city1.click()
   await  this.city1.click()
   await   this.city1.click()
   await   this.city1.fill(checkoutcity)
   await    this.page.waitForTimeout(1000)

    await   this.company1.click()
    await  this.company1.fill(checkoutcompany)
    await  this.page.waitForTimeout(1000)

    await   this.radiobtn.click()
    await   this.page.waitForTimeout(1000)

    await  this.Buybtn.click()
    
      

    }
}

