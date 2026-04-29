function reverse(arr) {
    var result =[]
    for (let i=arr.length-1 ; i>=0 ; i--){
        result.push(arr[i])
    }
    return result
}

console.log(reverse([4,5,8,6,1,85]))