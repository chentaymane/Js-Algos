function invert(obj) {
    let result = {}
    let arr =  Object.entries(obj)
    for ( let i = 0  ; i <=arr.length -1 ; i++){   
        result[arr[i][1]]=arr[i][0]     
    }
    return result
}

console.log(invert({ language: 'english' }));
