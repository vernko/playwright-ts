import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/home'
import { ApplyPage } from '../pages/apply';
import { ProgramsPage } from '../pages/programs';
import { SchoolOfHealthcarePage } from '../pages/school-of-healthcare';
import { RadiographyTechnologyPage } from '../pages/radiography-technology';

const URL = 'https://mtec.edu';
let homePage: HomePage;
let applyPage: ApplyPage;
let programsPage: ProgramsPage;
let schoolOfHealthcarePage: SchoolOfHealthcarePage;
let radiographyTechnologyPage: RadiographyTechnologyPage;

test.beforeEach(async ({ page }) => {
    await page.goto(URL);
    homePage = new HomePage(page);
    applyPage = new ApplyPage(page);
    programsPage = new ProgramsPage(page);
    schoolOfHealthcarePage = new SchoolOfHealthcarePage(page);
    radiographyTechnologyPage = new RadiographyTechnologyPage(page);
})

test('can go to Apply page', async ({ page }) => {
    homePage.clickApplyNow();
    await expect(applyPage.applyPageHeading).toBeVisible();
});

test('can go to Programs page', async ({ page }) => {
    homePage.clickProgram(homePage.seeAllProgramsButton);
    await expect(programsPage.programsHeading).toBeVisible();
});

test('can go to School of Healthcare page', async ({ page }) => {
    homePage.clickProgram(homePage.schoolOfHealthcareButton);
    await expect(schoolOfHealthcarePage.schoolOfHealthcareHeading).toBeVisible();
});

test('can go to Radiography Technology page', async ({ page }) => {
    homePage.clickProgram(homePage.schoolOfHealthcareButton);
    schoolOfHealthcarePage.clickHealthProgram(schoolOfHealthcarePage.radiographyTechnologyWidget)
    await expect(radiographyTechnologyPage.radiographyTechnologyHeading).toBeVisible();
});