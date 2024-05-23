
let randomArray: string[] = ['urdu', 'english', 'german', 'punjabi']
 console.log(randomArray);

 //=======================================================================

 let randomArray2: string[] = []

 randomArray2.splice(0,0,'urdu','10', 'german', 'pushto')
 

 for(let index =0; index < randomArray2.length; index++) {

    console.log(typeof(randomArray2[index]));

 }

