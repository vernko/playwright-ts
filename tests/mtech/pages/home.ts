import { expect, type Locator, type Page } from "@playwright/test"

export class HomePage {
    // locators
    get applyButton() { return this.page.getByRole('link', { name: 'Apply Now', exact: true })} ;
    get programsMenuItem() { return this.page.locator('[id="jet-mega-menu-item-87"]').first() };
    get seeAllProgramsButton() { return this.page.locator('[data-id="af91bb1"]').first() };


    constructor (readonly page: Page) {
        // add items
    }

    // functions
    async clickApplyNow() { 
        await this.applyButton.click() 
    };

    async clickPrograms() { 
        await this.programsMenuItem.click() 
    };

    async clickSeeAllPrograms() { 
        this.clickPrograms()
        await this.seeAllProgramsButton.click()
    };
}