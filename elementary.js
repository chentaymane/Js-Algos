function multiply(a , b ){
    var result = 0
    for (let i = 0 ; i<b ; i++ ){
result+=a
    }
    return result
}

function  divide(a,b) {
     var result = a
     var count = 0 
    while (result != 0 ){
        result = result-b 
        count++
        if (result< b ){
            return count
        }
    }
    return count
}

function  modulo(a,b) {
      var result = a
     

    while (result != 0 ){
        result = result-b 
        if (result< b ){
            return result
        }
    }
      
   
     return 0


}



//console.log(multiply(5 , 3 ))
//console.log(modulo(5 , 1 ))
console.log(divide(10 , 2 ))