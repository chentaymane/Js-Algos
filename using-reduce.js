function adder(arr ,j=0) {
    return arr.reduce((p,c )=> p+c ,j )
}
function isOdd(n) {
    return n % 2 !== 0
}
function sumOrMul(arr,j=0) {
    return arr.reduce((n,c )=> {
        if (isOdd(c)){
          return  n+c
        }else{
          return n*c
        }     
    },j)
}

function funcExec(arr ,j=0) {
   return  arr.reduce((p,c)=> c(p),j)
}
console.log(adder([1, 2, 3, 4]));


