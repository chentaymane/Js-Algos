function round(n) {
    if (n === Infinity){
        return Infinity
    }
      if (n === -Infinity){
        return -Infinity
    }
    var sign = 1
    if (n <0){
        n=-n
    sign = -1
    }
    var n2 = parseInt(n,10)

    num = n-n2
    if (num === 0) {
return sign*n
    }else if (num < 0.5){
        return sign*n2
    }else {
        return sign*(n2+1)
    }

    
}
function floor(n) {
    var sign = 1
 
    if (n === Infinity){
        return Infinity
    }
      if (n === -Infinity){
        return -Infinity
    }
    if (n <0){
        n=-n
    sign = -1
    }
    var n2 = parseInt(n,10)

    num = n-n2
    if (num === 0) {
return sign*n

}    else if (sign>0) {
     return sign*n2
    }else {
        return sign*(n2+1)
    }

    
}
function ceil(n) {

    if (n === Infinity){
        return Infinity
    }
      if (n === -Infinity){
        return -Infinity
    }
    var sign = 1
    if (n <0){
        n=-n
    sign = -1
    }

    var n2 = parseInt(n,10)
    num = n-n2

    if (num === 0) {
        return sign*n
    }else if (sign < 0){
        return sign*n2
    }else {
        return sign*(n2+1)
    }

    
}
function trunc(n) {
    if (Object.is(n, -0)) {
        return -0
    }
    if (n === Infinity) {
        return Infinity
    }
    if (n === -Infinity) {
        return -Infinity
    }
    var sign = 1
    if (n < 0) {
        n = -n
        sign = -1
    }
    n = parseInt(n, 10)
    return sign * n
}




//console.log(round(-15.0005) , Math.round(-15.0005))
//console.log(ceil(15.55) , Math.ceil(15.55))


console.log(trunc(-Infinity),Math.trunc(-Infinity))
console.log(trunc(-45.95),Math.trunc(-45.95))
console.log(trunc(-45.05),Math.trunc(-45.05))
console.log(trunc(-0),Math.trunc(-0))// -0 -0
console.log(trunc(-0,648),Math.trunc(-0,648))// -0 -0
console.log(trunc(0),Math.trunc(0))
console.log(trunc(4),Math.trunc(4))
console.log(trunc(45.05),Math.trunc(45.05))
console.log(trunc(45.95),Math.trunc(45.95))
console.log(trunc(Infinity),Math.trunc(Infinity))
console.log(-1*0)
