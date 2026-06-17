const prisma = require("../data/prisma");

const cadastrarAtividade = async (req, res) => {

    try {

        const { descricao, turmaId } = req.body;

        if (!descricao || !turmaId) {
            return res.status(400).json({
                mensagem: "Descrição e turma são obrigatórios"
            });
        }

        const atividade = await prisma.atividade.create({
            data: {
                descricao,
                turmaId: Number(turmaId)
            }
        });

        return res.status(201).json(atividade);

    } catch (error) {

        return res.status(500).json({
            erro: error.message
        });

    }

};

const listarAtividades = async (req, res) => {

    try {

        const turmaId = Number(req.params.turmaId);

       const turma = await prisma.turma.findUnique({
     where: {
        id: turmaId
    },
    include: {
        atividades: true,
        professor: true
    }
});

        return res.status(200).json(turma);

    } catch (error) {

        return res.status(500).json({
            erro: error.message
        });

    }

};

module.exports = {
    cadastrarAtividade,
    listarAtividades
};