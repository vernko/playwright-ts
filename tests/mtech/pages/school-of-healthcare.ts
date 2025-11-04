import { expect, type Locator, type Page } from "@playwright/test"

export class SchoolOfHealthcarePage {
    get schoolOfHealthcareHeading() { return this.page.locator('[data-id="ce34e5b"]') }

    constructor (readonly page: Page) {}
}