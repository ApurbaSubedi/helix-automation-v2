import { test as setup, expect } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
await page.goto('/sign-in/');
await page.locator('[name="email"]').fill(process.env.TEST_EMAIL!);
await page.locator('[name="password"]').fill(process.env.TEST_PASSWORD!);
await page.getByRole('button', { name: 'Sign In' }).click();
await expect(page.getByText('Dashboard').first()).toBeVisible();

await page.context().storageState({ path: authFile });
});