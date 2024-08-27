const personagens = [
    {
        nome: "RJ",
        habilidades: "Gentil, amoroso, gourmet",
        img: "https://www.bt21.com/im/character/bt21/rj.gif"
    },
    {
        nome: "CHIMMY",
        habilidades: "O puro de coração",
        img: "https://www.bt21.com/im/character/bt21/chimmy.gif"
    },
    {
        nome: "COOKY",
        habilidades: "Garupas musculosas e saudáveis",
        img: "https://www.bt21.com/im/character/bt21/cooky.gif"
    },
    {
        nome: "MANG",
        habilidades: "Máquina de dança facial expressiva MANG",
        img: "https://www.bt21.com/im/character/bt21/mang_new1.gif"
    },
    {
        nome: "KOYA",
        habilidades: "Dorminhoco talentoso",
        img: "https://www.bt21.com/im/character/bt21/koya.gif"
    },
    {
        nome: "TATA",
        habilidades:  "Uma alma curiosa e excêntrica, o Príncipe",
        img: "https://www.bt21.com/im/character/bt21/tata.gif"
    },
    {
        nome: "VAN",
        habilidades: "Robô espacial guardião",
        img: "https://www.bt21.com/im/character/bt21/van.gif"
    },
    {
        nome: "SHOOKY",
        habilidades: "Mini brincalhão",
        img: "https://www.bt21.com/im/character/bt21/shooky.gif"
    }
];

let indexAtual = 0;

document.getElementById('next').addEventListener('click', () => {
    indexAtual = (indexAtual + 1) % personagens.length;
    atualizarPersonagem(personagens[indexAtual]);
});

function atualizarPersonagem(personagem) {
    document.querySelector('.geek').src = personagem.img;
    document.querySelector('.geek').alt = personagem.nome;
    document.querySelector('dd:nth-of-type(1)').textContent = personagem.nome;
    document.querySelector('dd:nth-of-type(2)').textContent = personagem.habilidades;
}
