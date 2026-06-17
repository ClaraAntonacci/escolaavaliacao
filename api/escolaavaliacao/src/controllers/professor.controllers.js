const prisma = require("../data/prisma");

const cadastrarProfessor = async (req, res) => {

    try {

        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha) {
            return res.status(400).json({
                mensagem: "Nome, email e senha são obrigatórios"
            });
        }

        const professorExistente = await prisma.professor.findUnique({
            where: {
                email
            }
        });

        if (professorExistente) {
            return res.status(400).json({
                mensagem: "Já existe um professor com este email"
            });
        }

        const professor = await prisma.professor.create({
            data: {
                nome,
                email,
                senha
            }
        });

        return res.status(201).json(professor);

    } catch (error) {

        return res.status(500).json({
            erro: error.message
        });

    }

};

const listarProfessores = async (req, res) => {

    try {

        const professores = await prisma.professor.findMany({
            include: {
                turmas: true
            }
        });

        return res.status(200).json(professores);

    } catch (error) {

        return res.status(500).json({
            erro: error.message
        });

    }

};

const buscarProfessor = async (req, res) => {

    try {

        const id = Number(req.params.id);

        const professor = await prisma.professor.findUnique({
            where: {
                id
            },
            include: {
                turmas: true
            }
        });

        if (!professor) {
            return res.status(404).json({
                mensagem: "Professor não encontrado"
            });
        }

        return res.status(200).json(professor);

    } catch (error) {

        return res.status(500).json({
            erro: error.message
        });

    }

};

const atualizarProfessor = async (req, res) => {

    try {

        const id = Number(req.params.id);

        const { nome, email, senha } = req.body;

        const professor = await prisma.professor.findUnique({
            where: {
                id
            }
        });

        if (!professor) {
            return res.status(404).json({
                mensagem: "Professor não encontrado"
            });
        }

        const professorAtualizado = await prisma.professor.update({
            where: {
                id
            },
            data: {
                nome,
                email,
                senha
            }
        });

        return res.status(200).json(professorAtualizado);

    } catch (error) {

        return res.status(500).json({
            erro: error.message
        });

    }

};

const excluirProfessor = async (req, res) => {

    try {

        const id = Number(req.params.id);

        const professor = await prisma.professor.findUnique({
            where: {
                id
            },
            include: {
                turmas: {
                    include: {
                        atividades: true
                    }
                }
            }
        });

        if (!professor) {
            return res.status(404).json({
                mensagem: "Professor não encontrado"
            });
        }

        if (professor.turmas.length > 0) {
            return res.status(400).json({
                mensagem: "Não é possível excluir um professor que possui turmas cadastradas"
            });
        }

        await prisma.professor.delete({
            where: {
                id
            }
        });

        return res.status(200).json({
            mensagem: "Professor excluído com sucesso"
        });

    } catch (error) {

        return res.status(500).json({
            erro: error.message
        });

    }

};

module.exports = {
    cadastrarProfessor,
    listarProfessores,
    buscarProfessor,
    atualizarProfessor,
    excluirProfessor
};