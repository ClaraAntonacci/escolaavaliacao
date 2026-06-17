const router = require("express").Router();

const {
    cadastrarAtividade,
    listarAtividades
} = require("../controllers/atividade.controllers");

router.post("/atividades", cadastrarAtividade);

router.get("/atividades/:turmaId", listarAtividades);

module.exports = router;