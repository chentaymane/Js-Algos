function triangle(str , n) {
    var result = ""
    for (let i = 1 ; i <= n ; i++){
        result += str.repeat(i)+"\n"
    }
    return result.slice(0,-1)
}


console.log(triangle("*",5))