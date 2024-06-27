// @ts-check
const { test, expect } = require('@playwright/test');

test('Get posts with number 99', async ({ request }) => {
  const response = await request.get('/posts/99');
  expect(response.status()).toBe(200);
  const post = await response.json();
  expect(post.userId).toBe(10);
  expect(post.id).toBe(99);
  expect(post.title).toBeDefined();
  expect(post.title).not.toBe('');
  expect(post.body).toBeDefined();
  expect(post.body).not.toBe('');
  console.log(post);
});
