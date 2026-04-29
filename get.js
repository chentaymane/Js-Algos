function  get(src , path) {
    var paths = path.split(".") 
   var first = true
    for (let p of paths){
        if ( src[p]=== undefined) {
return undefined
        }
        src = src[p]
    }
    console.log(src) 
}
/*
const src = { nested: { key: 'peekaboo' } }
const path = 'nested.key'
get(src, path) // -> 'peekaboo'
*/