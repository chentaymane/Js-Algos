function dayOfTheYear(date) {
    let d = new Date(date) 
   console.log(d.getFullYear());
   
    
  
    let first = new Date(0);
    first.setFullYear(d.getFullYear(), 0, 1);
   
   let  diff = new Date(d-first)
    if (diff.getTime()<0){
        -diff.getTime()
    }
   
    return Math.floor(diff.getTime()/1000/60/60/24)
}

console.log(dayOfTheYear('0001-02-15'));
