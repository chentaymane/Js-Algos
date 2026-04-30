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
  /* var i = 0
   var j = 0
   while (n!=0 ){
       if ( Array.isArray(arr[i]) ){
          n--
           
           result.push(...arr[i])
          
           var sub = flat(arr[i],n)
         
        }else {     
            result.push(arr[i])
        }
        i++
   }*/
    return result
}

console.log(flat(([1, [2, [3]]])))