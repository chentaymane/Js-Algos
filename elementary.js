function multiply(a , b ){
    var result = 0
    var negative =0
    if (a<0) {
        a = -a
        negative ++
    }
    if(b<0) {
        b = -b
        negative ++
    }

    for (let i = 0 ; i<b ; i++ ){
result+=a
    }
    if( negative === 1 ) {

        return(-result) 
    }
    return(result) 
}

function  divide(a,b) {
    
     var count = 0 
       var      negative =0

      if (a<0) {
        a = -a
        negative ++
    }
    if(b<0) {
        b = -b
        negative ++
    }
    while (a != 0 ){
         if (a< b ){
            if( negative === 1 ) {
                
                return(-count) 
            }
            return(count) 
        }
        a = a-b 
        count++
       
    }
   
}

function  modulo(a,b) {
     if (a<0) {
        a = -a
        
    }
    if(b<0) {
        b = -b
        
    }
      var result = a
     

    while (result != 0 ){
        if (result< b ){
            return(result) 
        }
        result = result-b 
    }
      
   
     return(0) 


}



//console.log(multiply(34, 78))
//return(modulo(-5 , -1 ))
console.log(modulo(34, 78))