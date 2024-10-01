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

function nieuw() {
    antw.value = "";
    let dim = dimension.value;
    let index_opg = Math.floor(Math.random() * 7);
    let index_antw = Math.floor(Math.random() * 7);
    if (dim != 1) {
        opgeenh.innerHTML = eenheden[index_opg] + "<sup>" + dim + "</sup>";
        antweenh.innerHTML = eenheden[index_antw] + "<sup>" + dim + "</sup>";
    } else {
        opgeenh.innerHTML = eenheden[index_opg];
        antweenh.innerHTML = eenheden[index_antw];
    }
    let opgdec = (Math.random() *1000).toFixed(3);
    opg.value = opgdec;
    //we gaan ook meteen het juiste antwoord uit laten rekenen
    let factor = Math.pow(10, dimension.value);
    
    if(index_opg < index_antw){
        let aantalsprongen = (index_antw - index_opg) * dim;
        console.log("factor = " + factor + " en de komma moet " + aantalsprongen + " naar links");
    } else {
        let aantalsprongen = (index_opg - index_antw) * dim;
        console.log("factor = " + factor + " en de komma moet " + aantalsprongen + " naar rechts");
    }
    
}

function check() {
    
}