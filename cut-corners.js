

function trunc(n) {
    if (Object.is(n, -0)) return -0
    if (n === Infinity) return Infinity
    if (n === -Infinity) return -Infinity
    var sign = 1
    if (n < 0) {
        n = -n
        sign = -1
    }
   
    var n2 = 0
       while ((n2 +1)* 10 <= n) {
        n2 *= 10
    }
    while (n2 + 1 <= n) {
        n2++
    }
    
    return sign * n2
}

function floor(n) {
    if (Object.is(n, -0)) return -0
    if (n === Infinity) return Infinity
    if (n === -Infinity) return -Infinity
    var sign = 1
    if (n < 0) {
        n = -n
        sign = -1
    }
    var n2 = trunc(n)       
    var num = n - n2
    if (num === 0) {
        return sign * n
    } else if (sign > 0) {
        return sign * n2
    } else {
        return sign * (n2 + 1)
    }
}

function ceil(n) {
    if (Object.is(n, -0)) return -0
    if (n === Infinity) return Infinity
    if (n === -Infinity) return -Infinity
    var sign = 1
    if (n < 0) {
        n = -n
        sign = -1
    }
    var n2 = trunc(n)       
    var num = n - n2
    if (num === 0) {
        return sign * n
    } else if (sign < 0) {
        return sign * n2
    } else {
        return sign * (n2 + 1)
    }
}

function round(n) {
    if (Object.is(n, -0)) return -0
    if (n === Infinity) return Infinity
    if (n === -Infinity) return -Infinity
    var sign = 1
    if (n < 0) {
        n = -n
        sign = -1
    }
    var n2 = trunc(n)      
    var num = n - n2
    if (num === 0) {
        return sign * n
    } else if (num < 0.5) {
        return sign * n2
    } else {
        return sign * (n2 + 1)
    }
}


const nums = [3.7, -3.7, 3.1, -3.1]
console.log(nums.map(round))
console.log(nums.map(floor))
console.log(nums.map(trunc))
console.log(nums.map(ceil))