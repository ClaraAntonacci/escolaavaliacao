require("dotenv").config();

const express = require("express");
const cors = require("cors");

const authRoutes = require("./src/routes/auth.routes");
const turmaRoutes = require("./src/routes/turma.routes");
const atividadeRoutes = require("./src/routes/atividade.routes");
const professorRoutes = require("./src/routes/professor.routes");

const app = express();

app.use(express.json());

app.use(cors());

app.use(authRoutes);
app.use(turmaRoutes);
app.use(atividadeRoutes);
app.use(professorRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});