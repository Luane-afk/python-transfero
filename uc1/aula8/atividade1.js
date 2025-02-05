// 1 - Crie uma função chamada cumprimentar(nome), que recebe um nome via prompt como parâmetro e exibe a mensagem "Olá, [nome], tudo bem?".

// criando uma função para minhas boas vindas
// function boasVindas(){
//     let nome = prompt("Digite seu nome:")    // criando paramentros 
//     alert("Olá, " + nome + ", tudo bem?");
// }

// agora chamando a função 
// boasVindas();


// 2 - Crie uma função para cada uma das 4 operações aritméticas (soma, subtração, divisão e multiplicação).
// Depois crie um programa que leia dois números e de acordo com a operação solicitada, chame a função responsável pela operação.

// criando a função .

// function soma(a, b) { return a + b; }
// function subtracao(a, b) { return a - b; }
// function multiplicacao(a, b) { return a * b; }
// function divisao(a, b) {
//     if (b === 0) {
//         return "Erro: Divisão por zero!";
//     }
//     return a / b;
// }

// // principal para ler os números e a operação
// let a = parseFloat(prompt("Digite o primeiro número:"));
// let b = parseFloat(prompt("Digite o segundo número:"));

// let operacao = prompt("Escolha a operação (soma, subtracao, multiplicacao, divisao):").toLowerCase();

// // Chamando a função correspondente à operação escolhida
// switch (operacao) {
//     case 'soma':
//         alert("Resultado: "+ soma(a, b));
//         break;
//     case 'subtracao':
//         alert("Resultado: "+ subtracao(a, b));
//         break;
//     case 'multiplicacao':
//         alert("Resultado: "+ multiplicacao(a, b));
//         break;
//     case 'divisao':
//         alert("Resultado: "+ divisao(a, b));
//         break;
//     default:
//         resultado = "Operação inválida!";
// }

// 3 - Crie uma função chamada verificarIdade(idade), que recebe a idade de uma pessoa e retorna "Maior de idade" se for 18 anos ou mais, e "Menor de idade" caso contrário.

// function verificarIdade(idade){
//     let result = " "; // criei uma variável para resultado do if 
//     if (idade >=18) {
//         result = ("Você é maior de idade.");
//     } else {
//         result = ("Você é menor de idade.");
//     }
//   return result  
// }
// let idade = prompt("Digite a sua idade:");

// alert(verificarIdade(idade));

// 5 - Crie uma Função para Contar de 1 até um Número Informado

// function contar() {
//     let num = parseInt(prompt("Digite um número para começar a contagem: "));
//     let num2 = parseInt(prompt("Digite até a onde você deseja contar"));
//     for(let i =num; i <=num2; i++) { // detro do for , criei uma variavél i para ajudar na contagem dos núemro .
//         document.write(i+"<br>");
//     }
// }
// contar()


//11 - Crie uma função chamada contarImpares(n), que recebe um número inteiro positivo e retorna quantos números ímpares existem de 1 até N.

