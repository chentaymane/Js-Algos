function repeat(str , num){
    var result =""
    for (let i = 0 ; i< num ; i++) {
        result += str
    }
    return result
}

console.log(repeat("a" , 4))