function sums(n ) {
    var temp =[]
    var result = []
    var cur = 1
    for (let i= 1 ; i<=n  ; i++ ){
        temp.push(cur)
        if (i+1 === n){
            i--
            n--
            result.push(temp)
            temp.slice(0,temp.length-2)
        }
    }
    return result
}
/*
function sum(arr) {
    var result = 0
    for (let n of arr ) {
        result += n
    }
    return result
}
*/
console.log(sums(4))