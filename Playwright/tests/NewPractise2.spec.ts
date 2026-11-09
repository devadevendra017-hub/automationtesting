import {test , expect } from "@playwright/test"
test ("Newpractise2",async({page})=>{


await page.goto("https://danube-webshop.herokuapp.com/")
await page.waitForTimeout(1000)

await page.getByRole('textbox').click();
await page.getByRole("textbox").fill("Haben oder haben")

await page.getByRole("button",{name : 'Search'}).click()
await page.waitForTimeout(1000)

await page.locator(".preview").click()
await page.waitForTimeout(1000)

await page.getByRole("button", { name : "Add to cart"}).click()
await page.waitForTimeout(1000)

await page.getByRole('button',{name : "Checkout"}).click()
await page.waitForTimeout(1000)


await page.getByPlaceholder("Name",{exact : true}).click()
await page.getByPlaceholder("Name",{exact : true}).fill("karthiksingh")
await page.waitForTimeout(1000)

    
await page.getByPlaceholder("Surname",{exact : true}).click()
await page.getByPlaceholder("Surname",{exact : true}).fill("raviraju")
await page.waitForTimeout(1000)

    
await page.getByPlaceholder("Address",{exact : true}).click()
await page.getByPlaceholder("Address",{exact : true}).fill("hyderabad")
await page.waitForTimeout(1000)

await page.getByPlaceholder("Zipcode",{exact:true }).click()
await page.getByPlaceholder("Zipcode",{exact:true }).fill(" 54567")
await page.waitForTimeout(1000)


await page.getByPlaceholder("City",{exact:true }).click()
await page.getByPlaceholder("City",{exact:true }).fill("Gachibowli")
await page.waitForTimeout(1000)

await page.locator("#s-company").fill("CTS")
await page.waitForTimeout(1000)

await page.locator("#asap").click()
await page.waitForTimeout(1000)

await page.getByRole("button", {name: "Buy"}).click()
await page.waitForTimeout(2000)

await expect(page.locator("#order-confirmation")).toBeVisible()
await page.waitForTimeout(2000)

}) 