function groupPrice(str) {
    const reg = /[A-Z\$]{1,3}[0-9]+\.[0-9]{2}/g
    var result = []

    let matches = str.match(reg)
    if (!matches) return []

    for (let r of matches) {
        var temp = []

        temp.push(r)
        temp.push(r.match(/[0-9]+(?=\.)/)[0])
        temp.push(r.match(/(?<=\.)[0-9]{2}/)[0])

        result.push(temp)
    }

    return result
}
console.log(groupPrice("USD12.31 USD5.99 The price of the cereals is $4.00."))