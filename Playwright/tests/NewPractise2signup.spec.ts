import { test, expect } from "@playwright/test"
test ("Signup for Buying the Books",async({page})=>{


await page.goto("https://danube-webshop.herokuapp.com/")

await page.getByRole("button",{name : 'Sign up '}).click()

await page.getByPlaceholder("Name",{exact : true}).click()
await page.getByPlaceholder("Name",{exact : true}).fill("karthiksingh")
await page.waitForTimeout(1000)

await page.getByPlaceholder("Surname",{exact : true}).click()
await page.getByPlaceholder("Surname",{exact : true}).fill("Ravi")
await page.waitForTimeout(1000)


await page.getByPlaceholder("Email",{exact : true}).click()
await page.getByPlaceholder("Email",{exact : true}).fill("devendradeva128@gmail.com")
await page.waitForTimeout(1000)


await page.getByPlaceholder("Password",{exact : true}).click()
await page.getByPlaceholder("Password",{exact : true}).fill("Message1234@")
await page.waitForTimeout(1000)

await page.getByRole("radio",{name : "Myself"}).click()
await page.waitForTimeout(1000)

await page.locator("#marketing-agreement").check()
await page.waitForTimeout(1000)

await page.getByRole("button",{name : 'Register'}).click()
await page.waitForTimeout(1000)

await page.locator("#login").click()
await page.waitForTimeout(1000)

})
