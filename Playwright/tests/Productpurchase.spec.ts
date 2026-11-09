import {test, expect } from "@playwright/test"
import { ProductPurchase } from "../Pages/Productpurchase"
import { CheckoutandBuy } from "../Pages/CheckoutandBuy"

const url = "https://danube-webshop.herokuapp.com/"
const products2 = "A Citrussy Clock"
const  checkoutName = "king"
const checkoutSurname = "kholi"
const checkoutZipcode = "45242525"
const checkoutcity = "Londn"
const checkoutAddres ="RCB"
const checkoutcompany = "csk"
const finalsucessmessage ="All good, order is on the way. Thank you!!"


 test.describe("productpurchasing",()=>{

   
      let productpurchase : ProductPurchase 
      let checkoutandBuy : CheckoutandBuy

 test.beforeEach("launchurand searchproduct",async({page})=>{

       productpurchase = new ProductPurchase(page)
       checkoutandBuy = new CheckoutandBuy(page)

      await productpurchase.launchurl(url)
      })

 test("Buy the textbbox with Parry Hotter",async({page})=>{                        // actual test

    
     await productpurchase.searchandaddProductToCart(products2)
     await checkoutandBuy.CheckoutBuy(checkoutName,checkoutAddres,checkoutSurname,checkoutZipcode,checkoutcompany,checkoutcity)
     await expect(checkoutandBuy.confrimationmsg).toHaveText(finalsucessmessage)
 })

})





