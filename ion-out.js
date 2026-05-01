function ionOut(str) {
    const reg = /tion\W?$/
    var arr = str.split(" ")
    var result = []
    for (let c of arr ){
        if (reg.test(c)) {
            result.push(c.slice(0,c.length-"ion".length))
        }
    }
    return result
}

console.log(ionOut('attention, direction'))