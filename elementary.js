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

        console.log(-result) 
    }
    console.log(result) 
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
        a = a-b 
        count++
        if (a< b ){
             if( negative === 1 ) {

        console.log(-count) 
    }
            console.log(count) 
        }
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
        result = result-b 
        if (result< b ){
            console.log(result) 
        }
    }
      
   
     console.log(0) 


}



multiply(34, 78)
//console.log(modulo(-5 , -1 ))
//console.log(divide(-10 , 1 ))