const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
    {
        nome: "Luccas",
        pets: ["thor", "Dog", "Rex", "Bob"],
    }
];


for (let i = 0; i < usuarios.length; i++) {
    const petOuPets = usuarios[i].pets.length === 1 ? "pet" : "pets";
    if (usuarios[i].pets.length === 0) {
        console.log(`Sou ${usuarios[i].nome} e não tenho pets`);
    } else {
        console.log(`Sou ${usuarios[i].nome} e tenho ${usuarios[i].pets.length} ${petOuPets}`)
    }       
}
    
    
/*    
} else if (usuarios[i].pets.length === 1) {
    console.log(`Sou ${usuarios[i].nome} e tenho ${usuarios[i].pets.length} pet`);
} else {
    console.log(`Sou ${usuarios[i].nome} e tenho ${usuarios[i].pets.length} pets`);
}

*/