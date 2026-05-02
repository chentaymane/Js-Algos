function getURL(str){
    const reg = /\bhttps?:\/\/[^\s]+/g
    return str.match(reg)
}

function greedyQuery(str){
    var URLs = getURL(str)
    const param = /\?[^]+/
    var result = []
    for (let i = 0 ; i<URLs.length;i++){
    var temp = []
            temp =  URLs[i].match(param)
            if (!temp) continue
            if (temp[0]!= null && temp[0].split("&").length >=3  ){
               result.push(URLs[i])
            }
    }
   return result
}


function notSoGreedy(str){
var URLs = getURL(str)
    const param = /\?[^]+/
    var result = []
    for (let i = 0 ; i<URLs.length;i++){
            var temp = []
            temp =  URLs[i].match(param)
            if (!temp) continue
            if (temp[0]!= null && temp[0].split("&").length >=2 && temp[0].split("&").length <=3  ){
               result.push(URLs[i])
            }
    }
   return result
}


console.log(getURL(   'qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you '))