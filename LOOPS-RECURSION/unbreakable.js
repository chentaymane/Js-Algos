function split(str, splt) {
    
    var array = []
    var tempStr = ""


    var from =0
  if (splt === "") {
        var chars = []
        for (let i = 0; i < str.length; i++) {
            chars.push(str[i])
        }
        return chars
    }

    for(let i =0 ; i< str.length ; i++){
      
        var beginIndex = str.indexOf(splt,from)
     
           //console.log(beginIndex)
          // console.log(i)

          
        if (i != beginIndex){
            tempStr += str[i]
        }else{
            

         
                 array.push(tempStr)
                 tempStr = ""
                 
                
                 i+=splt.length-1
                 from = i+1
        }
    }
   

         array.push(tempStr)
       
        
        
    return array
    
}


function join(arry, elmnt)  {
var result = ""
    for (let i=0 ; i<arry.length ; i++) {
        if (i<arry.length -1) {

            result += arry[i] + elmnt
        }else{

            result += arry[i] 
        }

    }
    return result
}

console.log(join(["Fire", "Air", "Water"],","))
console.log(split('rrrr', 'rr'))