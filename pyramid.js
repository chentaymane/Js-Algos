function pyramid(str , n) {
    var result = ""
    for (let i = 1 ; i <= n ; i++){
        result += " ".repeat(n-i)+str.repeat(i)+str.repeat(i-1)+"\n"
    }
    return result.slice(0,-1)
}


console.log(pyramid("*",5))