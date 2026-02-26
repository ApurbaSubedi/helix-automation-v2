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
        await page.waitForTimeout(5000);

        //Assertions
        await page.reload({ waitUntil: 'load' });
        await page.waitForTimeout(3000);
        await page.locator('[name="name"]').fill(testData.event.eventName);
        await page.getByRole('button', { name: 'Apply' }).first().click();


        // await expect(page.getByRole('link', { name: 'Test Event Automation'})).first().toBeVisible();
        await expect(page.getByText('Test Event Automation').first()).toBeVisible();
        await page.getByRole('link', { name: 'Test Event Automation' }).first().click();
        // await page.waitForTimeout(3000);

        await expect(page.locator('._text-block_1hdvv_1').nth(0)).toContainText('Disaster');
        await expect(page.locator('._text-block_1hdvv_1').nth(1)).toContainText('2026-02-01');
        await expect(page.locator('._text-block_1hdvv_1').nth(3)).toContainText('Earthquake');
        await expect(page.locator('._text-block_1hdvv_1').nth(5)).toContainText('Abyei Area');
        




        
        
        


            
    });

        
    });
// await expect(page.getByRole('link',{name:'Dashboard'})).toBeVisible();
//         await page.waitForTimeout(1000);
//         await expect(page.getByRole('link',{name:'Countries'})).toBeVisible();
//         await page.waitForTimeout(1000);
//         await expect(page.getByRole('link',{name:'Crises'})).toBeVisible();
//         await page.waitForTimeout(1000);
//         await expect(page.getByRole('link',{name:'Events'})).toBeVisible();
//         await page.waitForTimeout(1000);
//         await expect(page.getByRole('link',{name:'Extraction'})).toBeVisible();
//         await page.waitForTimeout(1000);
//         await expect(page.getByRole('link',{name:'Reports'})).toBeVisible();
//         await page.waitForTimeout(1000);
//         await expect(page.getByRole('link',{name:'QA'})).toBeVisible();
//         await page.waitForTimeout(1000);
//         await expect(page.getByRole('link',{name:'Admin'})).toBeVisible();
//         await page.waitForTimeout(1000);





//         await expect(page.getByText('Reset').first()).toBeVisible();
//         await expect(page.getByText('Apply').first()).toBeVisible();
//         await expect(page.getByRole('button',{name:'Add Event'})).toBeVisible();
//         await expect(page.getByRole('button',{name:'Export'})).toBeVisible();

//         await expect(page.getByText('Name').first()).toBeVisible(); 
//         await expect(page.getByText('Created By').first()).toBeVisible(); 
//         await expect(page.getByText('Date Range').first()).toBeVisible(); 
//         await expect(page.getByText('Causes').first()).toBeVisible(); 
//         await expect(page.getByText('Review Status').first()).toBeVisible(); 
//         await expect(page.getByText('Crises').first()).toBeVisible(); 
//         await expect(page.getByText('Countries').first()).toBeVisible();

