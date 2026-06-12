const btn =
document.getElementById("btnMenu");
const menu = 
document.getElementById("submenu");

btn.addEventListener("click", () => {
    menu.classList.toggle("ativo");
})