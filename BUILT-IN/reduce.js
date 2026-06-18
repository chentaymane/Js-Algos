function fold(arr , fn , j) {
     let re = 0
    for (let i =0 ; i<arr.length ; i++){
        re = fn(j, arr[i]) 
        j=re
    }
    return re
}
function foldRight(arr , fn , j) {
     let re = 0
    for (let i =arr.length-1 ; i>=0 ; i--){
        re = fn(j, arr[i]) 
        j=re
    }
    return re
}

function reduce(arr , fn , j) {
    return fold(arr.slice(1) , fn  , arr[0])
}

function reduceRight(arr , fn , j) {
    return foldRight(arr.slice(0,arr.length-1) , fn  , arr[arr.length-1])
}
let arr = [1,5,8,9]

console.log(arr.slice(0,arr.length-1));

// const adder = (a, b) => a + b
// console.log(reduce([1, 2, 3], adder) );
