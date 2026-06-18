function isFriday(date) {
    let day = date.getDay()
    return day === 5
}
function isWeekend(date) {
    let day = date.getDay()
    
    return day === 6 || day === 0  
}
function isLeapYear(date) {
    date.setMonth(1)
   date.setDate(29)
   if (date.getDate()===29){
       return true
   }
   return false
}
function isLastDayOfMonth(date) {
    date.setDate(date.getDate()+1)
    if (date.getDate() === 1){
        return true
    }
    return false
}
//console.log(isWeekend(new Date(2000, 9, 5)));
let d = new Date('2014-08-29')
console.log(isFriday(d));

 