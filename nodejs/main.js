const prompt = require("prompt-sync")();

// Exercício 1

function executarExercicio1(){
    let numero = prompt("Digite um valor: ");
    if (numero > 10) {
        console.log("Número maior que 10");
    } else{
        console.log("Número menor ou igual a 10");
    }
}

// executarExercicio1();

// Exercício 2

function executarExercicio2(){
    let valor1 = prompt("Digite o primeiro valor: ");
    let valor2 = prompt("Digite o segundo valor: ");
    let soma = parseFloat(valor1) + parseFloat(valor2);
    console.log("O valor da soma dos valores informados foi: " + soma);
}

// executarExercicio2();

// Exercício 3

function executarExercicio3(){
    let numero1 = parseInt(prompt("Digite o primeiro valor: "));
    let numero2 = parseInt(prompt("Digite o segundo valor: "));
    if(numero1 > numero2){
        console.log(numero1 + " é maior que " + numero2);
    }if(numero2 > numero1){
        console.log(numero2 + " é maior que " + numero1);
    }if(numero1 == numero2){
        console.log("Os valores são inválidos!");
    }
}

// executarExercicio3();

// Exercício 4

function executarExercicio4(){
    let valor1 = parseFloat(prompt("Digite o primeiro número: "));
    let valor2 = parseFloat(prompt("Digite o segundo número: "));
    let soma = valor1 + valor2;
    let subtracao = valor1 - valor2;
    let multiplicacao = valor1 * valor2;
    let divisao = valor1 / valor2;
    console.log("A soma foi: " + soma + 
    "\nA subtração foi: " + subtracao +
    "\nA mutiplicação foi: " + multiplicacao +
    "\nA divisão foi: " + divisao);
}

// executarExercicio4();

// Exercício 5

function executarExercicio5(){
    let valorA = prompt("Digite um valor: ");
    let valorB = prompt("Digite outro valor: ");

    let valorTrocadoA = valorB;
    let valorTrocadoB = valorA;

    console.log("O valor original de A é: " + valorA +
    "\nO valor original de B é: " + valorB +
    "\n-\nO valor trocado de A é: " + valorTrocadoA +
    "\nO valor trocado de B é: " + valorTrocadoB);
}

// executarExercicio5();

// Exercício 6

function executarExercicio6(){
    let celsius = parseFloat(prompt("Digite a temperatura em Celsius: "));
    let farenheit = (9 * celsius + 160)/5;
    console.log(celsius + " graus Celsius convertido para Farenheit são: " + farenheit);
}

// executarExercicio6();

// Exercício 7