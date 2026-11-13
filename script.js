document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.getElementById("titulo-principal");
    const secoes = document.querySelectorAll(".card-futuro");

    // Faz as seções aparecerem suavemente uma após a outra ao carregar a página
    secoes.forEach((secao, index) => {
        secao.style.opacity = "0";
        secao.style.transform = "translateY(20px)";
        
        setTimeout(() => {
            secao.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            secao.style.opacity = "1";
            secao.style.transform = "translateY(0)";
        }, 300 * (index + 1));
    });

    // Permite pausar ou ativar a animação do título ao clicar nele
    titulo.addEventListener("click", () => {
        titulo.classList.toggle("animar-texto");
    });
});