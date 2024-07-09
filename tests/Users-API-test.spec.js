import { test, expect } from '../fixtures';
const {validateUserDataFromSingleUser, validateUserDataFromAllUsers} = require('../utilities/validate-users-data')
const userData = require('../test-data/users.json')

test(`Get user with id ${userData.user5.id} from all users`, async ({ request, user5 }) => {
  const allUsersResponse = await request.get('/users');
  expect(allUsersResponse.status()).toBe(200);
  const users = await allUsersResponse.json();
  const userWithId5FromAllUsers = users.find(user => user.id === userData.user5.id);
  validateUserDataFromAllUsers(userWithId5FromAllUsers, user5);
});

test(`Get user with id ${userData.user5.id} from single user endpoint`, async ({ request, user5 }) => {
  const singleUserResponse = await request.get(`/users/${userData.user5.id}`);
  expect(singleUserResponse.status()).toBe(200);
  const userWithId5FromSingleUser = await singleUserResponse.json();
  validateUserDataFromSingleUser(userWithId5FromSingleUser, user5);
});
