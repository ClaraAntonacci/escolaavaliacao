const express = require("express");
const router = express.Router();

const{
    cadastrarProfessor,
    listarProfessores,
    buscarProfessor,
    atualizarProfessor,
    excluirProfessor
} = require("../controllers/professor.controllers.js");

router.post("/professores/cadastrar", cadastrarProfessor);
router.get("/professores/listar", listarProfessores);
router.get("/professores/buscar/:id", buscarProfessor);
router.put("/professores/atualizar/:id", atualizarProfessor);
router.delete("/professores/excluir/:id", excluirProfessor);

module.exports = router;