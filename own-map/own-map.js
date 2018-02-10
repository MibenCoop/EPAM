//Example functions
function double(a) {
    return a*2;
}
function triple(a) {
    return a*3;
}


function map(arr, func) {
    let resArr = [];
    for (let elem of arr) {
        resArr = resArr.concat(func(elem));
    }
    return resArr;
}

//Test array
let arr = [1,2,3];
console.log(map(arr, double));
console.log(map(arr, triple));