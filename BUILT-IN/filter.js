function filter(arr, fn) {
    let result = []
    for (let i =0 ; i<arr.length ; i++){
        if (fn(arr[i],i,arr)){
            result.push(arr[i])
        }
    }
    return result
}

function reject(arr, fn) {
    let re = []
     
    for (let i =0 ; i<arr.length ; i++){
        if (!fn(arr[i],i,arr)){
            re.push(arr[i])
        }
    }
    return re
}
function partition(arr, fn) {
    let re = []
  
     re.push(filter(arr,fn))
     re.push(reject(arr,fn))
     return re
    
}