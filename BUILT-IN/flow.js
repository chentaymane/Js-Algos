function flow(arr) {
    let first = arr[0]
    arr =   arr.slice(1) 
    return function (...args) {

        return arr.reduce((p,c)=>  c(p)   ,first(...args))
    }
  
} 
    


// const square = (nbr) => nbr * nbr
// const add2Numbers = (nbr1, nbr2) => nbr1 + nbr2

// const flowedFunctions = flow([add2Numbers, square])
// console.log(flowedFunctions(2, 3));
//  // -> 25