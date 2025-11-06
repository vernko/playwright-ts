import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/home_pages'
import { ApplyPage } from '../pages/apply_pages';
import { ProgramsPage } from '../pages/programs_pages';
import { SchoolOfHealthcarePage } from '../pages/school_of_healthcare_pages';
import { RadiographyTechnologyPage } from '../pages/radiography_technology_pages';
import { SchoolOfTechnologyPage } from '../pages/school_of_technology_pages';
import { SoftwareQualityAssurancePage } from '../pages/software_quality_assurance_pages';

const URL = 'https://mtec.edu';
let homePage: HomePage;
let applyPage: ApplyPage;
let programsPage: ProgramsPage;
let radiographyTechnologyPage: RadiographyTechnologyPage;
let schoolOfHealthcarePage: SchoolOfHealthcarePage;
let schoolOfTechnologyPage: SchoolOfTechnologyPage;
let softwareQualityAssurancePage: SoftwareQualityAssurancePage;

test.beforeEach(async ({ page }) => {
    await page.goto(URL);
    homePage = new HomePage(page);
    applyPage = new ApplyPage(page);
    programsPage = new ProgramsPage(page);
    radiographyTechnologyPage = new RadiographyTechnologyPage(page);
    schoolOfHealthcarePage = new SchoolOfHealthcarePage(page);
    schoolOfTechnologyPage = new SchoolOfTechnologyPage(page);
    softwareQualityAssurancePage = new SoftwareQualityAssurancePage(page);
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

test('can go to Software Quality Assurance page', async ({ page }) => {
    homePage.clickProgram(homePage.schoolOfTechnologyButton);
    schoolOfTechnologyPage.clickTechnologyProgram(schoolOfTechnologyPage.softwareQualityAssuranceWidget)
    await expect(softwareQualityAssurancePage.softwareQualityAssuranceHeading).toBeVisible();
});