function getURL(str){
    const reg = /\bhttps?:\/\/[^\s]+\b/g
    return str.match(reg)
}

function greedyQuery(str){
    var URLs = getURL(str)
    const param = /\?[^]+/
    var result = []
    for (let i = 0 ; i<URLs.length;i++){
    var temp = []
            temp =  URLs[i].match(param)
            if (temp[0]!= null && temp[0].split("&").length >=3  ){
                result += URLs[i]
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
            if (temp[0]!= null && temp[0].split("&").length >=2 && temp[0].split("&").length <=3  ){
                result += URLs[i]
            }
    }
   return result
}


console.log(greedyQuery(   'http://hummm/how?how=come&same=[123,21]&you=nextperson&id=123312&next=123DSAD&ok=true&notOk=true'))