function ionOut(str) {
    const reg = /tion\W?$/
    var arr = str.split(" ")
    var result = []
    for (let c of arr ){
        if (reg.test(c)) {
            result.push(c.replace(reg,""))
        }
    }
    return result
}

console.log(ionOut('attention, direction'))