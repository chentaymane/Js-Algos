function defaultCurry(obj1 ) {
    return function ( obj2) {
        let set = new Set([...Object.keys(obj1),...Object.keys(obj2)]) 
        let result = {}
        for (let key of set){
            if (obj2[key] != undefined) {
                result[key] = obj2[key]
            }else {
                result[key] = obj1[key]
            }
        }
        return result
    }
}


function mapAverage(p) {
    return mapCurry(([k,v])=>{
        return [k,{
            averageScore : (v.pilotingScore+v.shootingScore)/2 ,
            id : v.id ,
            isForceUser : v.isForceUser,
            pilotingScore: v.pilotingScore,
            shootingScore: v.shootingScore
        }]
    })(p)
}
// const personnel = {
//   lukeSkywalker: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
//   sabineWren:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
//   zebOrellios:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
//   ezraBridger:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
//   calebDume:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
// }

function filterCurry(fn) {
    return function (obj) {
        let result = {}

        for (let entry of Object.entries(obj)) {
            if (fn(entry)) {
                const [k, v] = entry
                result[k] = v
            }
        }

        return result
    }
}
function filterForce(p) {
    return filterCurry(([k, v]) => {
        return v.isForceUser && v.shootingScore >= 80
    })(p)
}
function reduceCurry(fn) {
    return function (obj, acc) {
        for (let [k, v] of Object.entries(obj)) {
            acc = fn(acc, [k, v])
        }
        return acc
    }
}
function reduceScore(p, acc) {
    return reduceCurry((acc, [, v]) => {
        if (v.isForceUser) {
            return acc + v.pilotingScore + v.shootingScore
        }
        return acc
    })(p, acc)
}
console.log(reduceScore(personnel, 0));

function mapCurry(fn) {
    return function (obj) {
        let result = {}
        for (let [k,v] of Object.entries(obj)) {
            let [key , val] = fn([k,v])
            result[key] =val
        }
        return result
        
    }
}

// // output
// {
//   lukeSkywalker_force: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
//   sabineWren_force:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
//   zebOrellios_force:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
//   ezraBridger_force:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
//   calebDume_force:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
// }















// console.log(
// defaultCurry({
//   http: 403,
//   connection: 'close',
//   contentType: 'multipart/form-data',
// })({
//   http: 200,
//   connection: 'open',
//   requestMethod: 'GET'
// }));

// // // output
// // {
// //     http: 200,
// //     connection: 'open',
// //     contentType: 'multipart/form-data',
// //     requestMethod: 'GET'
// // }