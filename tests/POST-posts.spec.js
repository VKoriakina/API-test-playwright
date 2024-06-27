
const { test, expect } = require('@playwright/test');
const { generateRandomText } = require('../utilities/random');
const {generateRandomNumber} = require('../utilities/random')


test('Create a new post', async ({ request }) => {
  const randomTitle = generateRandomText(10);
  const randomBody = generateRandomText(20);
  const randomUserId = generateRandomNumber(3);

  const response = await request.post('/posts', {
    data: {
      title: randomTitle,
      body: randomBody,
      userId: randomUserId,
    },
  });

  expect(response.status()).toBe(201);
  const responseBody = await response.json();

  expect(responseBody.title).toBe(randomTitle);
  expect(responseBody.body).toBe(randomBody);
  expect(responseBody.userId).toBe(randomUserId);
  expect(responseBody.id).toBeDefined();
  console.log(responseBody);
});