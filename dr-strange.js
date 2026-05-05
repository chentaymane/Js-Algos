function addWeek(date) {
    const months = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
"secondMonday", "secondTuesday", "secondWednesday", "secondThursday",
"secondFriday", "secondSaturday", "secondSunday"];
    datee = new Date(date) 
    day = months[(datee.getUTCDate()-1)%14]
    console.log(day);
}


function timeTravel(date) {
    let date2 = new Date(date.date)
    date2.setHours(date.hour)
    date2.setMinutes(date.minute)
    date2.setSeconds(date.second)
    return date2
}
/*
console.log(timeTravel({
    date: new Date("2020-05-29 23:25:22"),
    hour: 21,
    minute: 22,
    second: 22,
}).toString())
// Output:
// Fri May 29 2020 21:22:22 GMT+0100 (Western European Summer Time)
addWeek(new Date("0001-01-01")); // Output: 'Monday'
addWeek(new Date("0001-01-02")); // Output: 'Tuesday'
addWeek(new Date("0001-01-07")); // Output: 'Sunday'
addWeek(new Date("0001-01-08")); // Output: 'secondMonday'
addWeek(new Date("0001-01-09")); // Output: 'secondTuesday')
//console.log(26%14)
*/
    