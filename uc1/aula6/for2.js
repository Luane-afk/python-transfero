let nome, cadastro = "";
for(let i=0; i<=5; i++) {
    nome = prompt("Informe o nome");
    cadastro += (nome + "<br>");
}
document.write(cadastro);