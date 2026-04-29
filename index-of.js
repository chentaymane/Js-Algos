function indexOf(arr , item , indxSearch =0) {
    for (let i = indxSearch ; i< arr.length ; i++){
        if (arr[i] === item) {
            return i
        }
    }
    return -1
}

function lastIndexOf(arr , item , indxSearch =arr.length ) {
            
    for (let i = indxSearch -1; i>= 0 ; i--){
        if (arr[i] === item) {
            return i
        }
    }
    return -1
}
function includes(arr , item) {
    if (indexOf(arr , item )!= -1){
        return true 
    }
    return false 
}

console.log(includes([0,5,8,4,9,7,6,4,] , 2 ))