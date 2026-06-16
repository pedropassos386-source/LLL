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