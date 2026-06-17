const prisma = require("../data/prisma");

const login = async (req, res) => {

    try {

        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({
                mensagem: "Email e senha são obrigatórios"
            });
        }

        const professor = await prisma.professor.findUnique({
            where: {
                email
            }
        });

        if (!professor) {
            return res.status(401).json({
                mensagem: "Email ou senha inválidos"
            });
        }

        if (professor.senha !== senha) {
            return res.status(401).json({
                mensagem: "Email ou senha inválidos"
            });
        }

        return res.status(200).json({
            id: professor.id,
            nome: professor.nome,
            email: professor.email
        });

    } catch (error) {

        return res.status(500).json({
            erro: error.message
        });

    }

};

module.exports = {
    login
};