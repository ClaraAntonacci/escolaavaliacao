const prisma = require("../data/prisma");

const cadastrarTurma = async (req, res) => {

    try {

        const { nome, professorId } = req.body;

        if (!nome || !professorId) {
            return res.status(400).json({
                mensagem: "Nome da turma e professor são obrigatórios"
            });
        }

        const turma = await prisma.turma.create({
            data: {
                nome,
                professorId: Number(professorId)
            }
        });

        return res.status(201).json(turma);

    } catch (error) {

        return res.status(500).json({
            erro: error.message
        });

    }

};

const listarTurmas = async (req, res) => {

    try {

        const professorId = Number(req.params.professorId);

        const turmas = await prisma.turma.findMany({
            where: {
                professorId
            }
        });

        return res.status(200).json(turmas);

    } catch (error) {

        return res.status(500).json({
            erro: error.message
        });

    }

};

const excluirTurma = async (req, res) => {

    try {

        const id = Number(req.params.id);

        const atividades = await prisma.atividade.findMany({
            where: {
                turmaId: id
            }
        });

        if (atividades.length > 0) {
            return res.status(400).json({
                mensagem: "Você não pode excluir uma turma com atividades cadastradas"
            });
        }

        await prisma.turma.delete({
            where: {
                id
            }
        });

        return res.status(200).json({
            mensagem: "Turma excluída com sucesso"
        });

    } catch (error) {

        return res.status(500).json({
            erro: error.message
        });

    }

};

module.exports = {
    cadastrarTurma,
    listarTurmas,
    excluirTurma
};