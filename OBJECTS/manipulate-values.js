function filterValues(obj , fn) {
    let arr = []
    for (let key in obj){
        arr.push(obj[key])
    }
    let arr2 = arr.filter(fn)
    let arr3 = Object.entries(obj)
    let result = {}

    for (let i = 0 ; i < arr3.length ; i++){
        if (arr2.includes(arr3[i][1])){
            result[arr3[i][0]]=arr3[i][1]
        }
    }
    
    return result 
}


function mapValues(obj , fn) {
    let arr = []
    for (let key in obj){
        arr.push(obj[key])
    }
    let arr2 = arr.map(fn)
   
    
    let arr3 = Object.entries(obj)
    let result = {}

    for (let i = 0 ; i < arr3.length ; i++){
            result[arr3[i][0]]=arr2[i]
        
    }
    
    return result 
}

function reduceValues(obj , fn , acc =0) {
    let arr = []
    for (let key in obj){
        arr.push(obj[key])
    }
      
    return arr.reduce(fn , acc) 
}
// const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

console.log(reduceValues({ a: 1, b: 2, c: 3 }, (acc, cr) => acc + cr, 3) )



// const nutritionDB = {
//     tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
//     vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
//     oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
//     onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
//     garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
//     paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
//     sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
//     orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
//   }