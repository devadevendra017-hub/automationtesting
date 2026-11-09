import{test, expect }  from "@playwright/test"
import { LoginpagePractise } from "../Pages/LoginpagePractise"
import { ShopPage } from "../Pages/ShopPage"
import { Checkout } from "../Pages/Checkout"

const url = "https://rahulshettyacademy.com/angularpractice/";
const name = "Devendra";
const email = "Devendra@gmail.com";
const password = "message1234@";
const cartmsg = "In Stock"
const countryname ="India"
const sucessmsgfinal = "Success! Thank you! Your order will be delivered in next few weeks :-)."

let loginpage1 : LoginpagePractise
let shoppage1 : ShopPage
let checkout1 : Checkout

test("loginand shop", async({page})=>{

  loginpage1 = new LoginpagePractise(page)
     shoppage1 = new  ShopPage(page)
      checkout1  = new Checkout(page)

    await loginpage1.launchURL(url)
    await loginpage1.loginIntoApplication1(name,email,password)
    await shoppage1.clickonshop()
    await checkout1.clickoncheckout(countryname)
   await expect(checkout1.lastmsg).toContainText(sucessmsgfinal)

    })


 


