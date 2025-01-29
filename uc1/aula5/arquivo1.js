// programa que ler o nome e escrever o nome 

//let nome = prompt("Digite  o seu  nome");
//console.log(nome); escrito no console, só consegue ver se aperta no f12
//alert("O nome é: "+nome);  escrito por meio de alerta.
//document.write("O nome é: "+nome); // ele escreve na página .

// // ler dois valores
// let valor1 = prompt("Digite um número: ");
// let valor2 = prompt("Digite segundo número: "); // para float e so colocar parsefloat # number não aceita que entre nenhuma letra !!!
// // testar se os valores e nulos 
// if (valor1.trim() === "" || valor2.trim() === "") {  // trim remove todos os espaços .
//     alert("Informe valores válidos")
// } else {

//     // conversão dos valores 
//     let num1 = parseInt(valor1);
//     let num2 = parseInt(valor2);

//     // realiza a soma 
//     let soma = valor1 + valor2

//     // exibir a soma 
//     document.write("A soma é:  " + soma);

//     // faça uma condição para testar se a soma é maior ou menor do que 20 
//     if (soma > 20) {
//         document.write("Soma maior do que 20");
//     } else if (soma < 20) {
//         document.write("Soma menor que 20");
//     } else {
//         document.write("Soma igual a 20");
//     }
// } // alt + shift = F para arrumar identação // == testa só o conteúdo , === teste o conteudo e 

// Aula 05 - exercícios 29/01/2025

// ler 3 valores e verificar se podem ser lados de um triangulo e informar caso afirmativo, qual é o triangulo


// lados do triangulo
// let lado1 = prompt("Digite o primeiro lado");
// let lado2 = prompt("Digite o segundo lado");
// let lado3 = prompt("Digite o terceiro lado");
// // testar se valores são nulos
// if (lado1.trim() === "" || lado2.trim() === "" || lado3.trim() === "") {
//     alert("Informe valores válidos");
// } else if (
//     (parseInt(lado1) + parseInt(lado2) < parseInt(lado3)) ||
//     (parseInt(lado1) + parseInt(lado3) < parseInt(lado2)) ||
//     (parseInt(lado2) + parseInt(lado3) < parseInt(lado1))
// ) {
//     alert("Os valores não podem formar um triângulo");
// } else {
//     // testar qual é o tipo de triângulo
//     if (parseInt(lado1) == parseInt(lado2) && parseInt(lado2) == parseInt(lado3)){
//         document.write("Triângulo Equilátero")
//     } else if (parseInt(lado1) == parseInt(lado2) || parseInt(lado2) == parseInt(lado3) || parseInt(lado1) == parseInt(lado3)){
//         document.write("Triângulo Isósceles")
//     } else {
//         document.write("Triângulo Escaleno")
//     }
// }

// ler altura e peso, e informar o imc e qual a situação do indivíduo

// let altura = parseFloat(prompt("Digite sua Altura "));
// let peso = parseFloat(prompt("Digite seu peso"));

// let imc = peso / (altura ** 2);

// if (isNaN(peso) || isNaN(altura)) { // teste se e o valor e convertido a nulo 
//     document.write("Digite um valor válido!!"); 
// } else {
//     if (imc < 18.5) {
//         document.write("Baixo peso")
//     } else if (imc >= 18.5 && imc <= 24.99) {
//         document.write("Seu imc é Normal " + imc.toFixed(2)); // tofixed coloca em 2 casas decimal
//     } else if (imc >= 25 && imc <= 29.99) {
//         document.write("Seu imc é Sobrepeso " + imc.toFixed(2));
//     } else if (imc >= 30 && imc <= 34.99) {
//         document.write("Seu imc é Obseidade I " + imc.toFixed(2));
//     } else if (imc >= 30 && imc <= 34.99) {
//         document.write("Seu imc é Obseidade I " + imc.toFixed(2));

//     } else if (imc >= 35 && imc <= 39.99) {
//         document.write("Seu imc é Obseidade II " + imc.toFixed(2));
//     }
//     else {
//         document.write("Seu imc é Obseidade III " + imc.toFixed(2));
//     }
// }

//Solicitar a idade do usuário e informa se ele é maior ou menor de idade.

// let idade = parseInt(prompt("Digite sua idade: "));

// if (isNaN(idade)) {
//     alert("Digite uma idade válida!!");
// } else if (idade >= 18) {
//     document.write("Você é maior de idade.");
// } else {
//     document.write("Você é menor de idade!!");
// }


//Solicita um valor e um percentual de desconto, e calcula o valor final.

// let valor = parseInt(prompt("Digite um valor"))
// let desconto = parseInt(prompt("Digite um valor para porcentagem"))

// if (isNaN(valor) || isNaN(desconto)) {
//     alert("Digite números válidos")
// } else {
//     let cal = valor * desconto / 100
//     cal = valor - cal 
//     document.write("O valor final é: "+cal.toFixed(2))
// }


// Lê um número e informa se ele é par ou ímpar.

// let num1 = parseInt(prompt("Dgite um número"));

// if (isNaN(num1)) {
//     alert("Digite apenas números válidos!!");
// } else {
//     if ( num1 % 2 == 0) {
//         document.write("Número Par.");
//     } else {
//         document.write("Número é ímpa.");
//     }
// }

// Solicita três números e calcula a média.


