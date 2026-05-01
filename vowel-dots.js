function vowelDots(str) {
    const vowels =/[a-e-i-o-u]/
    var result =""
    for  (let c of str){
        result += c
        if (vowels.test(c)){
            result += "a ."
        }
    }
    return result
    
}

console.log(vowelDots("seas"))