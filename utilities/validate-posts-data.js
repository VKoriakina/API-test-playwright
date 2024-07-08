const { expect } = require('@playwright/test');

function validatePostData(actualPost, expectedPost) {
    expect(actualPost.userId).toBe(expectedPost.userId);
    expect(actualPost.id).toBe(expectedPost.id);
    expect(actualPost.title).toBeDefined();
    expect(actualPost.title).not.toBe('');
    expect(actualPost.body).toBeDefined();
    expect(actualPost.body).not.toBe('');
}


function validateCreatedPost(actualPost, expectedPost) {
    expect(actualPost.title).toBe(expectedPost.title);
    expect(actualPost.body).toBe(expectedPost.body);
    expect(actualPost.userId).toBe(expectedPost.userId);
    expect(actualPost.id).toBeDefined();
}


module.exports = { validatePostData, validateCreatedPost };