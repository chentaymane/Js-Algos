function debounce(fn  , num) {
    let t ;
    return function(...args) {
        clearTimeout(t)
         t = setTimeout(()=> {fn(...args)} , num)
    }
}

function opDebounce(fn, num, leading) {

    let t
    return function (...args) {

        if (leading && !t) {
            fn(...args)
        }
        clearTimeout(t)
        t = setTimeout(() => {

            t = null

            if (!leading) {
                fn(...args)
            }

        }, num)
    }
}