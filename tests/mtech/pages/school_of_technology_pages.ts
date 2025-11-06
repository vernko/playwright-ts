import { expect, type Locator, type Page } from "@playwright/test"

export class SchoolOfTechnologyPage {
    get schoolOfHTechnologyHeading() { return this.page.locator('[data-id="4039729"]') }
    get softwareQualityAssuranceWidget() { return this.page.locator('#post-141879') }

    constructor (readonly page: Page) {}

    // think abour abstracting this function to a general use function
    async clickTechnologyProgram(program: Locator) {
        await program.click()
    }
}