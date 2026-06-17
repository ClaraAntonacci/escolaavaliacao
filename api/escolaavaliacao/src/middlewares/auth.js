const auth = (req, res, next) => {

    if (!req.session.professor) {
        return res.status(401).json({
            mensagem: "Usuário não autenticado"
        });
    }

    next();
};

module.exports = auth;