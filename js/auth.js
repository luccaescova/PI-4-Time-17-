document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const ra = document.getElementById("ra").value;
    const senha = document.getElementById("senha").value;

    try {
        const data = await apiLogin(ra, senha);

        // Salvar token e dados
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // Redirecionar para menu
        window.location.href = "menu.html";
        
    } catch (err) {
        alert("Erro ao logar: " + err.message);
    }
});
