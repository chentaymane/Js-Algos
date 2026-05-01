
function sameAmount(str,rg1,rg2) {
    var count1 = 0
    var count2 = 0
    for(let c of str){
        if (rg1.test(c)){
            count1++
        }
           if (rg2.test(c)){
            count2++
        }
    } 
        return count1 === count2
}












console.log(sameAmount("aaabb", /a/g, /b/g))