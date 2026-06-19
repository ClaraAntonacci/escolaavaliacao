const professor = JSON.parse(
    localStorage.getItem("professor")
);

if (!professor) {
    window.location.href = "login.html";
}

document.getElementById("nomeProfessor").innerText =
    professor.nome;

async function cadastrarTurma() {

    const nome =
        document.getElementById("nomeTurma").value;

    if (!nome) {
        alert("Informe o nome da turma");
        return;
    }

    try {

        const resposta = await fetch(
            "http://localhost:3000/turmas/cadastrar",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nome,
                    professorId: professor.id
                })
            }
        );

        if (!resposta.ok) {
            alert("Erro ao cadastrar turma");
            return;
        }

        alert("Turma cadastrada com sucesso!");

        window.location.href =
            "turmas.html";

    } catch (erro) {

        console.error(erro);

        alert("Erro ao conectar ao servidor");

    }

}

function voltar() {

    window.location.href =
        "turmas.html";

}

function sair() {

    localStorage.clear();

    window.location.href =
        "login.html";

}