function isPositive(v) {
  return v > 0
}

function abs(v) {
  if (v === 0) return 0
  if (!isPositive(v)) {
    return -v
  } else {
    return v
  }
}