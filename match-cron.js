function matchCron(shema , DATA) {
    let date = new Date(DATA)
    let schema = shema.split(" ")
   
    
    let count =0
    if (Number(schema[0]) === date.getMinutes()|| (schema[0]) === "*"){
        
      count++
    }
    if (Number(schema[1]) === date.getHours() || (schema[1]) === "*"){
      count++
    }
    console.log(date.getMonth());
    
    if (Number(schema[2]) === date.getDate() || (schema[2]) === "*"){
      count++
    }

    if (Number(schema[3] )=== date.getMonth()+1 || (schema[3]) === "*"){
      count++
    }

    if (Number(schema[4]) === date.getDay() || (schema[4] )=== "*"){
        
        count++
    }
  
   
    return count === 5
}

