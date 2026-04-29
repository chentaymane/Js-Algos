function slice(proces , startIndex , endIndex = proces.length-1) {
    var resultStr =""
      var resultArr =[]
    var str = false
    for (let i = startIndex ; i<= endIndex ; i++ ){
        if (typeof proces === "string"){
            resultStr+=proces[i]
            str = true
        }else{
            resultArr.push(proces[i])
        }

    }
    if (str){
        return resultStr
    }
    return resultArr
}

console.log(slice("dzdzdz" ,1 ,3))