function RNA(str) {
    var result = ""
    for (let c of str){
        if (c.toLowerCase()==="g"){
            result+= "C"
        }else if (c.toLowerCase()==="c"){
            result+= "G"
        }else if (c.toLowerCase()==="t"){
            result+= "A"
        }else if (c.toLowerCase()==="a"){
            result+= "U"
        }
    }
        return result

}
function DNA(str) {
    var result = ""
    for (let c of str){
        if (c.toLowerCase()==="g"){
            result+= "C"
        }else if (c.toLowerCase()==="c"){
            result+= "G"
        }else if (c.toLowerCase()==="u"){
            result+= "A"
        }else if (c.toLowerCase()==="a"){
            result+= "T"
        }
    }
    return result
}


//console.log(DNA("UAGC"))
/*
 DNA | RNA
 G  -  C
 C  -  G
 T  -  A
 A  -  U
 */