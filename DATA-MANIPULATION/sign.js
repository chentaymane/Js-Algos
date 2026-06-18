function sign (v){
    if (v === 0 ) {return 0}
    if (v > 0) {
        return 1
    }else {
        return -1
    }
}

function sameSign(v1,v2){
    if (sign(v1) === sign(v2)){return true }else{return false}
}