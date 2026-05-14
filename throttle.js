function throttle(fn , delay) {
    let wait = false
    return function (...args) {
        if (wait === true ) return 
        fn(...args)
        wait = true
        setTimeout(()=> {
            wait = false
        },delay)
    }
}

function opThrottle(fn, delay, options = {}) {
  const {
    leading = false,   // ← was probably true, must be false
    trailing = false
  } = options

  let wait = false
  let lastArgs = null

  function runTrailing() {
    wait = false
    if (trailing && lastArgs) {
      fn(...lastArgs)
      lastArgs = null
      wait = true
      setTimeout(runTrailing, delay)
    }
  }

  return function(...args) {
    if (wait) {
      if (trailing) lastArgs = args
      return
    }

    if (leading) {
      fn(...args)
    } else {
      lastArgs = args       
    }

    wait = true
    setTimeout(runTrailing, delay)
  }
}