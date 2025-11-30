async function loadBooks() {
    const container = document.getElementById("books-container");
    container.innerHTML = "Carregando...";

    const books = await apiGetBooks();

    container.innerHTML = "";

    books.forEach(book => {
        const el = document.createElement("div");
        el.classList.add("book-item");

        el.innerHTML = `
            <h3>${book.titulo}</h3>
            <p>${book.autor}</p>
            <button onclick="openQuestions('${book._id}')">Acessar</button>
        `;

        container.appendChild(el);
    });
}

function openQuestions(idLivro) {
    window.location.href = `Question.html?livro=${idLivro}`;
}

loadBooks();
