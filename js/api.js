const API_URL = "http://localhost:4000";

// LOGIN
async function apiLogin(ra, senha) {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ra, senha })
    });

    if (!response.ok) {
        throw new Error("RA ou senha inválidos");
    }

    return response.json();
}

// LISTAR LIVROS
async function apiGetBooks() {
    const response = await fetch(`${API_URL}/books`);
    return response.json();
}

// LISTAR QUESTÕES DE UM LIVRO
async function apiGetQuestions(bookId) {
    const response = await fetch(`${API_URL}/books/${bookId}/questions`);
    return response.json();
}
