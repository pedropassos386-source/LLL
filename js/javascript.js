const btn =
document.getElementById("btnMenu");
const menu = 
document.getElementById("submenu");

btn.addEventListener("click", () => {
    menu.classList.toggle("ativo");
})

const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {
    if(window.scrollY > 1500){
        btnTopo.classList.add("mostrar");
    }else{
        btnTopo.classList.remove("mostrar");
    }
});

btnTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



const slides = document.querySelectorAll(".slide");

let slideAtual = 0;

function mostrarSlide(index){

    slides.forEach(slide =>{
        slide.classList.remove("ativo");
    });

    slides[index].classList.add("ativo");
}

mostrarSlide(0);

setInterval(() => {

    slideAtual++;

    if(slideAtual >= slides.length){
        slideAtual = 0;
    }

    mostrarSlide(slideAtual);

},3000);


const depoimentos = [
    {
        nome: "Pitágoras Drakewood Stormrider",
        cargo: "COO da LLI",
        foto:"./imagens/felipe.webp",
        texto: "Trabalhar na LLI significa estar na fronteira da inovação. Temos acesso a recursos de ponta e liberdade para desenvolver projetos ambiciosos. É um ambiente que valoriza conhecimento, criatividade e a busca constante por novas descobertas."
    },

    {
        nome: "Red Fate Leone",
        cargo: "Editora-Chefe da New Ommni Post",
        foto:"./imagens/rosa.webp",
        texto: "O New Omni Post nasceu com o propósito de informar e continua fiel a essa missão. Trabalhamos diariamente para entregar notícias confiáveis e relevantes, mantendo o público sempre atualizado sobre os acontecimentos do mundo."
    },

    {
        nome: "Diogenes Leone",
        cargo: "Lider da familha Leone e presidente da AGGA",
        foto:"./imagens/akatsuki.webp",
        texto: "A AGGA oferece tudo o que um aventureiro precisa para alcançar seu potencial. Aqui recebemos treinamento, suporte e oportunidades para fazer a diferença. É uma organização construída sobre coragem, cooperação e propósito."
    },

    {
        nome: "Lone Lothlórien Noldor Leone",
        cargo: "Vice-presidente da Corporação LLL",
        foto:"./imagens/take.webp",
        texto: "O que mais me impressiona na LLL é sua capacidade de crescer sem perder seus valores. A empresa investe em pessoas, inovação e excelência, criando oportunidades para profissionais de diferentes áreas construírem carreiras sólidas e significativas.",
    },
    
    {
        nome: "Carina Leone",
        cargo: "Presidente do Banco Leão Dourado",
        foto:"./imagens/take.webp",
        texto: "A confiança que os clientes depositam em nós é resultado de uma cultura organizacional baseada em responsabilidade e excelência. Aqui, cada decisão é tomada com seriedade e profissionalismo, sempre pensando no crescimento sustentável da instituição.",
    }
];

const bullets = document.querySelectorAll(".slider-bullets span");

const nomeAutor = document.querySelector(".titulo-autor h2");
const cargoAutor = document.querySelector(".titulo-autor p");
const textoAutor = document.querySelector(".texto-autor p");
const fotoAutor = document.querySelector(".img-autor");

function carregarDepoimento(index) {

    nomeAutor.textContent = depoimentos[index].nome;
    cargoAutor.textContent = depoimentos[index].cargo;
    textoAutor.textContent = depoimentos[index].texto;

    fotoAutor.style.backgroundImage =
        `url('${depoimentos[index].foto}')`;

    bullets.forEach(bullet => {
        bullet.classList.remove("ativo");
    });

    bullets[index].classList.add("ativo");
}

// Carrega automaticamente o primeiro depoimento
carregarDepoimento(0);

// Eventos dos spans
bullets.forEach((bullet, index) => {
    bullet.addEventListener("click", () => {
        carregarDepoimento(index);
    });
});