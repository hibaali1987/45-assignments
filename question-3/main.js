"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let personName = 'Hiba ali';
let lowercase = personName.toLowerCase();
let uppercase = personName.toUpperCase();
let titlecase = personName.split('').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
if (personName !== null && personName == '') {
    console.log(`Hello ${personName}, Here are you name in :
LowerCase: ${lowercase}
UpperCase: ${uppercase}
TitleCase: ${titlecase}`);
}
else {
    console.log('Please fill your name !');
}
