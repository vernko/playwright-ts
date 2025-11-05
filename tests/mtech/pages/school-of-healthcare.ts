import { expect, type Locator, type Page } from "@playwright/test"

export class SchoolOfHealthcarePage {
    get schoolOfHealthcareHeading() { return this.page.locator('[data-id="ce34e5b"]') }
    get radiographyTechnologyWidget() { return this.page.locator('#post-141853') }

    constructor (readonly page: Page) {}

    // think abour abstracting this function to a general use function
    async clickHealthProgram(program: Locator) {
        await program.click()
    }
}