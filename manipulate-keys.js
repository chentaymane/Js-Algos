function filterKeys(obj , fn) {
    let arr = []
    for (let key in obj){
        arr.push(key)
    }
    let arr2 = arr.filter(fn)
    
    let result = {}

    for (let i = 0 ; i < arr.length ; i++){
        if (arr2.includes(arr[i])){
            result[arr[i]]=obj[arr[i]]
        }
    }
    
    return result 
}


function mapKeys(obj , fn) {
    let arr = []
    for (let key in obj){
        arr.push(key)
    }
    let arr2 = arr.map(fn)
   
   
    let result = {}

    for (let i = 0 ; i < arr.length ; i++){
            result[arr2[i]]=obj[arr[i]]
        
    }
    
    return result 
}

function reduceKeys(obj, fn, acc) {
    let arr = [];

    for (let key in obj) {
        arr.push(key);
    }

    if (acc !== undefined) {
        return arr.reduce(fn, acc);
    }

    return arr.reduce(fn);
}
// const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

// console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))


