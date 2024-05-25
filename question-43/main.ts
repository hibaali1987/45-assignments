let magician :string[] =['harry potter','hermoine granger','ron waesley','albus dumbledore'];

function copyarray(magicianArray: string[]){
    return ['...arr']
}

function make_great (magicianArray:string[]){
    for(let i=0; i<magicianArray.length; i++){

    magician[i] = 'the great' + magicianArray[i]

    }

}
function show_magicians(magicians: string[]){
     magicians.forEach(element =>{
        console.log(element);
     });
}
 const copymagicianArray = copyarray(magician);


make_great(copymagicianArray);

console.log('this is my original array');
show_magicians(magician);

console.log('this is my modified copy of the array');
show_magicians(copymagicianArray
);

