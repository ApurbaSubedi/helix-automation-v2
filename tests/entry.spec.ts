    import { test, expect } from '@playwright/test';
    import testData from '../fixtures/testData.json';

    test.describe('Login Helix', () => {
    test.beforeEach(async ({ page }) => {
    await page.goto ("/dashboard");
    });
    test('New Entry Test',async ({ page }) => {
        

        await page.getByRole('link', { name: 'NEW ENTRY' }).click();
        await expect(page.locator('._heading-section_aowz5_5')).toContainText('New Entry');
        await page.locator('[name="url"]').fill(testData.entry.URL);
        await page.getByRole('button', { name: 'Process' }).click();
        
        await page.locator('[name="articleTitle"]').fill(testData.entry.entryName);
        await page.locator('[name="publishDate"]').nth(0).click();
        await page.getByRole('button', { name: '1'}).nth(0).click();

        await page.locator('[name="publishers"]').click();
        await page.getByTitle('100 Mile Free Press - Canada').click();
        await page.getByRole('button', { name: 'Submit' }).click();
        

        await page.waitForTimeout(5000);

        // Assertions
        await page.getByRole('link', { name: 'Extraction' }).click();
        await page.waitForTimeout(3000);
        await page.getByRole('tab', { name: 'Entries' }).click();
        
        // await expect(page.getByRole('link', { name: testData.entry.entryName })).toBeVisible();
        await expect(page.getByText(testData.entry.entryName).first()).toBeVisible();
        await page.getByRole('link', { name: testData.entry.entryName }).first().click();

        await expect(page.locator('.styles_raw-input__1tUgz').nth(0)).toHaveValue('https://en.wikipedia.org/wiki/List_of_earthquakes_in_Nepal');
        await expect(page.locator('.styles_raw-input__1tUgz').nth(1)).toHaveValue('Test Entry');
        await expect(page.locator('.styles_raw-input__1tUgz').nth(3)).toHaveValue('100 Mile Free Press - Canada');
        await expect(page.locator('[name="publishDate"]')).toHaveValue('2026-02-01');



    });

        
    });


