//const carrinho = {
//    quantidade: 1,
//    item: {
//        nome: "asdiua",
//        valor: 1212
//    }
//};

//cliente 
const patricia = { nome: "Patricia", carrinho: [] };
const carlos = { nome: "Carlos", carrinho: [] };
const renato = { nome: "Renato", carrinho: [] };
const jose = { nome: "José", carrinho: [] };
const roberto = { nome: "Roberto", carrinho: [] };

//produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 };
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 };
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 };
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 };
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 };
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 };
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 };
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 };


patricia.carrinho.push(
    {item: "teclado", quantidade: 1, valorEmCentavos: 50000},
    {item: "cabo usb", quantidade: 2, valorEmCentavos: 1990 },
    {item: "carregador", quantidade: 1, valorEmCentavos: 4590 },
    {item: "mouse", quantidade: 1, valorEmCentavos: 23000 },
    {item: "monitor", quantidade: 1, valorEmCentavos: 129900 }
)
console.log(patricia);


carlos.carrinho.push(
    {item: "Notebook", quantidade: 2, valorEmCentavos: 399990}
)
console.log(carlos);

renato.carrinho.push(
    {item: "Webcam", quantidade: 5, valorEmCentavos: 80000}
)
console.log(renato);

jose.carrinho.push(
    {item: "TV", quantidade: 1, valorEmCentavos: 129900},
    {item: "Cabo USB", quantidade: 2, valorEmCentavos: 1990},
    {item: "Webcam", quantidade: 1, valorEmCentavos: 80000}
)
console.log(jose);

roberto.carrinho.push(
    {item: "Webcam", quantidade: 1, valorEmCentavos: 80000},
    {item: "cabo usb", quantidade: 2, valorEmCentavos: 1990 },
    {item: "monitor", quantidade: 1, valorEmCentavos: 129900 }
)
console.log(roberto);

