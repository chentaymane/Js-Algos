

export function getArchitects() {
    let a = document.querySelectorAll('a')
    let span  = document.querySelectorAll('span')
    return [a,span]
}

export function getClassical() {
    let classical = document.querySelectorAll('a.classical')
    let nonClassical = document.querySelectorAll('a:not(.classical)')
    return [classical,nonClassical]
}

export function getActive() {
    let active = document.querySelectorAll('a.classical.active')
    let nonActive = document.querySelectorAll('a.classical:not(.active)')
    return [active,nonActive]
}

export function getBonannoPisano() {
     let BonannoPisano = document.querySelectorAll('#BonannoPisano')
    let nonActive = document.querySelectorAll('a.classical.active')
    return [BonannoPisano,nonActive]
}