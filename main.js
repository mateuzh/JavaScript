//Módulos
/**
 * const calc = require('./calculadora');
    console.log(calc.somar(10, 5));
    console.log(calc.subtrair(90,55));
    console.log(calc.multiplicar(5, 8));
    console.log(calc.dividir(5, 2));
 */

//npm init vai perguntar 
//npm init -y irá criar o arquivo json sem perguntar nada

const prompt = require("prompt-sync")();

let valor = prompt("Informe um valor: ");
console.log(valor);