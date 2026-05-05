function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
}
function firstDayWeek(week,year ) {
    let date = {
        day : 0 ,
        year : year,
        month : 0
    }
   
   for (let i =0 ; i< week*7; i++){
        date.day ++
        if (date.year ===)
   }
}

console.log(firstDayWeek(52,1000))