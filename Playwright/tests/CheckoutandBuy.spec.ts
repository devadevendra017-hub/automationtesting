import { test , expect} from "@playwright/test"
import { CheckoutandBuy } from "../Pages/CheckoutandBuy"
import { Searchaddcart } from "../Pages/Searchaddcart"

const url = "https://danube-webshop.herokuapp.com/"
const NameofBook = "Haben oder haben"
const  checkoutName = "king"
const checkoutSurname = "kholi"
const checkoutZipcode = "45242525"
const checkoutcity = "Londn"
const checkoutAddres ="RCB"
const checkoutcompany = "csk"
const finalsucessmessage ="All good, order is on the way. Thank you!!"

  test.describe("checkout and buy",async()=>{


  let searchaddcart2 : Searchaddcart
  let checkoutandBuy : CheckoutandBuy

   
  test.beforeEach(async({page})=>{

  searchaddcart2 = new Searchaddcart(page)
  checkoutandBuy = new CheckoutandBuy(page)

   await searchaddcart2.launchurl(url)
  })

   test("Buy the textbbox",async({page})=>{

   await searchaddcart2.searchaddtocart(NameofBook)
   await checkoutandBuy.CheckoutBuy(checkoutName,checkoutAddres,checkoutSurname,checkoutZipcode,checkoutcompany,checkoutcity)
   await expect(checkoutandBuy.confrimationmsg).toHaveText(finalsucessmessage)

   })


  })
