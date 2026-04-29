function chunk(arr , n ) {
    var result =[]
    var sub =[]
    for (let i = 0 ; i<arr.length ; i++){
        if (i<n){
            sub.push(arr[i])
        }else{
            
            result.push(sub)
            sub = []
            n+=n
            i--
        }
       // console.log(sub)
    }
    if (sub.length>0){
        result.push(sub)
    }
    return result
}

//console.log(chunk([1, 2, 3, 4, 5],2))