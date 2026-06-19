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

const nomeTurma =
    localStorage.getItem("nomeTurma");

document.getElementById("nomeTurma").innerText =
    `Turma: ${nomeTurma}`;

async function carregarAtividades() {

    try {

        const resposta = await fetch(
            `http://localhost:3000/atividades/${turmaId}`
        );

        const turma = await resposta.json();

        const lista =
            document.getElementById("listaAtividades");

        lista.innerHTML = "";

        turma.atividades.forEach(atividade => {

            lista.innerHTML += `
                <div class="card">
                    ${atividade.descricao}
                </div>
            `;

        });

    } catch (erro) {

        console.error(erro);

    }

}

function cadastrarAtividade() {

    window.location.href =
        "cadastroAtividade.html";

}

function voltarTurmas() {

    window.location.href =
        "turmas.html";

}

function sair() {

    localStorage.clear();

    window.location.href =
        "login.html";

}

carregarAtividades();