
    function sameAmount(str,rg1,rg2) {
     
        var count1 = str.match(rg1)
        if (count1 === null) {
            count1 = []
        }
        var count2 = str.match(rg2)
         if (count2 === null) {
            count2 = []
        }
        console.log(count1 , count2)
            return count1.length === count2.length
    }












console.log(sameAmount("hello", /l/, /h/))

console.log(sameAmount("q qqqqqqq q qqqqqqq", /q /, /qqqqqqq/))
console.log(sameAmount("aaaaa", /aa/g, /aaa/g))