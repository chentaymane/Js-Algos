function fusion(elm1 , elm2) {
    
    
let set = new Set([...Object.keys(elm1), ...Object.keys(elm2)]);
    let rsl = {}
    console.log(set);
    
    for ( let i  of set) {
                if ( Array.isArray(elm1[i]) && Array.isArray(elm2[i])  ){ 
                    rsl[i] =[...elm1[i],...elm2[i]] 
                    
                }else if( typeof (elm1[i]) === 'string' && typeof (elm2[i]) === 'string'  ){ 
                    rsl[i] = elm1[i]+' '+elm2[i]
                    
                }else if (typeof (elm1[i]) === 'number' && typeof (elm2[i]) === 'number' ){
                     rsl[i] = elm1[i]+elm2[i]
                }else if (typeof (elm1[i]) === 'object' && typeof (elm2[i]) === 'object') {
                    rsl[i] = fusion(elm1[i] , elm2[i])
                }else {
                    if ( elm2[i] != undefined) {

                        rsl[i] = elm2[i]
                    }else{
                        rsl[i] = elm1[i]
                    }
                }
            
            
        } 
    

    return rsl
}

console.log(fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } }));
