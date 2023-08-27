const usuario = {
    nome: "Luccas",
    idade: 25,
    profissao: "Programador",
    corPreferida: "Azul"
}

const {nome, idade, profissao, corPreferida} = usuario;

console.log(`Olá... Eu sou ${nome} e tenho ${idade} anos de idade. Sou ${profissao} e minha cor preferida é ${corPreferida}.`)

//1. Dado o objeto `usuario` abaixo, monte a mensagem `Olá... Eu sou João e tenho 25 anos de idade. Sou programador e minha cor preferida é verde!`, passando dinamicamente as informações contidas no objeto.