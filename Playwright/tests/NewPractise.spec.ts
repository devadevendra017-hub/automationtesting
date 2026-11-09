import { test , expect} from "@playwright/test"

test ("NewPractisetest ",async ({page})=>{



  await page.goto('https://rahulshettyacademy.com/angularpractice/');

  await page.locator('form input[name="name"]').click()
  await page.locator('form input[name="name"]').fill("Devendra")

    await page.locator('form input[name="email"]').click()
     await page.locator('form input[name="email"]').fill("Message1234@")

     await page.getByRole ('textbox', {name : "Password"}).click()
     await page.getByRole ('textbox', {name : "Password"}).fill("Message1234@")

await page.getByRole('checkbox', {name: "Check me out if you Love IceCreams!"}).click()
 await page.waitForTimeout(2000)

await page.getByLabel('Gender').selectOption('Male')

await page.getByRole('radio', {name :'Student'}).check()
 await page.waitForTimeout(2000)
await expect(page.getByRole('radio', {name :'Student'})).toBeVisible()
 
await page.locator('input[name="bday"]').fill('1999-04-24');

await page.waitForTimeout(2000)

await page.getByRole('button', {name : "Submit"}).click()

await page.waitForTimeout(2000)


await page.getByText("Shop").click() 

await page.waitForTimeout(2000)

await page.getByRole('button',{name: 'Add'}).nth(2).click()

await page.getByText('Checkout ( 1 ) (current)').click();



await page.waitForTimeout(2000)

   await expect(page.locator('tbody')).toContainText('In Stock');
await page.waitForTimeout(2000)


await page.getByRole('button',{name: 'checkout'}).click()


await page.waitForTimeout(2000)

await page.locator("#country").click()


await page.locator("#country").fill("Hyderabad")

await page.waitForTimeout(2000)

await page.getByText("I agree with the term &").check()

await page.getByRole('button', {name:'Purchase'}).click()

await expect(page.getByText('× Success! Thank you! Your')).toBeVisible();

})



// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://rahulshettyacademy.com/angularpractice/shop');
//   await page.locator('app-card').filter({ hasText: 'iphone X $24.99 Lorem ipsum' }).getByRole('button').click();
//   await page.getByRole('link', { name: 'iphone X' }).click();
//   await page.getByRole('link', { name: 'Shop' }).click();
//   await page.locator('app-card').filter({ hasText: 'iphone X $24.99 Lorem ipsum' }).getByRole('button').click();
//   await page.getByText('Checkout ( 1 ) (current)').click();
//   await page.locator('tr:nth-child(2) > td:nth-child(2)').click();
//   await expect(page.locator('tbody')).toContainText('In Stock');
// });
