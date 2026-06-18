function retry(count, callback) {

  return async function (...args) {

    let attempts = 0

    while (attempts <= count) {
      try {
        return await callback(...args)
      } catch (err) {
        attempts++
        if (attempts > count) {
          throw err
        }
      }
    }
  }
}

function timeout(delay, callback) {

  return async function (...args) {

    const timer = new Promise((_, reject) => {
      setTimeout(() => {
        reject(Error("timeout"))
      }, delay)
    })

    return Promise.race([
      callback(...args),
      timer
    ])
  }
}