// @ts-check
const { test, expect } = require('@playwright/test');

test('Get post 150 - should return 404 with empty body', async ({ request }) => {
  const response = await request.get('/posts/150');
  expect(response.status()).toBe(404);
  const responseBody = await response.text();
  expect(responseBody).toBe("{}");
});