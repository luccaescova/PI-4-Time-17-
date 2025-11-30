// ---- PEGAR ID DO LIVRO DA URL ----
const params = new URLSearchParams(window.location.search);
const bookId = params.get("livro");

if (!bookId) {
    alert("Livro não identificado!");
    window.location.href = "menu.html";
}

// Elementos
const questionText = document.getElementById("questionText");
const title = document.getElementById("title");
const textA = document.getElementById("textA");
const textB = document.getElementById("textB");
const textC = document.getElementById("textC");
const textD = document.getElementById("textD");
const pagination = document.getElementById("pagination");
const submitBtn = document.getElementById("submitBtn");

// Dados globais
let questions = [];
let currentPage = 0;
let userAnswers = [];

// ---- CARREGAR QUESTÕES DO BACKEND ----
async function loadQuestions() {
    try {
        questions = await apiGetQuestions(bookId);
        userAnswers = new Array(questions.length).fill(null);

        renderQuestion();
        renderPagination();

    } catch (err) {
        alert("Erro ao carregar questões!");
        console.error(err);
    }
}

// ---- EXIBIR UMA QUESTÃO ----
function renderQuestion() {
    const q = questions[currentPage];

    title.innerText = `Questão ${currentPage + 1}`;
    questionText.innerText = q.pergunta;

    textA.innerText = q.alternativas[0];
    textB.innerText = q.alternativas[1];
    textC.innerText = q.alternativas[2];
    textD.innerText = q.alternativas[3];

    // marcar resposta anterior
    document.querySelectorAll("input[name='questao']").forEach(r => r.checked = false);
    if (userAnswers[currentPage] !== null) {
        document.getElementById(`alt${userAnswers[currentPage]}`).checked = true;
    }

    // última questão → mostrar botão enviar
    submitBtn.style.display = (currentPage === questions.length - 1) ? "block" : "none";
}

// ---- PAGINAÇÃO ----
function renderPagination() {
    pagination.innerHTML = "";

    for (let i = 0; i < questions.length; i++) {
        const li = document.createElement("li");
        li.className = "page-item" + (i === currentPage ? " active" : "");
        li.innerHTML = `<a class="page-link">${i + 1}</a>`;
        li.onclick = () => {
            saveAnswer();
            currentPage = i;
            renderQuestion();
            renderPagination();
        };
        pagination.appendChild(li);
    }
}

// ---- SALVAR RESPOSTA ----
function saveAnswer() {
    const selected = document.querySelector("input[name='questao']:checked");
    if (selected) {
        userAnswers[currentPage] = selected.id.replace("alt", "");
    }
}

// ---- ENVIAR RESPOSTAS ----
submitBtn.onclick = () => {
    saveAnswer();  

    console.log("Respostas enviadas:", userAnswers);
    alert("Suas respostas foram registradas!");

    window.location.href = "menu.html";
};

// ---- INICIAR ----
loadQuestions();
