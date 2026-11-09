import { Page, Locator } from "@playwright/test";

export class ProductPurchase {

    page: Page;
    products: Locator;
    addtocartbtnn : Locator ;

    constructor(page: Page) {

        this.page = page;

        // Locator for all product titles
        this.products = this.page.locator(".preview-title");
        this.addtocartbtnn = this.page.getByRole("button", { name: "Add to cart"})
    }

    // Launch application
    async launchurl(url: string) {

        await this.page.goto(url)
    }

    // Search product and add to cart
       async searchandaddProductToCart(products2: string) {

    // Wait for product titles to appear
        await this.products.first().waitFor({
            state: "visible",
            timeout: 15000
        });

    // Get total product count
        const countOfProducts = await this.products.count();
       console.log("Total products:", countOfProducts);

   // Print and check each product
        for (let i = 0; i < countOfProducts; i++) {

   // Get product title
            const productText = ( await this.products.nth(i).innerText() ).trim();
      //   console.log(`Product ${i + 1}: ${productText}`);

   // Compare product name

            if (productText === products2) {
                console.log("Product matched:", productText);

   // Get product card
                const productCard = this.products.nth(i).locator("..");   //  using locator("..") for moving to parent 

   // Click Add to Cart

                await this.products.nth(i).locator("..").click()
                await this.addtocartbtnn.click();
                console.log("Successfully clicked Add to Cart");
                break;
            }
         }

       }
    }

