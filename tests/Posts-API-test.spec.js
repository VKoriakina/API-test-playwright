
const { test, expect } = require('@playwright/test');
const { generateRandomText } = require('../utilities/random');
const {generateRandomNumber} = require('../utilities/random')
const postsData = require('../test-data/posts.json')
const {validatePostData, validateCreatedPost} = require('../utilities/validate-posts-data')


test('Get all posts', async ({ request }) => {
  const response =await request.get('/posts');
  expect(response.status()).toBe(200);
  const posts = await response.json();
  expect(posts.length).toBeGreaterThan(0);
});

test(`Get post with ID ${postsData.posts.valid.id}`, async ({ request }) => {
  const response = await request.get(`/posts/${postsData.posts.valid.id}`);
  expect(response.status()).toBe(200);
  const post = await response.json();
  validatePostData(post, postsData.posts.valid);
  console.log(post);
});

test(`Get post with invalid ID ${postsData.posts.invalid.id} - should return 404 with empty body`, async ({ request }) => {
  const response = await request.get(`/posts/${postsData.posts.invalid.id}`);
  expect(response.status()).toBe(404);
  const responseBody = await response.text();
  expect(responseBody).toBe('{}');
});

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
  validateCreatedPost(responseBody, { title: randomTitle, body: randomBody, userId: randomUserId });
  console.log(responseBody);
});