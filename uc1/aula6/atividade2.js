 //1) Crie um programa que utilize um loop while para exibir os números de 1 a 20 na tela.
// let numero = 0;
//  while ( numero <=5) {
//      document.write(numero+"<br>");
//       numero++;
// }

// 2) Utilize um loop for para exibir todos os números ímpares de 1 a 15. 

// for (let n = 0; n <= 15; n++ ) {
//     if (n % 2!=0 ) {
//     document.write(n+"<br>");
//     }
// }

// 3) Crie um programa que utilize um do...while para exibir uma contagem regressiva de 10 até 1. 

// let num = 10;
// do {
//      document.write(num+"<br>");
//      num--;
// } while (num >= 1);


//4) Solicite ao usuário 5 números usando prompt e exiba a soma total, usando um loop 

// let u = " ";
// for (let i = 0; i<=4; i++) {
//     u = prompt("Digite um número:");
//     document.write(u+"<br>");
// }

// 5) Solicite um nome ao usuário e peça a quantidade de vezes que ele deseja exibi-lo na tela. Utilize um loop while.

// let nome = prompt("Informe o seu nome.");
// let cont = parseInt(prompt("Informe o numero de vezes que o nome irá aparecer na tela."));
// let i = 0;
// while (i < cont ) {
//     document.write(nome+"<br>");
//     cont--;
// }

// 8) Leia o nome do time de 10 torcedores, e ao final informe quantos são flamenguistas, vascaínos, tricolores, botafoguenses, ou outro time.

//programa 8 com uso de array

// let times = []; // criação do array
// let time;

// let vasco = 0;
// let flamengo = 0;
// let fluminense = 0;
// let botafogo = 0;
// let outroTime = 0;

// for (let i = 0; i < 10; i++) {
//     time = prompt("Qual o seu time?").toLowerCase(); // o que será digitado sairá minúsculo
//     times.push(time); //
// }

// for (let i = 0; i < 10; i++) {
//     switch (times[i]) {
//         case "flamengo":
//             flamengo++;
//             break;
//         case "fluminense":
//             fluminense++;
//             break;
//         case "botafogo":
//             botafogo++;
//             break;
//         case "vasco":
//             vasco++;
//             break;
//         default:
//             outroTime++;
//             break;
//     }
// }  

// document.write("Flamengo..: "+flamengo+"<br>")
// document.write("Fluminense: "+fluminense+"<br>")
// document.write("Vasco.....: "+vasco+"<br>")
// document.write("Botafogo..: "+botafogo+"<br>")

// 10) Faça um programa que leia os seguintes dados de 10 pessoas:
// - nome
// - cidade
// Ao final, crie um loop que informe o nome e a cidade de cada indice informado pelo usuário

// correção de 10 com 2 arrays

// let nome;
// let cidade;
// let pessoas = [];


// coletando os dados de 10 itens

// for (let i=0; i<3; i++){
//     nome.push(prompt("Informe o nome da pessoa"+(i+1)+":"));
//     cidade.push(prompt("informe a cidade da pessoa "+(i+1)+":")); // push e pra adicionar na lista .
//     pessoas.push({nome:nome, cidade:cidade});
// }

// // criando um loop 
// let indice;
// let continua;
// while (true){
//     indice = prompt("Qual indice gostaria de ver?");
//     if (indice >=0 && indice<3) {
//         alert("Nome  :"+pessoas[indice].nome+" Cidade  :"+pessoas[indice].cidade); // esse [] e a lista e o indice e o numero que vai ser digitado
//     } else {
//         alert("índice inválido");
//     }
//     continua = prompt("Deseja ler outro índcie <s/n>").toLowerCase(); // tolowercase e para manter minusculo 
//     if (continua !="s")  break;
// }

// array duplo / objeto
// let pessoas   = [];
// let nome;
// let cidade;
// //coletando os dados de 10 itens
// for (let i=0; i<3; i++){
//     nome = prompt("informe o nome da pessoa "+(i+1)+":");
//     cidade = prompt("informe a cidade da pessoa "+(i+1)+":");
//     pessoas.push({nome:nome, cidade:cidade});
// }

// let indice;
// let continua;
// while (true){
//     indice = prompt("Informe o índice");
//     if (indice>=0 && indice<3) {
//         alert("Nome..: "+pessoas[indice].nome+" Cidade: "+pessoas[indice].cidade);
//     } else {
//         alert("índice inválido");
//     }
//     continua = prompt("deseja ler outro índice <s/n>").toLowerCase();
//     if (continua !="s") break;
// }
