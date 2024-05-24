"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magician = ['harry potter', 'hermoine granger', 'ron waesley', 'albus dumbledore'];
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magician[i] = 'the great' + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magician.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);
