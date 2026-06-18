function longWords(arr) {
    function condition(str) {
            return str.length >= 5 && typeof str === 'string' 
    }
    return arr.every(condition)
}

function oneLongWord(arr) {
     function condition(str) {
            return str.length >= 10 && typeof str === 'string' 
    }
      return arr.some(condition)
}

function noLongWords(arr) {
     function condition(str) {
            return !(str.length >= 7 && typeof str === 'string' )
    }
    return arr.every(condition)
}
console.log(noLongWords([0,0]));
