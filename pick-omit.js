function pick(obj , arrORstr) {
    let search = []
    if (typeof arrORstr === 'string'){

        search.push(arrORstr)
    }else{
        search.push(...arrORstr)
    }
    
    console.log(search);
    
    let result = {} 
    for (let  a of search) {
        for ( let key in obj) {
            if (key === a){
                result[key] = obj[key]
                
            }
        }
    }
    return result
}

function omit(obj , arrORstr) {
     let search = []
     let tempObj = Object.assign({},obj)
    if (typeof arrORstr === 'string'){
        search.push(arrORstr)
    }else{
        search.push(...arrORstr)
    }

    for ( let a of search) {
        for ( let key in tempObj) {
            if (key !== a){
                tempObj[key] = obj[key]
                
            }else {
               delete tempObj[key]
            }
        }
    }
    return tempObj
}

console.log(omit({
    ay : 'rr',
    rr : 'fefe',
    ka : 'ff'
},['ay','rr']));
