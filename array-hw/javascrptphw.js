let trr = [12, 4, 27, 18, 11, 20, 24];

console.log("Using forEach function")
trr.forEach(function(x){
    console.log(x)
})


console.log("Using map function")
trr.map(function(x){
    console.log(x)
})


console.log("Print an new array with it's square");
let newArr = trr.map(function(x){
    return x*x;
})
console.log(newArr)


// console.log("Now doing same with Es6 ");
// let valuePrint = trr.forEach( (x) => x )
// // console.log(valuePrint)

// const castArray = (value) => (value.forEach( (x) => x ));
// console.log(castArray(trr))


const maxValue = trr.reduce(function(prev,curr){
    return Math.max(prev, curr)
}, 0)
console.log(maxValue);


const minValue = trr.reduce(function(prev,curr){
    return Math.min(prev, curr)
})
console.log(minValue);

function sumation(array){
    let sum = 0;
    for(let a of array){
        sum += a;
    }
    console.log(sum)    
}
sumation(trr)

