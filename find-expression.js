function findExpression(to, from = 1, path = "1") {

    if (from === to) {
        return path
    }

    if (from > to) {
        return undefined
    }

    let tryMul = findExpression(to, from * 2, path + mul2)

    if (tryMul !== undefined) {
        return tryMul
    }

    let tryAdd = findExpression(to, from + 4, path + add4)

    return tryAdd
}

console.log(findExpression(8))