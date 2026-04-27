function arrToSet(data){
    return new Set(data)
}
function arrToStr(data) {
  return data.join('')
}
function setToArr(data){
    return Array.from(data)
}
function setToStr(data) {
  return Array.from(data).join('')
}
function strToArr(data){
    return data.split("")
}
function strToSet(data){
    return new Set(data)
}
function mapToObj(data) {
  const obj = {}
  for (const [key, value] of data) {
    obj[key] = value
  }
  return obj
}

function objToArr(data) {
  const arr = []
  for (const key in data) {
    arr.push([key, data[key]])
  }
  return arr
}


function objToMap (data){
    const map = new Map()
  for (const key in data) {
    map.set(key , data[key])
  }
  return map
}

function arrToObj(data) {
  const obj = {}
  for (const [key, value] of data) {
    obj[key] = value
  }
  return obj
}

function strToObj(data) {
  return JSON.parse(data)
}

function superTypeOf(v) {
  if (v instanceof Map)      return 'Map'
  if (v instanceof Set)      return 'Set'
  if (Array.isArray(v))      return 'Array'
  if (v === null)            return 'null'
  if (Number.isNaN(v))       return 'NaN'
  return typeof v
}


const map = new Map()
map.set('a', 1)
map.set('b', 2)
map.set(3, 'c')
map.set(4, 'd')
console.log(objToMap({ x: 45,x:10, y: 75, radius: 24 }))