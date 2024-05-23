"use strict";
//Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ['Hiba', 'ali', 'arham', 'ahmad'];
let message = "you are invited in Dinner";
for (let index = 0; index < guestList.length; index++) {
    console.log('Mr.' + guestList[index] + '  ' + message);
}
// start with your progress from exercise 14.Add a print statement at the end of your progress starting the name of teh guest who can't make it.
let absentGuest = 'Hiba';
let newGuest = 'ahmad';
console.log(`\nMr.  ${absentGuest} is not coming to dinner. `);
// modify your list ,replacing the name of the who can't make it with the name of the new person you are inviting.
guestList[0] = newGuest;
// print a second set of invitation message .one for each person who is still in your list
for (let index = 0; index < guestList.length; index++) {
    console.log('Mr.' + guestList[index] + ' ' + message);
}
// start with your program from exercise 15 .Add a print statement to the end for your program informing people taht you found a bgger dinner table.
console.log('\n we found a bigger dinner table ');
//Add one new guest to the beginning of your array.
let guestName1 = guestList.unshift('faiza');
//Add one new guest to the middle of your array.
let guestName2 = guestList.splice(2, 0, 'hiba');
console.log(guestList);
// use append() to add one new guest to the end of your list.
let guestName3 = guestList.push('siddiqui');
//  Print a new set of invitation messages, one for each person in your list.
for (let index = 0; index < guestList.length; index++) {
    console.log('Mr.' + guestList[index] + ' ' + message);
}
// Add a new line that prints a message saying that you can invite only two people for dinner.
console.log('\n sorry we can not arrange a big table . we can only invite two peoples to dinner');
// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guestList.length >= 2) {
    let removedGuest1 = guestList.pop();
    console.log(`sorry Mr .${removedGuest1}. you are not invited to dinner.`);
}
let removeGuest1 = guestList.pop();
console.log(`Sorry Mrs. ${removeGuest1}.you  are not  invited to dinner.`);
let removeGuest2 = guestList.pop();
console.log(`Sorry Mrs. ${removeGuest2}.you  are not  invited to dinner.`);
let removeGuest3 = guestList.pop();
console.log(`Sorry Mrs. ${removeGuest3}.you  are not  invited to dinner.`);
let removeGuest4 = guestList.pop();
console.log(`Sorry Mrs. ${removeGuest4}.you  are not  invited to dinner.`);
// Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let index = 0; index < guestList.length; index++) {
    console.log('Mr.' + guestList[index] + ' \n you are still invited to dinner.');
}
// Remove the last two names from your list ,so you have an empty list.
let removeGuest5 = guestList.splice(0, 2);
// print your list to make sure you actually have an empty list at the end of your program
console.log(guestList);
console.log(`currently, we are inviting ${guestList.length} people to the dinner.`);
