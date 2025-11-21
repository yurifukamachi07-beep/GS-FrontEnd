const questions = [
    {
        q: "Qual tecnologia mais cresce no mercado de TI atualmente?",
        options: ["Machine Learning", "Flash Player", "Fax Automático", "Internet Discada"],
        answer: 0
    },
    {
        q: "Qual cidade brasileira mais emprega profissionais de tecnologia?",
        options: ["Rio de Janeiro", "Florianópolis", "São Paulo", "Manaus"],
        answer: 2
    },
    {
        q: "Qual soft skill mais procurada pelas empresas?",
        options: ["Pontualidade", "Comunicação", "Digitação rápida", "Ser competitivo"],
        answer: 1
    }
];

let index = 0;
let answered = false;

const questionText = document.querySelector("#question-text");
const optionButtons = document.querySelectorAll(".option");
const nextBtn = document.querySelector(".btn-next");

function loadQuestion() {
    let current = questions[index];
    questionText.textContent = current.q;
    answered = false;

    optionButtons.forEach((btn, i) => {
        btn.textContent = current.options[i];
        btn.classList.remove("selected", "correct", "incorrect");
        btn.disabled = false;
    });

    nextBtn.style.display = "none";
}

optionButtons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        if (answered) return;
        answered = true;
        optionButtons.forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");

        let correctAnswer = questions[index].answer;
        if (i === correctAnswer) {
            btn.classList.add("correct");
        } else {
            btn.classList.add("incorrect");
            optionButtons[correctAnswer].classList.add("correct");
        }

        optionButtons.forEach(b => b.disabled = true);

        nextBtn.style.display = "block";
    });
});

nextBtn.addEventListener("click", () => {
    index++;

    if (index >= questions.length) {
        questionText.textContent = "Quiz finalizado!";
        document.querySelector(".quiz-options").style.display = "none";
        nextBtn.style.display = "none";
        return;
    }

    loadQuestion();
});

loadQuestion();
