import { test, expect } from '../fixtures';

test('Get user with id 5 and verify data consistency', async ({ request, user5 }) => {
  const allUsersResponse = await request.get('/users');
  expect(allUsersResponse.status()).toBe(200);
  const users = await allUsersResponse.json();
  const userWithId5FromAllUsers = users.find(user => user.id === user5.id);
  expect(userWithId5FromAllUsers).toBeDefined();
  expect(userWithId5FromAllUsers.name).toBe(user5.name);
  expect(userWithId5FromAllUsers.username).toBe(user5.username);
  expect(userWithId5FromAllUsers.email).toBe(user5.email);
  expect(userWithId5FromAllUsers.address.street).toBe(user5.address.street);
  expect(userWithId5FromAllUsers.address.suite).toBe(user5.address.suite);
  expect(userWithId5FromAllUsers.address.city).toBe(user5.address.city);
  expect(userWithId5FromAllUsers.address.zipcode).toBe(user5.address.zipcode);
  expect(userWithId5FromAllUsers.address.geo.lat).toBe(user5.geo.lat);
  expect(userWithId5FromAllUsers.address.geo.lng).toBe(user5.geo.lng);
  expect(userWithId5FromAllUsers.phone).toBe(user5.phone);
  expect(userWithId5FromAllUsers.website).toBe(user5.website);
  expect(userWithId5FromAllUsers.company.name).toBe(user5.company.name);
  expect(userWithId5FromAllUsers.company.catchPhrase).toBe(user5.company.catchPhrase);
  expect(userWithId5FromAllUsers.company.bs).toBe(user5.company.bs);

  const singleUserResponse = await request.get('/users/5');
  expect(singleUserResponse.status()).toBe(200);
  const userWithId5FromSingleUser = await singleUserResponse.json();


  expect(userWithId5FromSingleUser).toBeDefined();
  expect(userWithId5FromSingleUser.id).toBe(userWithId5FromAllUsers.id);
  expect(userWithId5FromSingleUser.name).toBe(userWithId5FromAllUsers.name);
  expect(userWithId5FromSingleUser.username).toBe(userWithId5FromAllUsers.username);
  expect(userWithId5FromSingleUser.email).toBe(userWithId5FromAllUsers.email);
  expect(userWithId5FromSingleUser.address.street).toBe(userWithId5FromAllUsers.address.street);
  expect(userWithId5FromSingleUser.address.suite).toBe(userWithId5FromAllUsers.address.suite);
  expect(userWithId5FromSingleUser.address.city).toBe(userWithId5FromAllUsers.address.city);
  expect(userWithId5FromSingleUser.address.zipcode).toBe(userWithId5FromAllUsers.address.zipcode);
  expect(userWithId5FromSingleUser.address.geo.lat).toBe(userWithId5FromAllUsers.address.geo.lat);
  expect(userWithId5FromSingleUser.address.geo.lng).toBe(userWithId5FromAllUsers.address.geo.lng);
  expect(userWithId5FromSingleUser.phone).toBe(userWithId5FromAllUsers.phone);
  expect(userWithId5FromSingleUser.website).toBe(userWithId5FromAllUsers.website);
  expect(userWithId5FromSingleUser.company.name).toBe(userWithId5FromAllUsers.company.name);
  expect(userWithId5FromSingleUser.company.catchPhrase).toBe(userWithId5FromAllUsers.company.catchPhrase);
  expect(userWithId5FromSingleUser.company.bs).toBe(userWithId5FromAllUsers.company.bs);
});