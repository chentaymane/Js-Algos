function isValid(date) {
   
    if (date instanceof Date){
        return !isNaN(date)
    } else if (typeof date === "number") {
        return !isNaN(new Date(date))
    }
    return false 
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

console.log(isValid())