const professor = JSON.parse(
    localStorage.getItem("professor")
);

if (!professor) {
    window.location.href = "login.html";
}

document.getElementById("nomeProfessor").innerText =
    professor.nome;

const turmaId =
    localStorage.getItem("turmaId");

async function cadastrarAtividade() {

    const descricao =
        document.getElementById("descricao").value;

    if (!descricao) {
        alert("Informe a descrição da atividade");
        return;
    }

    try {

        const resposta = await fetch(
            "http://localhost:3000/atividades",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    descricao,
                    turmaId
                })
            }
        );

        if (!resposta.ok) {
            alert("Erro ao cadastrar atividade");
            return;
        }

        alert("Atividade cadastrada com sucesso!");

        window.location.href =
            "atividades.html";

    } catch (erro) {

        console.error(erro);

        alert("Erro ao conectar ao servidor");

    }

}

function voltar() {

    window.location.href =
        "atividades.html";

}

function sair() {

    localStorage.clear();

    window.location.href =
        "login.html";

}