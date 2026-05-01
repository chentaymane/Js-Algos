function letterSpaceNumber(str) {
    const reg = /[a-zA-Z] \d(?![\da-zA-Z])/g ;
    if (str.match(reg) === null ){
        return []
    }
    return str.match(reg)
}

console.log(letterSpaceNumber('I like 7up.'))