function makesandwich (item: string[]){
    console.log('making your sandwich with:');

    item.forEach(element  => console.log(" -" + element));

    console.log('enjoy your sandwich !\n');

}

makesandwich(['ham','cheese','lettuce']);

makesandwich(['turkey', 'bacon']);

makesandwich([ 'peanut butter' , 'jelly']);