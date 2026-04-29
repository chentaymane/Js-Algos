function pyramid(str , n) {
    var result = ""
    var lkhwa = ""
    for (let i=0 ;i<str.length ; i++){
        lkhwa+=" "
    }
    for (let i = 1 ; i <= n ; i++){
        result += lkhwa.repeat(n-i)+str.repeat(i)+str.repeat(i-1)+"\n"
    }
    return result.slice(0,-1)
}


console.log(pyramid('{}', 5))
console.log(pyramid('*', 5))