/* 
Criar um jogo no qual o jogador tenha que adivinhar um número. O jogo deve gerar um número aleatório entre 1 e 100, e depois desafiar o jogador a descobrir qual o número
em no máximo 10 tentivas. A cada tentativa, caso o jogador não tenha acertado o número, o jogo deve informar se o número informado é maior ou menor que o sorteado.
O jogo termina se o jogador acertar o número ou acabarem o número de tentativas.
*/

var readline = require("readline");
var rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

var numeroAleatorio = Math.round(Math.random()*100);
if (numeroAleatorio === 0){
    numeroAleatorio = 1;
}

var numeroTentativas = 10;
var numeroI;
console.log ("JOGO DA ADIVINHAÇÂO");
console.log ("Tente adivinhar, entre 1 e 100, qual o número sorteado. " + "Apenas números inteiros são válidos. " + "Você tem " + numeroTentativas + " tentativas.");
pergunta ();
var numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
var casaNumerica;
var valorTotal = 0;
var i;
var valor;

function pergunta() {
    rl.question("Digite um número: ", function(numero){
        numeroTentativas--;
        if (numeroTentativas === 0) {
            console.log ("Que pena, você não descobriu o número em 10 tentativas.");
            rl.close();
        } else if (numeroTentativas > 1) {
            if (numero === "") {
            console.log ("Nada foi digitado, você ainda tem " + numeroTentativas + " tentativas.");
            pergunta ();
            } else {
                for (i = 0; i < numero.length; i++) {
                    casaNumerica = numero [i];
                    valor = numeros.indexOf(casaNumerica);
                    if (valor < 0) {
                        valorTotal = 1;
                        break;
                    }                    
                }
                if (valorTotal > 0) {
                    console.log("Foi digitado um valor não numérico, você ainda tem " + numeroTentativas + " tentativas.");
                    pergunta ();
                } else {
                    numeroI = numero;
                    numero = parseFloat(numero);
                    numeroI = parseInt (numeroI);
                    if (numero === numeroAleatorio) {
                        console.log ("Parabéns, você acertou o número!");
                        rl.close();
                    } else if (numero - numeroI !== 0){
                        console.log ("Foi digitado um número com casas decimais, apenas números inteiros são válidos. Você ainda tem " + numeroTentativas + " tentativas.");
                        pergunta ();
                    } else if ((numero < 1) || (numero > 100)){
                        console.log ("Foi digitado um número além da faixa de aleatoriedade, você ainda tem " + numeroTentativas + " tentativas. " + "Lembre-se o maior número possível é 100 e o menor é 1.")
                        pergunta ();
                    } else if (numero > numeroAleatorio) {
                        console.log ("Número errado, você ainda tem " + numeroTentativas + " tentativas. " + "O número informado é maior que o sorteado.");
                        pergunta ();
                    } else {
                        console.log ("Número errado, você ainda tem " + numeroTentativas + " tentativas. " + "O número informado é menor que o sorteado.");
                        pergunta ();
                    }
                }
            }
        } else {
            if (numero === "") {
                console.log ("Nada foi digitado, você ainda tem " + numeroTentativas + " tentativas.");
                pergunta ();
                } else {
                    for (i = 0; i < numero.length; i++) {
                        casaNumerica = numero [i];
                        valor = numeros.indexOf(casaNumerica);
                        if (valor < 0) {
                            valorTotal = 1;
                            break;
                        }
                    }
                    if (valorTotal > 0) {
                        console.log("Foi digitado um valor não numérico, você ainda tem " + numeroTentativas + " tentativa.");
                        pergunta ();
                    } else {
                        numeroI = numero;
                        numero = parseFloat(numero);
                        numeroI = parseInt (numeroI);
                        if (numero === numeroAleatorio) {
                            console.log ("Parabéns, você acertou o número!");
                            rl.close();
                        } else if (numero - numeroI !== 0){
                            console.log ("Foi digitado um número com casas decimais, apenas números inteiros são válidos. Você ainda tem " + numeroTentativas + " tentativa.");
                            pergunta ();
                        } else if ((numero < 1) || (numero > 100)){
                            console.log ("Foi digitado um número além da faixa de aleatoriedade, você ainda tem " + numeroTentativas + " tentativa. " + "Lembre-se o maior número possível é 100 e o menor é 1.")
                            pergunta ();
                        } else if (numero > numeroAleatorio) {
                            console.log ("Número errado, você ainda tem " + numeroTentativas + " tentativa. " + "O número informado é maior que o sorteado.");
                            pergunta ();
                        } else {
                            console.log ("Número errado, você ainda tem " + numeroTentativas + " tentativa. " + "O número informado é menor que o sorteado.");
                            pergunta ();
                        }
                    }
                }
            }
    });
}