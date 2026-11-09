import {test , expect} from "@playwright/test"
import { Searchaddcart } from "../Pages/Searchaddcart"

const url = "https://danube-webshop.herokuapp.com/"
const NameofBook = "Haben oder haben"

 test.describe("searchaddtocart",()=>{

   let searchaddcart : Searchaddcart

   test.beforeEach(async({page})=>{

    searchaddcart = new Searchaddcart(page)
    
    await searchaddcart.launchurl(url)

   })

 test("@searchandaddtocart",async({page})=>{

  await searchaddcart.searchaddtocart(NameofBook)

  


 })

 })

