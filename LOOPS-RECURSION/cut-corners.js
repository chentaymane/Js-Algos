

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
    var step = 1
    while (step * 10 <= n) {
        step *= 10
    }
    while (step >= 1) {
        while (n2 + step <= n) {
            n2 += step
        }
        step /= 10
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

console.log(round(0xfffffffff + 0.56))
