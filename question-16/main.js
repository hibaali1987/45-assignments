"use strict";
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
