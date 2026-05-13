function deepCopy(obj) {

    if (obj === null || typeof obj !== "object") {
        return obj
    }
    if (Array.isArray(obj)) {
        return obj.map(item => deepCopy(item))
    }
    if (obj instanceof RegExp) {
        return obj
    }
    let copy = {}

    for (let key in obj) {
        copy[key] = deepCopy(obj[key])
    }

    return copy
}