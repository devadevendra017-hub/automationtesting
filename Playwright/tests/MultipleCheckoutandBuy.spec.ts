
import { test, expect } from "@playwright/test";

import { CheckoutandBuy } from "../Pages/CheckoutandBuy";
import { Searchaddcart } from "../Pages/Searchaddcart";

import products1 from "../Testdata/datadriven.json";

test.describe("Multiple products checkout and buy", () => {

    let searchaddcart2: Searchaddcart;
    let checkoutandBuy: CheckoutandBuy;

    test.beforeEach(async ({ page }) => {

        searchaddcart2 = new Searchaddcart(page);
        checkoutandBuy = new CheckoutandBuy(page);

    });

    products1.forEach((data, index) => {

        test(`Buy multiple books ${index + 1} - ${data.NameofBook}`, async ({ page }) => {

            // Step 1: Launch application
            await searchaddcart2.launchurl(data.url);

            // Step 2: Search and add book to cart
            await searchaddcart2.searchaddtocart(data.NameofBook);

            // Step 3: Complete checkout
            await checkoutandBuy.CheckoutBuy(
                data.checkoutName,
                data.checkoutAddres,
                data.checkoutSurname,
                data.checkoutZipcode,
                data.checkoutcompany,
                data.checkoutcity
            );

            // Step 4: Validate confirmation message
            // Add your assertion here using the actual confirmation locator.
            
        });

    });

});
  