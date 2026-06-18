function format(date, str) {
  const year  = date.getFullYear();
  const month = date.getMonth();       // 0-based
  const day   = date.getDate();
  const hours = date.getHours();
  const mins  = date.getMinutes();
  const secs  = date.getSeconds();

  const MONTHS_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const MONTHS_LONG  = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const DAYS_SHORT   = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const DAYS_LONG    = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  const absYear = Math.abs(year);
  const era   = year > 0 ? 'AD' : 'BC';
  const eraFull = year > 0 ? 'Anno Domini' : 'Before Christ';
  const hour12  = hours % 12 || 12;   // 1-12
  const ampm    = hours < 12 ? 'AM' : 'PM';
  const pad     = (n) => String(n).padStart(2, '0');

  // Map of token -> replacement (longest tokens first to avoid partial matches)
  const tokens = {
    'GGGG': eraFull,
    'MMMM': MONTHS_LONG[month],
    'EEEE': DAYS_LONG[date.getDay()],
    'yyyy': String(absYear).padStart(4, '0'),
    'MMM' : MONTHS_SHORT[month],
    'E'   : DAYS_SHORT[date.getDay()],
    'MM'  : pad(month + 1),
    'dd'  : pad(day),
    'HH'  : pad(hours),
    'hh'  : pad(hour12),
    'mm'  : pad(mins),
    'ss'  : pad(secs),
    'G'   : era,
    'M'   : String(month + 1),
    'd'   : String(day),
    'H'   : String(hours),
    'h'   : String(hour12),
    'm'   : String(mins),
    's'   : String(secs),
    'y'   : String(absYear),
    'a'   : ampm,
  };

  // Build a regex that matches any token (longest-first order preserved via alternation)
  const tokenPattern = new RegExp(
    Object.keys(tokens).map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'),
    'g'
  );

  return str.replace(tokenPattern, (match) => tokens[match]);
}

// Tests 
const d = new Date('7 January 1985, 3:08:19');
console.log(format(d, 'HH(mm)ss [dd] <MMM>'));        // 03(08)19 [07] <Jan>
console.log(format(d, 'yyyy-MM-dd'));                  // 1985-01-07
console.log(format(d, 'MMMM d, y'));                   // January 7, 1985
console.log(format(d, 'EEEE, MMMM dd yyyy'));          // Monday, January 07 1985
console.log(format(d, 'h:mm a'));                      // 3:08 AM
console.log(format(d, 'hh:mm:ss a'));                  // 03:08:19 AM
console.log(format(d, 'G yyyy'));                      // AD 1985
console.log(format(d, 'GGGG'));                        // Anno Domini
console.log(format(d, 'E'));                           // Mon
console.log(format(d, 'H:m:s'));                       // 3:8:19

// // BC date (585 BC — getFullYear() returns -585)
// const eclipse = new Date(-584, 4, 28); // May 28, 585 BC
// console.log(format(eclipse, 'y'));     // 585  (not -585)
// console.log(format(eclipse, 'yyyy'));  // 585
// console.log(format(eclipse, 'G y'));   // BC 585
// console.log(format(eclipse, 'GGGG y')); // Before Christ 585