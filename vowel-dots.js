const vowels =/[a-e-i-o-u]/
function vowelDots(str) {
    var result =""
    for  (let c of str){
        result += c
        if (vowels.test(c)){
            result += "."
        }
    }
    return result
    
}

console.log(vowelDots("seas"))