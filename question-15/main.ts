let guestList: string[] = ['Hiba', 'ali' ,'arham' ,'ahmad']

let message: string = "you are invited in Dinner"

for (let index = 0; index < guestList.length; index++) {

    console.log('Mr.' +  guestList[index] +  '  '  +  message );


}

// start with your progress from exercise 14.Add a print statement at the end of your progress starting the name of teh guest who can't make it.

let absentGuest: string = 'Hiba'
let newGuest: string = 'ahmad'

console.log(`\nMr.  ${absentGuest} is not coming to dinner. `);

// modify your list ,replacing the name of the who can't make it with the name of the new person you are inviting.

guestList[0] = newGuest

// print a second set of invitation message .one for each person who is still in your list

for (let index = 0; index < guestList.length; index++)  {

    console.log('Mr.' + guestList[index] + ' ' + message);
}