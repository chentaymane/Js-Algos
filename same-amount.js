
    function sameAmount(str,rg1,rg2) {
        var count1 = str.match(rg1)
        var count2 = str.match(rg2)
        
            return count1.length === count2.length
    }












console.log(sameAmount("qqqqqqq abc qqqqqqq", /qqqqqqq/g, /abc/g))