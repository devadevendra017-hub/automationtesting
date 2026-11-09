
import { test, expect } from "@playwright/test";
import { LoginpagePractise } from "../Pages/LoginpagePractise";

const url = "https://rahulshettyacademy.com/angularpractice/";
const name = "Devendra";
const email = "Devendra@gmail.com";
const password = "message1234@";

test.describe("Login Page Tests", () => {

    let loginpage1: LoginpagePractise;

    test.beforeEach(async ({ page }) => {

        loginpage1 = new LoginpagePractise(page);

        await loginpage1.launchURL(url);
    });

    test(" @smoke Valid login test", async ({ page }) => {

        await loginpage1.loginIntoApplication1(
            name,
            email,
    
            password
        );
        // Verify successful form submission
        await expect(page.locator('.alert-success')).toBeVisible();
    });
});
