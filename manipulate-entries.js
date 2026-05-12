// const nutritionDB = {
//   tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
//   vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
//   oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
//   onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
//   garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
//   paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
//   sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
//   orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
// }

function filterEntries(obj, fn) {

    let result = {}

    for (let entry of Object.entries(obj)) {

        if (fn(entry)) {
            result[entry[0]] = entry[1]
        }
    }

    return result
}

function mapEntries(obj, fn) {

    let result = {}

    for (let entry of Object.entries(obj)) {

        const [newKey, newValue] = fn(entry)

        result[newKey] = newValue
    }

    return result
}

function reduceEntries(obj, fn, acc) {

    for (let entry of Object.entries(obj)) {
        acc = fn(acc, entry)
    }

    return acc
}



function totalCalories(obj) {
    return reduceEntries(obj, (a , e) => {
        let cal = nutritionDB[e[0]].calories 
        return (Math.round((a+e[1]*cal/100)*1000))/1000
    },0)
}
function lowCarbs(obj) {
    
    return filterEntries(obj, (e)=> {
        let obj = {...nutritionDB[e[0]]} 
        let s = obj.carbs*e[1]/100 
        if (s<50) { 
            return e
    }
})
}
function cartTotal(obj) {
    return mapEntries(obj , e => {
        let obj = {...nutritionDB[e[0]]} 
        for (let  key in obj ){ 
            obj[key] = (Math.round((obj[key]*e[1]/100)*1000))/1000
        } 
            return [e[0], obj]
    })
}

// const groceriesCart = { orange: 500, oil: 20, sugar: 480 }

// // console.log('Total calories:')
// // console.log(totalCalories(groceriesCart))
// // console.log('Items with low carbs:')
// // console.log(lowCarbs(groceriesCart))
// // console.log('Total cart nutritional facts:')
// // console.log(cartTotal(groceriesCart))
// filterEntries(groceriesCart, ([, v]) => v < 300)
// And its output:
// Total calories:
// 2112.2
// Items with low carbs:
// { oil: 20 }
// Total cart nutritional facts:
// {
//   orange: {
//     calories: 245,
//     protein: 4.5,
//     carbs: 65,
//     sugar: 45,
//     fiber: 1,
//     fat: 0.5
//   },
//   oil: {
//     calories: 9.6,
//     protein: 0,
//     carbs: 0,
//     sugar: 24.6,
//     fiber: 0,
//     fat: 30.2
//   },
//   sugar: {
//     calories: 1857.6,
//     protein: 0,
//     carbs: 480,
//     sugar: 480,
//     fiber: 0,
//     fat: 0
//   }
// }
