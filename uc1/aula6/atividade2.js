// 1) Crie um programa que utilize um loop while para exibir os números de 1 a 20 na tela.
// let numero = 0;
// while ( numero <=20) {
//      document.write(numero+"<br>");
//      numero++;
// }

// 2) Utilize um loop for para exibir todos os números ímpares de 1 a 15. 

// for (let n = 0; n <= 15; n++ ) {
//     if (n % 2!=0 ) {
//         document.write(n+"<br>");
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

let uso, quant = " ";
let cont = " ";
let i = 0;
while (cont == quant) {
    uso = prompt("Digite seu nome:");
    quant += uso + "<br>";
    i++
    cont = prompt("Quantas vezes você deseja que seu nome apareça?");
}
document.write(quant)