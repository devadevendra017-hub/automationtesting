
import { Page, Locator } from "@playwright/test";

export class LoginpagePractise {

    // 1. Properties - Locators
    page: Page;
    name: Locator;
    email: Locator;
    password: Locator;
    submit: Locator;

    // 2. Constructor - Initialize locators
    constructor(page: Page) {

        this.page = page;

        this.name = this.page.locator('form input[name="name"]');

        this.email = this.page.locator('form input[name="email"]');

        this.password = this.page.locator('form input[type="password"]');

        this.submit = this.page.getByRole('button', { name: "Submit" });
    }

    // 3. Methods

    async launchURL(url: string) {
        await this.page.goto(url);
    }

    async loginIntoApplication1(
        name: string,
        email: string,
        password: string
    ) {

        await this.name.fill(name);
        await this.page.waitForTimeout(2000)

      await this.email.fill(email);
      await this.page.waitForTimeout(2000)

        await this.password.fill(password);
        await this.page.waitForTimeout(2000)

        await this.submit.click();
    }
}
