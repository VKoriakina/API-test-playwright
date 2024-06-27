// @ts-check
const { test, expect } = require('@playwright/test');

test('Get posts', async ({ request }) => {
  const response =await request.get('/posts');
  expect(response.status()).toBe(200);
  const posts = await response.json();
  expect(posts.length).toBeGreaterThan(0);
  console.log(posts);
});
