"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarinfo(manufacturer, modelName, ...extraoption) {
    const carinfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraoption)
    };
    return carinfo;
}
;
let answer = storeCarinfo('honda', 'civic', { color: 'black' }, { features: ['navigation', 'power window'] });
console.log(answer);
