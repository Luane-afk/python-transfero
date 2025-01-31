// const carros = ["BMW","Volvo","Celta","Pálio","Chavet"];
// document.write(carros+"<br>");
// document.write("||---||"+"<br>");
// document.write(carros[2]);

// estrutura de repetoção usando o while 

// const carros = ["BMW","Volvo","Celta","Pálio","Chavet"];
// let i = 0;
// while (i<carros.length){
//     document.write(carros[i]+"<br>");
//     i++;
// }

// document.write(carros+"<br>");
// document.write("||---||"+"<br>");
// document.write(carros[2]);


// fazendo exemplo com for normal 

// const carros = ["BMW","Volvo","Celta","Pálio","Chavet"];
// for (let i=0; i<carros.length; i++){
//     document.write(carros[i]+"<br>");
// }

// Usando o FOR IN *

const carros = ["BMW","Volvo","Celta","Pálio","Chavet"];
for (i in carros){
    document.write(i+" - ");
    document.write(carros[i]+"<br>");
}