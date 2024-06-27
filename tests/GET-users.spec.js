import { test, expect} from '../fixtures';

test('Get user with id 5', async ({ request, user5 }) => {
  const response =await request.get('/users');
  expect(response.status()).toBe(200);
  const users = await response.json();
  const userWithId5 = users.find(user => user.id === user5.id);
  expect(userWithId5).toBeDefined();
  expect(userWithId5.name).toBe(user5.name);
  expect(userWithId5.username).toBe(user5.username);
  expect(userWithId5.email).toBe(user5.email);
  expect(userWithId5.address.street).toBe(user5.address.street);
  expect(userWithId5.address.suite).toBe(user5.address.suite);
  expect(userWithId5.address.city).toBe(user5.address.city);
  expect(userWithId5.address.zipcode).toBe(user5.address.zipcode);
  expect(userWithId5.address.geo.lat).toBe(user5.geo.lat);
  expect(userWithId5.address.geo.lng).toBe(user5.geo.lng);
  expect(userWithId5.phone).toBe(user5.phone);
  expect(userWithId5.website).toBe(user5.website);
  expect(userWithId5.company.name).toBe(user5.company.name);
  expect(userWithId5.company.catchPhrase).toBe(user5.company.catchPhrase);
  expect(userWithId5.company.bs).toBe(user5.company.bs);
});
