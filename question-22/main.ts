import { toASCII } from "punycode";

let names_array: string[] = ['hiba','ali','siddqui']

let res = names_array[0]

    if(res === undefined){
console.log("name is not available");
}


else{
    console.log('name is: ${res}');
}