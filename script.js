// Flashcards
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

// Chat
document.querySelector(".chat-bubble").addEventListener("click", () => {
  alert(
    "👋 Olá! Como está seu progresso nos flashcards de agroecologia hoje? Quer uma dica sobre rotação de culturas?"
  );
});

// Quiz
const quizData = [
  {
    question: "Qual é o principal benefício da agricultura regenerativa?",
    options: [
      "Aumentar o uso de agrotóxicos",
      "Melhorar a saúde do solo e capturar carbono",
      "Reduzir a biodiversidade",
      "Aumentar o preço dos alimentos"
    ],
    correct: 1
  },
  {
    question: "O que significa o termo agroecologia?",
    options: [
      "Agricultura baseada apenas em tecnologia",
      "Estudo das relações entre agricultura e ecossistemas",
      "Produção em larga escala",
      "Foco exclusivo em exportação"
    ],
    correct: 1
  },
  {
    question: "Por que a rotação de culturas é importante?",
    options: [
      "Para deixar o solo sempre com a mesma planta",
      "Para prevenir pragas e doenças naturalmente",
      "Para usar mais fertilizantes químicos",
      "Para reduzir a produtividade"
    ],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = quizData[currentQuestion];

  document.getElementById("question-text").textContent =
    q.question;

  const optionsContainer =
    document.getElementById("options-container");

  optionsContainer.innerHTML = "";

  q.options.forEach((option, index) => {
    const div = document.createElement("div");
    div.className = "option";
    div.textContent = option;

    div.addEventListener("click", () => {
      checkAnswer(index);
    });

    optionsContainer.appendChild(div);
  });

  document.getElementById("next-btn").style.display =
    "none";

  updateProgress();
}

function checkAnswer(selectedIndex) {
  const correctIndex =
    quizData[currentQuestion].correct;

  const options =
    document.querySelectorAll(".option");

  options.forEach((option, i) => {
    option.style.pointerEvents = "none";

    if (i === correctIndex) {
      option.classList.add("correct");
    } else if (i === selectedIndex) {
      option.classList.add("incorrect");
    }
  });

  if (selectedIndex === correctIndex) {
    score++;
  }

  document.getElementById("next-btn").style.display =
    "inline-block";
}

function updateProgress() {
  const progress =
    (currentQuestion / quizData.length) * 100;

  document.getElementById("progress-bar").style.width =
    progress + "%";
}

document.getElementById("next-btn")
  .addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion >= quizData.length) {
      alert(
        `🎉 Você acertou ${score} de ${quizData.length} perguntas!`
      );

      currentQuestion = 0;
      score = 0;
    }

    loadQuestion();
  });

loadQuestion();