import { expect, type Locator, type Page } from "@playwright/test"

export class ApplyPage {
    // locators
    get applyPageHeading() { return this.page.locator('[data-id="5f1eb18"]') };

    constructor (readonly page: Page) {
        // add items
    }

    // functions
}