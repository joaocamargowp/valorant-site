const slides = document.querySelectorAll('.container div img'); // Seleciona as imagens dentro das divs
const btnprev = document.getElementById("btn-prev");
const btnnext = document.getElementById("btn-next");
const characterName = document.getElementById("character-name"); // Seleciona o elemento do nome

let currentSlide = 0; // Índice do slide atual

// Array com os nomes dos personagens
const characterNames = [
    "Breach",
    "Astra",
    "Brimstone",
    "Cypher",
    "Jett",
    "Killjoy",
    "Omen",
    "Phoenix",
    "Raze",
    "Sage",
    "Sova",
    "Viper",
    "Yoru",
    "Neon",
    "Skye",
    "Chamber",
    "Fade",
    "Harbor",
    "KAY/O"
];

// Array com as cores correspondentes aos personagens
const characterColors = [
    "#F3", // Brimstone
    "#708090F4500", // Breach
    "#4B0082", // Astra
    "#8B451", // Cypher
    "#1E90FF", // Jett
    "#FFD700", // Killjoy
    "#800080", // Omen
    "#FF6347", // Phoenix
    "#FF69B4", // Raze
    "#32CD32", // Sage
    "#4682B4", // Sova
    "#228B22", // Viper
    "#8A2BE2", // Yoru
    "#00CED1", // Neon
    "#7FFF00", // Skye
    "#D2691E", // Chamber
    "#9400D3", // Fade
    "#20B2AA", // Harbor
    "#808080"  // KAY/O
];

function updateSlider() {
    // Remove a classe 'on' de todas as imagens
    slides.forEach(slide => slide.classList.remove('on'));

    // Adiciona a classe 'on' à imagem atual
    slides[currentSlide].classList.add('on');

    // Atualiza o nome do personagem
    characterName.textContent = characterNames[currentSlide];

    // Atualiza a cor do nome do personagem
    characterName.style.color = characterColors[currentSlide];
}

function nextSlide() {
    // Incrementa o índice do slide atual
    currentSlide = (currentSlide + 1) % slides.length; // Volta ao início se for o último slide
    updateSlider();
}

function prevSlide() {
    // Decrementa o índice do slide atual
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Vai para o último slide se for o primeiro
    updateSlider();
}

// Adiciona eventos aos botões
btnprev.addEventListener('click', prevSlide);
btnnext.addEventListener('click', nextSlide);

// Inicializa o carrossel
updateSlider();