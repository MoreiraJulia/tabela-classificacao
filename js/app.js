let pontosCruzeiro = 0, pontosFlamengo = 0;

let btVitoriaCruzeiro = document.querySelector("#vitoria-cruzeiro");
btVitoriaCruzeiro.onclick = () => {
    pontosCruzeiro += CalcularPontos("vitória");
    AtualizaTabelaPontos("cruzeiro");
};

let btVitoriaFlamengo = document.querySelector("#vitoria-flamengo");
btVitoriaFlamengo.onclick = () =>{
    pontosFlamengo += CalcularPontos("vitória");
    AtualizaTabelaPontos("flamengo");
}

function CalcularPontos(resultado){
    if(resultado == "vitória"){
        return 3;
    }else if(resultado == "empate"){
        return 1;
    }else{
        return 0;
    }
}

function AtualizaTabelaPontos(time){
    if(time  == "cruzeiro"){
        document.querySelector(".pontos-cruzeiro").innerText = pontosCruzeiro;
    }else if(time == "flamengo"){
        document.querySelector(".pontos-flamengo").innerText = pontosFlamengo;
    }
}

let btEmpateCruzeiro = document.querySelector("#empate-cruzeiro");
btEmpateCruzeiro.onclick = () => {
    pontosCruzeiro += CalcularPontos("empate");
    AtualizaTabelaPontos("cruzeiro");
};

let btDerrotaCruzeiro = document.querySelector("#derrota-cruzeiro");
btDerrotaCruzeiro.onclick = () => {
    pontosCruzeiro += CalcularPontos("derrota");
    AtualizaTabelaPontos("cruzeiro");
};

//EMPATE E DERROTA DO FLAMENGO 

let btEmpateFlamengo= document.querySelector("#empate-flamengo");
btEmpateFlamengo.onclick = () => {
    pontosFlamengo += CalcularPontos("empate");
    AtualizaTabelaPontos("flamengo");
};

let btDerrotaFlamengo = document.querySelector("#derrota-flamengo");
btDerrotaFlamengo.onclick = () => {
    pontosFlamengo += CalcularPontos("derrota");
    AtualizaTabelaPontos("flamengo");
};

//TABELA 2
let cruzeiroPontos = 0, flamengoPontos = 0;
let cruzeiroVitorias = 0, flamengoVitorias = 0;
let cruzeiroEmpates = 0, flamengoEmpates = 0;

//CRUZEIRO 
let btnCruzeiroVitoria = document.querySelector("#btnVitoriaCruzeiro");
btnCruzeiroVitoria.onclick = () => {
    cruzeiroVitorias += PontosCalcular("Vitória");
    AtualizaVitoriasNaTabela("cruzeiro");
};

let btnCruzeiroEmpate = document.querySelector("#btnEmpateCruzeiro");
btnCruzeiroEmpate.onclick = () => {
    cruzeiroEmpates += PontosCalcular("Empate");
    AtualizaEmpatesNaTabela("cruzeiro");
};

let btnCruzeiroDerrota = document.querySelector("#btnDerrotaCruzeiro");
btnCruzeiroDerrota.onclick = () => {
    cruzeiroPontos += PontosCalcular("Derrota");
    AtualizaDerrotasNaTabela("cruzeiro");
};

//FLAMENGO
let btnFlamengoVitoria = document.querySelector("#btnVitoriaFlamengo");
btnFlamengoVitoria.onclick = () =>{
    flamengoVitorias += PontosCalcular("Vitória");
    AtualizaVitoriasNaTabela("flamengo");
}

let btnFlamengoEmpate = document.querySelector("#btnEmpateFlamengo");
btnFlamengoEmpate.onclick = () => {
    flamengoEmpates += PontosCalcular("Empate");
    AtualizaEmpatesNaTabela("flamengo");
};

let btnFlamengoDerrota = document.querySelector("#btnDerrotaFlamengo");
btnFlamengoDerrota.onclick = () => {
    flamengoPontos += PontosCalcular("Derrota");
    AtualizaDerrotasNaTabela("flamengo");
};

function PontosCalcular(resultado){
    if(resultado == "Vitória"){
        return 3;
    }else if(resultado == "Empate"){
        return 1;
    }else{
        return 1;
    }
}

function AtualizaVitoriasNaTabela(time){
    if(time  == "cruzeiro"){
        document.querySelector(".cruzeiro-vitoria").innerText = cruzeiroVitorias;
    }else if(time == "flamengo"){
        document.querySelector(".flamengo-vitoria").innerText = flamengoVitorias;
    }
}

function AtualizaEmpatesNaTabela(time){
    if(time  == "cruzeiro"){
        document.querySelector(".cruzeiro-empate").innerText = cruzeiroEmpates;
    }else if(time == "flamengo"){
        document.querySelector(".flamengo-empate").innerText = flamengoEmpates;
    }
}

function AtualizaDerrotasNaTabela(time){
    if(time  == "cruzeiro"){
        document.querySelector(".cruzeiro-derrota").innerText = cruzeiroPontos;
    }else if(time == "flamengo"){
        document.querySelector(".flamengo-derrota").innerText = flamengoPontos;
    }
}
