const input_adultos_bebem = document.querySelector('#input_adultos_bebem');

const input_criancas = document.querySelector('#input_criancas');

const input_tempo = document.querySelector('#input_tempo');

const input_adultos_nao_bebem = document.querySelector('#input_adultos_nao_bebem');

let result_text = null;



function calcular() {

    let adultos_bebem = input_adultos_bebem.value;
    let criancas = input_criancas.value;
    let tempo = input_tempo.value;
    let adultos_nao_bebem = input_adultos_nao_bebem.value;
    

    if(adultos_bebem == '' || criancas == '' || tempo == '' || adultos_nao_bebem == '') {
        alert("Preencha todos os campos!");
        return false;
    }

    else if(adultos_bebem < 0 || criancas < 0 || tempo < 0 || adultos_nao_bebem < 0) {
        alert("Preencha os campos corretamente!");
        return false;
    }

    let carneTotal = (carne(tempo) * adultos_bebem) + (carne(tempo) / 2 * criancas) + (carne(tempo) * adultos_nao_bebem);
    let cervejaTotal = (cerveja(tempo) * adultos_bebem);
    let refriTotal = (refri(tempo) * adultos_bebem) + (refri(tempo) / 2 * criancas) + (refri(tempo) * adultos_nao_bebem);

    result_text =   "<span><strong>Churrasco ideal calculado</strong></span>" + "<br><br>" +
                    "Carne: " + (carneTotal / 1000) + " Kg" + "<br>" +
                    "Cerveja: " + (cervejaTotal / 1000) + " L" + "<br>" +
                    "Refrigerante: " + (refriTotal / 1000) + " L";


    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = result_text;

    input_adultos_bebem.value = '';
    input_criancas.value = '';
    input_tempo.value = '';
    input_adultos_nao_bebem.value = '';
}



function carne(tempo) {

    if(tempo <= 6) {
        return 400;
    }
    else {
        return 650;
    }
}

function cerveja(tempo) {

    if(tempo <= 6) {
        return 1200;
    }
    else {
        return 2000;
    }
}

function refri(tempo) {

    if(tempo <= 6) {
        return 1000;
    }
    else {
        return 1500;
    }
}

