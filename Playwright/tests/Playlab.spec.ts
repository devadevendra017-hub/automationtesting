import {test, Page, expect} from "@playwright/test"


test("playtestautomation",async({page})=>{

    await page.goto("https://playwrightlab.github.io/?utm_source=chatgpt.com#")

    await page.locator("#fullName").click()
    await page.locator("#fullName").fill("Devendra")

    await page.locator("#email").click()
    await page.locator("#email").fill("Devendra@gmail.com")

    await page.locator("#password").click()
    await page.locator("#password").fill("Message1234@")

    await page.getByTestId("input-phone").click()
    await page.getByTestId("input-phone").fill("+919625151111")

    
   // await page.getByTestId("input-dob").dblclick()
    

    await page.getByTestId("select-country").click()
    await page.getByTestId("select-country").selectOption("Australia")

    await page.getByRole("radio",{name : "Male", exact : true}).click()
    await page.getByTestId ("check-python").check()

   await page.getByPlaceholder("Tell us about yourself...").fill("devedra king of elrur anf from india ")
   await page.locator("#terms").check()

    await page.getByRole("button",{name : "Register"}).click()

})  

test ("slidersRangeuploadautosuggest",async({page})=>{

    await page.goto("https://playwrightlab.github.io/?utm_source=chatgpt.com#")

   const slider = await page.locator("#volumeSlider")
   await slider.fill("70")

   const price = await page.locator("#priceRange")
   await price.fill("250")

       // Uploading single file
    // __dirname : It will give the current directory path of the file where it is being executed
   // path.join : It will join multiple segments into a single path
//const file1 = await path.join(__dirname,"../Testdata/product.json")


 await page.locator("#uploadBrowseLabel").setInputFiles("C:/Users/deven/OneDrive/Pictures/Screenshots/screenshot.png")
await page.waitForTimeout(2000)
   
await expect(page.locator(".file-item")).toContainText("screenshot.png")

const multpile =await page.locator("#multiSelect")

await multpile.selectOption([
"React",
"Vue.js",
"Angular"

])
 

 await page.getByTestId("custom-dropdown-trigger").click()

await page.getByTestId("custom-opt-medium").click()


await page.locator('#searchableDropdownInput').click()

await page.locator('#searchableDropdownInput').fill("London")

await page.getByTestId("city-london").click()

 await page.getByTestId("checkbox-dropdown-trigger").click()

//  await page.getByRole("checkbox", {name : " Cheese"}).check()

  const checkboxes =  page.locator("checkboxDropdownValue")

const checkitems = page.locator(".checkbox-dropdown-item")  

const count = await checkitems.count()

 for (let i =1; i < count; i++) {
     await checkitems.nth(i).check()
 }

 await page.waitForTimeout(2000)

})



