function indexOf(arr , item , indxSearch = 0) {
    for (let i = indxSearch ; i < arr.length ; i++){
        if (arr[i] === item) {
            return i
        }
    }
    return -1
}

function lastIndexOf(arr , item , indxSearch = arr.length - 1) {
    if (indxSearch >= arr.length) {
        indxSearch = arr.length - 1
    }

    for (let i = indxSearch ; i >= 0 ; i--){
        if (arr[i] === item) {
            return i
        }
    }
    return -1
}

function includes(arr , item) {
    return indexOf(arr , item) !== -1
}

console.log(lastIndexOf([0, 0, 1, 1], 1, 3))