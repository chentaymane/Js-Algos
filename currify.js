function currify(fn) {
    return function len(...a) {
        if (a.length >= fn.length){
            return fn(...a)
        }else {
            return function (...b) {
                return fn(...a,...b)
            }
        }
    }
}

// const mult2 = (el1, el2) => el1 * el2
// console.log(mult2(2, 2)) // result expected 4

// const mult2Curried = currify(mult2)

// console.log(mult2Curried(2)(2)) // result expected 4
// // (same result, with a function that has technically only one argument)