import {Page,Locator} from "@playwright/test"

export class Searchaddcart{

    page : Page 
    bookname : Locator
    searchbtn : Locator   
    clickonproduct : Locator
    clickonaddtocart : Locator


constructor (page:Page){

this.page = page 
this.bookname  = this.page.getByRole('textbox')
this.searchbtn = this.page.getByRole("button",{name : 'Search'})
this.clickonproduct = this.page.locator(".preview")
this.clickonaddtocart =this.page.getByRole("button", { name : "Add to cart"})
}

async launchurl( url : string ){

await this.page.goto(url)

}

async searchaddtocart(NameofBook : string ){

    await this.bookname.click()
    await this.bookname.fill(NameofBook)
    await this.searchbtn.click()
    await this.clickonproduct.click()
    await this.clickonaddtocart.click()



}    
}


