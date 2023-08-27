const usuarios = [
    {
        nome: "Luccas",
        idade: 25,
    },
    {
        nome: "Bia",
        idade: 15,
    },
    {
        nome: "Ricardo",
        idade: 18,
    },
    {
        nome: "Rebeca",
        idade: 12,
    },
    {
        nome: "Lucia",
        idade: 15,
    }
];



for (let item of usuarios) {
    if (item.idade > 17) {
        item.maior_idade = true
    } else {
        item.maior_idade = false
    }
    console.log(item)
}
