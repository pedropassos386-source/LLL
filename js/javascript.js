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