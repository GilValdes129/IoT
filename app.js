function random(min, max) {
    return Math.floor((Math.random() * ((max - min + 1) + min ))) 
    }

let randomizer = random(0,120)
const sp = document.getElementById("FrecuenciaCardiaca");
sp.innerHTML = randomizer

    
const est = document.getElementById("Estado")

if (randomizer >= 60 && randomizer <= 100) {
    est.innerHTML = "normal"
}
else if (randomizer >= 101 && randomizer <= 110) {
    est.innerHTML = "alta"
}
else if (randomizer >= 111) {
    est.innerHTML = "extrema"
}
else if (randomizer <= 59) {
    est.innerHTML = "baja"
}