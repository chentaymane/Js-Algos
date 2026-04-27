function isPositive(v) {
  if (v < 0) {
    return false
  } else {
    return true
  }
}

function abs(v) {
    if (!isPositive(v)){
        return -v

    }else {
        return v
    }
}