async function entrar() {

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    try {

        const resposta = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                senha
            })
        });

        if (!resposta.ok) {
            alert("Email ou senha inválidos");
            return;
        }

        const professor = await resposta.json();

        localStorage.setItem(
            "professor",
            JSON.stringify(professor)
        );

        window.location.href = "turmas.html";

    } catch (erro) {

        alert("Erro ao conectar com o servidor");
        console.error(erro);

    }

}