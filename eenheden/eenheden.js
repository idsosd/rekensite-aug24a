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

let antw_berekend = new Decimal('0');

function nieuw() {
    //alleen nodig om te resetten
    antw.value = "";
    let dim = new Decimal(dimension.value);
    let index_opg = Decimal.floor(Decimal.random() * 7);
    let index_antw = Decimal.floor(Decimal.random() * 7);
    if (dim != 1) {
        opgeenh.innerHTML = eenheden[index_opg] + "<sup>" + dim + "</sup>";
        antweenh.innerHTML = eenheden[index_antw] + "<sup>" + dim + "</sup>";
    } else {
        opgeenh.innerHTML = eenheden[index_opg];
        antweenh.innerHTML = eenheden[index_antw];
    }
    let opgdec = new Decimal((Decimal.random() *1000).toFixed(3));
    opg.value = opgdec;
    //we gaan ook meteen het juiste antwoord uit laten rekenen
    let factor = Math.pow(10, dimension.value);
    //de Math.abs zorgt er voor dat het aantal sprongen altijd positief
    let aantalsprongen = Decimal.abs(index_opg - index_antw);
    let verm_factor = Decimal.pow(factor, aantalsprongen);
    if(index_opg < index_antw){
        //we moeten gaan delen
        antw_berekend = opgdec.div(verm_factor);
    } else {
        //we moeten gaan vermenigvuldigen
        antw_berekend = opgdec.times(verm_factor);
    }
    console.log("het berekende antwoord = " + antw_berekend); 
}

function check() {
    let antw_ingev = new Decimal(antw.value);
    if(antw_ingev.equals(antw_berekend)){
        console.log("goed");
    } else {
        console.log("fout");
    }
}