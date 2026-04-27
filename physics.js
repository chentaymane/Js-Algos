function getAcceleration(v) {
  if (v.f !== undefined && v.m !== undefined) {
    return v.f / v.m
  } else if (v.Δv !== undefined && v.Δt !== undefined) {
    return v.Δv / v.Δt
  } else if (v.d !== undefined && v.t !== undefined) {
    return (2 * v.d) / v.t ** 2
  } else {
    return "impossible"
  }
}