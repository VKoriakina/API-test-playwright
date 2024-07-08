import { test, expect } from '../fixtures';

function validateUserDataFromAllUsers(userFromAllUsers, expectedUserData) {
    expect(userFromAllUsers).toBeDefined();
    expect(userFromAllUsers.name).toBe(expectedUserData.name);
    expect(userFromAllUsers.username).toBe(expectedUserData.username);
    expect(userFromAllUsers.email).toBe(expectedUserData.email);
    expect(userFromAllUsers.address.street).toBe(expectedUserData.address.street);
    expect(userFromAllUsers.address.suite).toBe(expectedUserData.address.suite);
    expect(userFromAllUsers.address.city).toBe(expectedUserData.address.city);
    expect(userFromAllUsers.address.zipcode).toBe(expectedUserData.address.zipcode);
    expect(userFromAllUsers.address.geo.lat).toBe(expectedUserData.geo.lat);
    expect(userFromAllUsers.address.geo.lng).toBe(expectedUserData.geo.lng);
    expect(userFromAllUsers.phone).toBe(expectedUserData.phone);
    expect(userFromAllUsers.website).toBe(expectedUserData.website);
    expect(userFromAllUsers.company.name).toBe(expectedUserData.company.name);
    expect(userFromAllUsers.company.catchPhrase).toBe(expectedUserData.company.catchPhrase);
    expect(userFromAllUsers.company.bs).toBe(expectedUserData.company.bs);
}

function validateUserDataFromSingleUser(userFromSingleUser, expectedUserData) {
    expect(userFromSingleUser).toBeDefined();
    expect(userFromSingleUser.id).toBe(expectedUserData.id);
    expect(userFromSingleUser.name).toBe(expectedUserData.name);
    expect(userFromSingleUser.username).toBe(expectedUserData.username);
    expect(userFromSingleUser.email).toBe(expectedUserData.email);
    expect(userFromSingleUser.address.street).toBe(expectedUserData.address.street);
    expect(userFromSingleUser.address.suite).toBe(expectedUserData.address.suite);
    expect(userFromSingleUser.address.city).toBe(expectedUserData.address.city);
    expect(userFromSingleUser.address.zipcode).toBe(expectedUserData.address.zipcode);
    expect(userFromSingleUser.address.geo.lat).toBe(expectedUserData.geo.lat);
    expect(userFromSingleUser.address.geo.lng).toBe(expectedUserData.geo.lng);
    expect(userFromSingleUser.phone).toBe(expectedUserData.phone);
    expect(userFromSingleUser.website).toBe(expectedUserData.website);
    expect(userFromSingleUser.company.name).toBe(expectedUserData.company.name);
    expect(userFromSingleUser.company.catchPhrase).toBe(expectedUserData.company.catchPhrase);
    expect(userFromSingleUser.company.bs).toBe(expectedUserData.company.bs);
}

module.exports = {validateUserDataFromSingleUser, validateUserDataFromAllUsers}