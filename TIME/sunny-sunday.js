const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function sunnySunday(date) {
    // get number of days since 01/01/0001
    const start = new Date(Date.UTC(1, 0, 1));
    const diff = Math.floor((date - start) / (1000 * 60 * 60 * 24));

    // use modulo like you wanted
    return days[(diff % 6 + 6) % 6];
}
console.log(sunnySunday(new Date('0001-12-01')));
