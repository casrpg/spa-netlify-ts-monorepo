import { test, expect } from '@playwright/test';

const counterIncreaserButton = '[data-test-id="counter-increaser"]';

test('test counter button', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await expect(page.locator(counterIncreaserButton)).toHaveText('count is 0');
  await page.locator(counterIncreaserButton).click();
  await expect(page.locator(counterIncreaserButton)).toHaveText('count is 1');
  await page.locator(counterIncreaserButton).click();
  await expect(page.locator(counterIncreaserButton)).toHaveText('count is 2');
});

