
//Crie um programa que receba um número de 1 a 7 e retorne o dia correspondente da semana. Por exemplo, 1 para "Domingo", 2 para "Segunda-feira" e assim por diante.

//let dia = 3

/*if (dia == 1) {
    console.log("Domingo") 
} else if (dia == 2) {
    console.log("Segunda-Feira")
} else if (dia == 3) {
    console.log("Terça-Feira")
} else if (dia == 4) {
    console.log("Quarta-Feira")
} else if (dia == 5) {
    console.log("Quinta-Feira")
} else if (dia == 6) {
    console.log("Sexta-Feira")
} else if (dia == 7) {
    console.log("Sábado")
} else {
    console.log("Dia inválido. Informe um número de 1 a 7.")
}*/

/*switch (dia) {
    case 1:
        console.log("domingo")
        break
    case 2:
        console.log("Segunda-Feira")
        break
    case 3:
        console.log("Terça-Feira")
        break
    case 4:
        console.log("Quarta-Feira")
        break
    case 5:
        console.log("Quinta-Feira")
        break
    case 6:
        console.log("Sexta-Feira")
        break
    case 7:
        console.log("Sábado")
        break
    default:
        console.log("Número Inválido! Digite um valor entre 1 a 7.")    
} */

//Crie um programa que recebe dois números e uma operação (+, -, *, /) e retorna o resultado correspondente.

let n2 = 5
let n3 = 9
let operacao = "+"

switch (operacao) {
    case "+":
        console.log(n2 + n3);
        break;
    case "*":
        console.log(n2 * n3);
        break;
    case "/":
        console.log(n2 / n3);
        break;
    case "-":
        console.log(n2 - n3);
        break;
    default:
        console.log("Número Inválido!");
        break;
}


//Crie um programa que recebe um número de 1 a 12 e imprime o nome do mês correspondente

let mes = 1

switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("outubro");
        break;
    case 11:
        console.log("Novembro")
        break;
    case 12:
        console.log("Dezembro")
        break
    default:
        console.log("Mês inválido!")
}

/* 4. Classificar Idade em Faixas Etárias */

let idade = 14

switch (true) {
    case (idade >=0 && idade<= 12):
        console.log("Criança");
        break;
    case (idade>=13 && idade<=17):
        console.log("Adolescente");
        break;
    case (idade>=18 || idade<=65):
        console.log("Adulto");
        break;
    case (idade>=66):
        console.log("Idoso");
        break;
    default:
        console.log("Idade inválida!")
}

// outra maneira de usar tbm if ou switch

let idade1 = "l"
if (idade1 >=0 && idade1<=12) {
    console.log("Criança");
} else if (idade1 >=13 && idade1<=17) {
    console.log("Adolescente")
} else if (idade1 >=18 && idade1<=65) {
    console.log("Adulto")
} else if (idade1 >=65) {
    console.log("Idoso")
} else {
    console.log("Idade inválida")
}

//  Identificar a Categoria de um Produto pelo Código

let categoria = 1
switch (categoria) {
    case (1):
        console.log("alimento perecível");
        break;
    case (2):
        console.log("bebida");
        break;
    case (3):
        console.log("limpeza");
        break;
    case (4):
        console.log("higiene pessoal");
        break;
    default:
        console.log("produto inválido")
}

// Verificar se um número está entre 10 e 20

let intervalo = 8

switch (true) {
    case (intervalo >=10 && intervalo<=20):
        console.log("Número dentro do intervalo");
        break;
    default:
        console.log("Número fora do intervalo");
}

// Verificar se um número está dentro de dois intervalos

let intervalo2 = 50

switch (true) {
    case (intervalo2 >= 1 && intervalo2<=10 || intervalo2 >=50 && intervalo2<=100):
        console.log("Número válido");
        break;
    default:
        console.log("Número inválido")
}

// Verificar se uma pessoa pode comprar bebidas alcoólicas

let age = 12

switch (true) {
    case (age >=18):
        console.log("Pode comprar bebidas");
        break;
    case ( age >=16 && age<=17):
        console.log("Não pode comprar bebidas");
        break;
    default:
        console.log()
}

//Verificar se uma pessoa pode tirar férias

let cargo = "6 meses"

switch (true) {
    case (cargo>= 6 || cargo<=12):
        console.log("Pode tirar férias");
        break;
    default:
        console.log("Não pode tirar férias :X")
}