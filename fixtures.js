const base = require('@playwright/test');
const usersJson = require('./test-data/users.json')

const fixtures = {

    user5: [usersJson.user5, {option: true}],

};

const test = base.test.extend(fixtures);
const { expect } = base;

module.exports = {
    test,
    expect
};