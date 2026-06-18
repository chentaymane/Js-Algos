function citiesOnly(objcts) {
    return objcts.map(c => c.city)
}

function upperCasingStates(objcts) {
    return objcts.map(c => {
        let arr = c.split(' ')
        let result = ''
        for (let j = 0 ; j< arr.length ;j++){
            if (j< arr.length-1){
                result += arr[j][0].toUpperCase()+arr[j].slice(1)+' '
            }else {

                result += arr[j][0].toUpperCase()+arr[j].slice(1)
            }
        }
    return result})
}


function fahrenheitToCelsius(obj) { 
    return obj.map(i => {
       let arr = i.split('°')
            let num = Number(arr[0])
            return (Math.floor((num-32)*5/9)+'°C').toString()
    })
}

function trimTemp(arr) {
    return arr.map(o => ({
        ...o,
        temperature: o.temperature.replaceAll(' ', '')
    }));
}

function tempForecasts(arr) {
    return arr.map(o => {
      
        let arr = o.state.split(' ')
        let result = ''
        for (let j = 0 ; j< arr.length ;j++){
            if (j< arr.length-1){
                result += arr[j][0].toUpperCase()+arr[j].slice(1)+' '
            }else {

                result += arr[j][0].toUpperCase()+arr[j].slice(1)
            }
        }
        
        let num = (Math.floor((parseInt(o.temperature)-32)*5/9)+'°Celsius').toString()
            return num+' in '+o.city+', '+result
    })
}


console.log(tempForecasts([
  {
    city: 'Pasadena',
    temperature: ' 101 °F',
    state: 'california',
    region: 'West',
  },
]));

console.log(citiesOnly([
  {
    city: 'Los Angeles',
    temperature: '  101 °F   ',
  },
  {
    city: 'San Francisco',
    temperature: ' 84 ° F   ',
  },
]));


console.log(upperCasingStates(['alabama', 'new jersey']) )

console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F', '101°F']));
console.log(trimTemp([
  { city: 'Los Angeles', temperature: '  101 °F   ' },
  { city: 'San Francisco', temperature: ' 84 ° F   ' },
]));


