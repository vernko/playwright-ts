import { test, expect } from '@playwright/test'
import { HomePage } from './pages/home'
import { ApplyPage } from './pages/apply';
import { ProgramsPage } from './pages/programs';

const URL = 'https://mtec.edu';
let homePage: HomePage;
let applyPage: ApplyPage;
let programsPage: ProgramsPage;

test.beforeEach(async ({ page }) => {
    await page.goto(URL);
    homePage = new HomePage(page);
    applyPage = new ApplyPage(page);
    programsPage = new ProgramsPage(page);
})

test('can go to Apply page', async ({ page }) => {
    homePage.clickApplyNow();
    await expect(applyPage.applyPageHeading).toBeVisible();
});

test('can go to Programs page', async ({ page }) => {
    homePage.clickSeeAllPrograms();
    await expect(programsPage.programsHeading).toBeVisible();
});