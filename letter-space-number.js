function letterSpaceNumber(str) {
    const reg = /[a-zA-Z] \d(?![\da-zA-Z])/g ;
    return str.match(reg)
}

console.log(letterSpaceNumber('example 1, example 20'))