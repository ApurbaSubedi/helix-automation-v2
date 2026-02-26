    import { test, expect } from '@playwright/test';
    import testData from '../fixtures/testData.json';

    test.describe('Event Creation', () => {
    
    test.beforeEach(async ({ page }) => {
    await page.goto ("/dashboard");
    });
    
    test('Event Creation',async ({ page }) => {
        
        await page.getByRole('link', { name: 'EVENTS' }).nth(0).click();
        await page.getByRole('button', { name: 'Add Event' }).click();
        await page.waitForTimeout(1000);

        await page.locator('._event-form_1auw0_1 [name="name"]').nth(0).fill(testData.event.eventName);
        await page.locator('[name="eventType"]').nth(0).click();
        await page.getByRole('button', { name: 'Disaster'}).click();
        await page.locator('[name="disasterSubType"]').click();
        await page.getByRole('button', { name: 'Earthquake'}).click();

        await page.locator('[name="countries"]').nth(1).click();
        await page.locator('button[title="Abyei Area"]').click(); 
        await page.locator('[name="startDate"]').nth(0).click();
        await page.getByRole('button', { name: '1'}).nth(0).click();

        await page.getByTestId('text-area').fill(testData.event.eventDescription);
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.waitForTimeout(10000);

        //Assertions
        await page.reload({ waitUntil: 'load' }); 
        await page.waitForTimeout(10000);

        // await expect(page.getByRole('link', { name: 'Test Event Automation'})).first().toBeVisible();
        await expect(page.getByText('Test Event Automation').first()).toBeVisible();
        await page.getByRole('link', { name: 'Test Event Automation' }).first().click();
        await page.waitForTimeout(3000);

        await expect(page.locator('._value_1hdvv_2').nth(0)).toContainText('Disaster');
        await expect(page.locator('._value_1hdvv_2').nth(1)).toContainText('2026-02-01');
        await expect(page.locator('._value_1hdvv_2').nth(3)).toContainText('Earthquake');
        await expect(page.locator('._value_1hdvv_2').nth(4)).toContainText('Abyei Area');
        




        
        
        


            
    });

        
    });


