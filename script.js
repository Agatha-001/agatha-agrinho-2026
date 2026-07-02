// Flashcards

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("virado");
    });
});

// Quiz

function responder(correta){

    const resultado =
    document.getElementById("resultado");

    if(correta){
        resultado.innerHTML =
        "✅ Correto! A rotação de culturas ajuda a preservar o solo.";
    }
    else{
        resultado.innerHTML =
        "❌ Incorreto. Tente novamente.";
    }

}
 // Mensagem ao carregar a galeria

window.addEventListener("load", () => {
    console.log(
        "Galeria de imagens IA carregada com sucesso!"
    );
});
// Mensagem ao carregar a galeria

window.addEventListener("load", () => {
    console.log(
        "Galeria de imagens IA carregada com sucesso!"
    );
});