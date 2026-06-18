function filterShortStateName(arr) {
    return arr.filter(i => i.length<7)
}


function filterStartVowel(arr) {
    return arr.filter(i => {
        const first = i[0].toLowerCase();
        return (
            first === 'a' ||
            first === 'e' ||
            first === 'i' ||
            first === 'o' ||
            first === 'u'
        );
    });
}
function filter5Vowels(arr) {
    return arr.filter(word => {
        let count = 0;

        for (let char of word.toLowerCase()) {
            if ("aeiou".includes(char)) {
                count++;
            }
        }

        return count >= 5;
    });
}
function filter1DistinctVowel(arr) {
    return arr.filter(word => {
        let vowels = new Set();

        for (let char of word.toLowerCase()) {
            if ("aeiou".includes(char)) {
                vowels.add(char);
            }
        }

        return vowels.size === 1;
    });
}
function myIncludes( word) {
     for (let char of word.toLowerCase()) {
        //console.log(c);
        
            if ("aeiou".includes(char)) {
               return true
            }
        }
    return false;
}

function multiFilter(arr) { 
    return arr.filter(i => 
       
         i.capital.length>=8 &&
        !"aeiou".includes(i.name[0].toLowerCase())&&
        myIncludes(i.tag) &&
          i.region != 'South' )
        }

//console.log(filterShortStateName(['fsfsfsfs','fsfs,fd','gdggdgd']));
console.log(multiFilter( [
    { tag: 'CA', name: 'California', capital: 'Sacramento', region: 'West' },
    { tag: 'HI', name: 'Hawaii', capital: 'Honolulu', region: 'West' },
    {
      tag: 'MO',
      name: 'Missouri',
      capital: 'Jefferson City',
      region: 'Midwest',
    },
    {
      tag: 'PA',
      name: 'Pennsylvania',
      capital: 'Harrisburg',
      region: 'Northeast',
    },
    {
      tag: 'RI',
      name: 'Rhode Island',
      capital: 'Providence',
      region: 'Northeast',
    },
  ]));
