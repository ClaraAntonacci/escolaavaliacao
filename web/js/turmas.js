const professor = JSON.parse(
    localStorage.getItem("professor")
);

if (!professor) {
    window.location.href = "login.html";
}

document.getElementById("nomeProfessor").innerText =
    professor.nome;

async function carregarTurmas() {

    try {

        const resposta = await fetch(
            `http://localhost:3000/turmas/listar/${professor.id}`
        );

        const turmas = await resposta.json();

        const lista =
            document.getElementById("listaTurmas");

        lista.innerHTML = "";

        turmas.forEach(turma => {

            lista.innerHTML += `
                <div class="card">

                    <div>
                        <strong>${turma.nome}</strong>
                    </div>

              <div>

    <button
        onclick="visualizarTurma(${turma.id}, '${turma.nome}')">
        Visualizar
    </button>

    <button
        class="btn-excluir"
        onclick="excluirTurma(${turma.id})">
        Excluir
    </button>

</div>

                </div>
            `;

        });

    } catch (erro) {

        console.error(erro);

    }

}

function cadastrarTurma() {

    window.location.href =
        "cadastroTurma.html";

}

async function excluirTurma(id) {

    const confirmar = confirm(
        "Deseja realmente excluir esta turma?"
    );

    if (!confirmar) return;

    try {

        const resposta = await fetch(
            `http://localhost:3000/turmas/excluir/${id}`,
            {
                method: "DELETE"
            }
        );

        const dados = await resposta.json();

        if (!resposta.ok) {
            alert(dados.mensagem);
            return;
        }

        carregarTurmas();

    } catch (erro) {

        console.error(erro);

    }

}

function visualizarTurma(id, nome) {

    localStorage.setItem("turmaId", id);
    localStorage.setItem("nomeTurma", nome);

    window.location.href =
        "atividades.html";

}

function sair() {

    localStorage.clear();

    window.location.href =
        "login.html";

}

carregarTurmas();