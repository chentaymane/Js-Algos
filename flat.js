function flat(arr , n=1) {
    var result = []
    
    for (let i = 0 ; i<arr.length ; i++ ) {
      if ( Array.isArray(arr[i])&&n>0 ){
          var sub = flat(arr[i] , n-1)
            result.push(...sub)
        }else {
            result.push(arr[i])
        }
     
    }
  
    return result
}

console.log(flat(([1, [2, [3]]])))