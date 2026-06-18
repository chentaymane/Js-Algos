function race(promises) {
  return new Promise((resolve, reject) => {
    for (const p of promises) {
      Promise.resolve(p).then(resolve, reject)
    }
  })
}

function some(promises, count) {
  return new Promise((resolve, reject) => {
    if (count === 0 || !promises.length) return resolve([])

    const needed  = Math.min(count, promises.length)
    const results = []   // stores { index, value } in arrival order
    let resolved  = 0
    let rejected  = 0

    promises.forEach((p, i) => {
      Promise.resolve(p).then(
        (value) => {
          if (resolved >= needed) return
          results.push({ index: i, value })
          resolved++
          if (resolved === needed) {
            // Sort by original index to preserve input order
            resolve(results.sort((a, b) => a.index - b.index).map(r => r.value))
          }
        },
        () => {
          rejected++
          if (rejected > promises.length - needed) {
            reject(new Error('Not enough promises resolved'))
          }
        }
      )
    })
  })
}

// Tests
const wait = (ms, val) => new Promise(res => setTimeout(() => res(val), ms))

some([wait(1), wait(50), Promise.resolve(5)], 2).then(v => console.log('order test:', v))

const p1 = new Promise(res => setTimeout(() => res('first'),  100))
const p2 = new Promise(res => setTimeout(() => res('second'), 200))
const p3 = new Promise(res => setTimeout(() => res('third'),  300))
const pFail = new Promise((_, rej) => setTimeout(() => rej('fail'), 50))

race([p1, p2, p3]).then(v => console.log('race:', v))
some([p1, p2, p3], 2).then(v => console.log('some(2):', v))
some([p1, p2], 0).then(v => console.log('some(0):', v))
some([], 2).then(v => console.log('some([]):', v))
some([pFail, p1, p2], 2).then(v => console.log('some with fail:', v))