function reverse(arr) {
    var result =[]
    var string = false
    var result2 =""
    if (typeof arr === "string"){
        string = true
    }
    for (let i=arr.length-1 ; i>=0 ; i--){
        if (string){
            result2+=arr[i]
        }else{

            result.push(arr[i])
        }
    }
    if (string){
           return result2
    }
    return result
}


console.log(reverse("ffssfef")  )