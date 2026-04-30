function findExpression(from, to, path) {

    if (from === to) {
        return path
    }

   
    if (from > to) {
        return undefined
    }

  
    let tryMul = findExpression(from * 2, to, path +mul2)

    if (tryMul !== undefined) {
        return tryMul
    }

  
    let tryAdd = findExpression(from + 4, to, path + add4)

    return tryAdd
}
