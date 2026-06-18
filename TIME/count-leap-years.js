function Leap(date) {
    date.setMonth(1)
   date.setDate(29)
   if (date.getDate()===29){
       return true
   }
   return false
}
function countLeapYears(date) {
    let d = new Date(date)
    let count = 0

    for (let i = 1;i<d.getFullYear();i++){
        if (Leap(new Date(d.getFullYear()-i,0,1))){
            count++
        }
    }
    return count
}

console.log(countLeapYears(new Date('1664-08-09')));
