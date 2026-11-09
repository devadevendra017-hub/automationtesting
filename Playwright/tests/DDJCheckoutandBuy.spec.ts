import { test , expect} from "@playwright/test"
import { CheckoutandBuy } from "../Pages/CheckoutandBuy"
import { Searchaddcart } from "../Pages/Searchaddcart"

import data from "../Testdata/product.json"

// const url = "https://danube-webshop.herokuapp.com/"
// const NameofBook = "Haben oder haben"
// const  checkoutName = "king"
// const checkoutSurname = "kholi"
// const checkoutZipcode = "45242525"
// const checkoutcity = "Londn"
// const checkoutAddres ="RCB"
// const checkoutcompany = "csk"
 const finalsucessmessage ="All good, order is on the way. Thank you!!"

  test.describe("checkout and buy",async()=>{

  let searchaddcart2 : Searchaddcart
  let checkoutandBuy : CheckoutandBuy

  test.beforeEach(async({page})=>{

  searchaddcart2 = new Searchaddcart(page)
  checkoutandBuy = new CheckoutandBuy(page)

   await searchaddcart2.launchurl(data.url)
  })

   test("Buy the textbbox",async({page})=>{

   await searchaddcart2.searchaddtocart(data.NameofBook)
   await checkoutandBuy.CheckoutBuy(data.checkoutName,data.checkoutAddres,data.checkoutSurname,data.checkoutZipcode,data.checkoutcompany,data.checkoutcity)
   await expect(checkoutandBuy.confrimationmsg).toHaveText(finalsucessmessage)

   })


  })
