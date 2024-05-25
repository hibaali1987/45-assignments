

function storeCarinfo(manufacturer: string, modelName: string, ...extraoption: {[key : string]: any} [] ): object {

const carinfo = {
    manufacturer,
    modelName,
    ...Object.assign({}, ...extraoption)
}

return carinfo;
};

let answer =storeCarinfo('honda','civic',{color:'black'},{features: ['navigation','power window']})

console.log(answer);