function random(min, max) {
    return Math.floor((Math.random() * ((max - min + 1) + min ))) 
    }

let randomizer = random(0,120)
const sp = document.getElementById("FrecuenciaCardiaca");
sp.innerHTML = randomizer

    
const est = document.getElementById("Estado")

if (randomizer >= 60 && randomizer <= 100) {
    est.innerHTML = "normal"
    est.style.backgroundColor = "green"
}
else if (randomizer >= 101 && randomizer <= 110) {
    est.innerHTML = "alta"
    est.style.backgroundColor = "red"
}
else if (randomizer >= 111) {
    est.innerHTML = "extrema"
    est.style.backgroundColor = "#800000"
}
else if (randomizer <= 59) {
    est.innerHTML = "baja"
    est.style.backgroundColor = "blue"
}

var minutes = 5
var array = [1,2,3,4,5]

console.log(array)