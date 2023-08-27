const usuarios = [
    {
        nome: "Luccas",
        idade: 15
    },
    {
        nome: "duda",
        idade: 19
    },
    {
        nome: "Lara",
        idade: 1
    },
    {
        nome: "paula",
        idade: 51
    },
    {
        nome: "Cleide",
        idade: 15
    },
    {
        nome: "Syl",
        idade: 17
    },
    {
        nome: "Lindalva",
        idade: 70
    }
];

const jovens = [];
const adultos = [];


for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].idade > 18) {
        adultos.push(usuarios[i]);
    } else {
        jovens.push(usuarios[i]);
    }
}
console.log(adultos);
console.log(jovens);




