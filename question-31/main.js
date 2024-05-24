"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
Object.defineProperty(exports, "__esModule", { value: true });
//If the list is empty, print the message We need to find some users.
//  Remove all of the usernames from your array, and make sure the correct message is printed.
let userNames = ['admin', 'junaid', 'zeeshan', 'kamran', 'danial'];
if (userNames.length === 0) {
    console.log('we need to find some users!');
}
else {
    userNames = [];
    console.log(' all user names have been removed .' + userNames.length);
}
