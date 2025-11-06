import { expect, type Locator, type Page } from "@playwright/test"

export class SoftwareQualityAssurancePage {
    get softwareQualityAssuranceHeading() { return this.page.locator('[data-id="d564140"]') }

    constructor (readonly page: Page) {}
}