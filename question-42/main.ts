let magician :string[] =['harry potter','hermoine granger','ron waesley','albus dumbledore'];

function make_great (magicianArray: string[]){


for(let i=0; i<magicianArray.length; i++){
      magician[i] =  'the great'   + magicianArray[i]
}
}


function show_magicians(magicians: string[]){

    magician.forEach(element => {
        console.log(element);

    });

}
make_great(magician);
show_magicians(magician)



