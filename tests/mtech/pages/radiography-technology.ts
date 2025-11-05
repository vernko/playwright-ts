import { expect, type Locator, type Page } from "@playwright/test"

export class RadiographyTechnologyPage {
    get radiographyTechnologyHeading() { return this.page.locator('[data-id="d564140"]') }

    constructor (readonly page: Page) {}
}