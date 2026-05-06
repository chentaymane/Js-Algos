function map(arr , fn) {
    var re = []
    for ( let i =0 ; i<arr.length ; i++){
        re.push(fn(arr[i], i , arr)) 
    }
    return re
}

function flatMap(arr , fn) {
    var result = map(arr,fn)
         return flat(result)
}

function flat(arr , i=1, result=[] ) {
    for (let a of arr){
  if (Array.isArray(a) && i> 0){
        flat(a,i-1, result)
    }else {
        result.push(a)
    }
    }
    return result
  
}


console.log(flat([1,2,[5,2]]));
