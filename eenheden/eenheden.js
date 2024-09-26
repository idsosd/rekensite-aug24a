//array (rij) is een aantal variabelen in 1 variabele; meestal hebben ze veel met elkaar
//te maken; bij het klikken op 'NIEUW' moet er willekeurig eentje uit deze array worden
//gepakt;
//als je dus een willekeurig cijfer tussen 0 en 6 genereert en die gebruik je als
//indexwaarde voor eenheden, dan heb je een willekeurige eenheid gekozen!
const eenheden = ["mm", "cm", "dm", "m", "dam", "hm", "km"];
// index            0     1     2    3     4      5     6


let dimension = document.getElementById("dimselect");
let opg = document.getElementById("opg_input");
let opgeenh = document.getElementById("opg_eenheid");
let antw = document.getElementById("antw_input");
let antweenh = document.getElementById("antw_eenheid");

function nieuw()
{
    let dim = dimension.value
    //Math.random genereert een getal tussen 0 en 1, waarbij 0 wel kan, maar 1 niet
    //door *7 te doen, krijg je een getal tussen 0 en 7
    let randomnmbr = Math.floor(Math.random() * 7);
    opgeenh.innerHTML = eenheden[randomnmbr] + "<sup>" + dim + "</sup>";
    //console.log("randomnmbr = " + randomnmbr)
    //console.log("de gekozen dimensie = " + dim);
    //console.log("het gekozen element uit eenheden is: " + eenheden[randomnmbr])
    //het programma moet zijn werk gaan doen......
    
}

function check()
{

}