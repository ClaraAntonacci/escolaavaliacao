const router = require("express").Router();

const {
    cadastrarTurma,
    listarTurmas,
    excluirTurma
} = require("../controllers/turma.controllers");

router.post("/turmas/cadastrar", cadastrarTurma);

router.get("/turmas/listar/:professorId", listarTurmas);

router.delete("/turmas/excluir/:id", excluirTurma);

module.exports = router;