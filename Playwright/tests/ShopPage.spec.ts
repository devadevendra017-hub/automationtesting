
import { test, expect } from "@playwright/test";
import { LoginpagePractise } from "../Pages/LoginpagePractise";
import { ShopPage } from "../Pages/ShopPage";


const url = "https://rahulshettyacademy.com/angularpractice/";
const name = "Devendra";
const email = "Devendra@gmail.com";
const password = "message1234@";
const cartmsg = "In Stock"


    let loginpage1: LoginpagePractise;
    let shoppage1 : ShopPage
    

    test.beforeEach(async ({page})=>{
       loginpage1 = new LoginpagePractise(page)
       shoppage1 = new ShopPage(page)
       await loginpage1.launchURL(url)
       
    })

    test("@smoke @regression Add the product to the cart", async ()=>{
    await shoppage1.clickonshop()
    await expect(shoppage1.instock).toContainText(cartmsg)
    
})

    
