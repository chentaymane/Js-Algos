function nasa(n) {
    var result =""
    for (let i = 1 ; i<=n ; i++ ){
        if (i%5 ===0 && i%3 ===0){
            result += "NASA"
        }else if (i%5===0 ){
            result += "SA"
        }else if (i%3 ===0){
                result += "NA"
        }else {

            result += i.toString()
        }
    }
    return result
}

console.log(nasa(15))