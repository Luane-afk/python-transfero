// onde entra uma estrutura de repetição
// contar um número de 0 até 10 

// let numero = 0;
// //console.log(numero)

// while ( numero <=10) {
//     document.write(numero+"<br>");
//     numero++;
// }

// while 2 exemplo com true 

// let i = 0;
// while(true) {
//     document.write(i+"<br>");
//     i++;
//     if (i==11) { break; }
// }
// document.write("Saiu da repetição");

// while 3 exemplo 

let nome, cadastro = "";
let continua = "s";
let i = 0;
while (continua == "s") {
    nome = prompt("Informe o nome");
    cadastro += (nome + "<br>");
    i++;
    continua = prompt("Deseja continuar ?<s/n>");
}
document.write(cadastro);
document.write("Foram lidos "+i+" nomes");