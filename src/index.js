//classificador de Herói
let nomeHeroi = "Shaolin do sertão"
let XP = 1000

if (XP <= 1000) {
    console.log("Héroi " + nomeHeroi + " nivel FERRO")
} else if ((XP >= 1001) & (XP <= 2000)) {
    console.log("Héroi " + nomeHeroi + " nivel BRONZE")
} else if ((XP >= 2001) & (XP <= 5000)) {
    console.log("Héroi " + nomeHeroi + " nivel PRATA")
} else if ((XP >= 5001) & (XP <= 7000)) {
    console.log("Héroi " + nomeHeroi + " nivel OURO")
} else if ((XP >= 7001) & (XP <= 8000)) {
    console.log("Héroi " + nomeHeroi + " nivel PLATINA")
} else if ((XP >= 8001) & (XP <= 9000)) {
    console.log("Héroi " + nomeHeroi + " nivel ASCENDENTE")
} else if ((XP >= 9001) & (XP <= 10000)) {
    console.log("Héroi " + nomeHeroi + " nivel IMORTAL")
} else if (XP >= 10001) {
    console.log("Héroi " + nomeHeroi + " nivel RADIANTE")
} else {
    console.log("Nivel não valido")
}