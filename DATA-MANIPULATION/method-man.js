function  words(v) {
    
    return v.split(" ")
}

function sentence(v){
    return v.join(" ")
}

function yell(v){
    return v.toUpperCase()
}

function whisper(v) {
  return `*${v.toLowerCase()}*`
}

function capitalize(v) {
  return v[0].toUpperCase() + v.slice(1).toLowerCase()
}