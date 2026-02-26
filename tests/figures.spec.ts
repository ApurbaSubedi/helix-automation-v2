    import { test, expect } from '@playwright/test';
    import testData from '../fixtures/testData.json';

    test.describe('Helix Functionality ', () => {
        // Login before each test
    test.beforeEach(async ({ page }) => {
        await page.goto ("/Dashboard");
    });    
    test('New Figures Test',async ({ page }) => {
        
        await page.getByRole('link', { name: 'Extraction' }).click();
        await page.waitForTimeout(3000);
        await page.getByRole('tab', { name: 'Entries' }).click();
        await page.getByRole('link', { name: 'Test Entry' }).first().click();
        await page.getByRole('link', { name: 'Go to edit' }).click();
        await page.getByRole('tab', { name: 'Figure and Analysis' }).click();
        await page.getByRole('button', { name: 'Add Figure' }).click();
        await page.locator('[name="event"]').click();
        
        await page.waitForTimeout(5000);
        await page.getByRole('button', { name: 'Test Event Automation' }).first().click();

        await page.locator('[name="country"]').click();
        await page.locator('button[title="Abyei Area"]').click();
        await page.getByRole('button', { name: 'Add location from OSMNames' }).click();
        await page.locator('[name="search"]').fill('a');
        await page.getByRole('button', { name: "Sana'a City" }).click();
        await page.locator('[name="category"]').click();
        await page.locator('button[title="Return"]').click();

        await page.locator('[name="startDate"]').click();
        await page.getByRole('button', { name: '22'}).click();


        await page.locator('[name="term"]').click();
        await page.locator('button[title="Evacuated"]').click();

        await page.locator('[name="quantifier"]').click();
        await page.locator('button[title="Exact"]').click();
        await page.locator('[name="reported"]').fill(testData.figures.reportedNumber);
        await page.locator('[name="unit"]').click();
        await page.locator('button[title="Person"]').click();
        await page.locator('[name="role"]').click();
        await page.locator('button[title="Recommended figure"]').click();
        await page.locator('[name="displacementOccurred"]').click();
        await page.locator('button[title="During"]').click();
        await page.locator('[name="sources"]').click();
        await page.locator('button[title="United Nations Interim Security Force for Abyei (UNISFA) - Abyei Area"]').click(); 
        await page.getByTestId('text-area').nth(1).fill(testData.figures.textarea);
        await page.getByRole('button', { name: 'Submit' }).click();
        
        await page.waitForTimeout(5000);

        // //Assertions
        
        await page.getByRole('link', { name: 'Extraction' }).click();
        await page.waitForTimeout(3000);
        await page.getByRole('tab', { name: 'Figures' }).click();
        await expect(page.getByRole('link', { name: testData.entry.entryName })).toBeVisible();
        await page.getByRole('link', { name: testData.entry.entryName }).click();
        await expect(page.locator('._header_8hzsz_3')).toContainText("Sana'a City, Yemen, Abyei Area - 1000 Other - RF - Disaster, Earthquake - 22/02/2026");
        

            
    });

        
    });


