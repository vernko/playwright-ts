import { expect, type Locator, type Page } from "@playwright/test"

export class ProgramsPage {
    get programsHeading() { return this.page.locator('[data-id="f9b7be1"]') }

    constructor (readonly page: Page) {}
}