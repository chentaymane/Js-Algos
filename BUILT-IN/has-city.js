function hasCity(country,arrStr) {
    return function (city) {
        if (arrStr.includes(city)){
            return `${city} is a city from ${country}`
        }else{
            return `${city} is not a city from ${country}`
        }
    }
}