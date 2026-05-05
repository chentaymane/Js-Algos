function isValid(date) {
    return date != "Invalid Date"
}

function isAfter(d1,d2) {
    return d1>d2
}
function isBefore(d1,d2) {
    return d1<d2
}

function isFuture(d1,d2) {
    return isValid(d1)&& isAfter(d1,Date.now())
}
function isPast(d1,d2) {
    return isValid(d1)&& isBefore(d1,Date.now())
}