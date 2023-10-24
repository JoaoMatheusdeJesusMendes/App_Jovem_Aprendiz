const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Models
const User = require("../models/User");

// @desc    Registra um novo usuário
// @route   POST auth/register
// @access  public
// @params  name*, email*, password*, confirmpassword*
const registerUser = async (req, res) => {
    const { name, email, password, confirmpassword, type } = req.body;

    // Validations
    if (!type) {
        return res.status(422).json({ msg: "O tipo é obrigatório!" });
    }
    if (!name) {
        return res.status(422).json({ msg: "O nome é obrigatório!" });
    }
    if (!email) {
        return res.status(422).json({ msg: "O email é obrigatório!" });
    }
    if (!password) {
        return res.status(422).json({ msg: "A senha é obrigatória!" });
    }
    if (password != confirmpassword) {
        return res.status(422).json({ msg: "As senhas não conferem!" });
    }

    // check if user exists
    const userExists = await User.findOne({ email: email });
    if (userExists) {
        return res.status(422).json({ msg: "Email já esta em uso no sistema!" });
    }

    // create password
    const salt = await bcrypt.genSalt(12); // adiciona digitos a mais
    const passwordHash = await bcrypt.hash(password, salt);

    // create user
    const NewUser = new User({
            type,
            name,
            email,
            password: passwordHash,
        });

    try {
        await NewUser.save(); // Salva o objeto no banco
        res.status(201).json({
            msg: "Usuário criado com sucesso",
        });
    } catch (error) {
        res.status(500).json({
            msg: "Aconteceu um erro no servidor, tente novamente mais tarde",
        });
    }
};

// @desc    Loga o usuário fazendo validações de email e senha.
// @route   POST auth/login
// @access  public
// @params  email*, password*
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // validations
    if (!email) {
        return res.status(401).json({ msg: "O email é obrigatório!" });
    }
    if (!password) {
        return res.status(401).json({ msg: "A senha é obrigatória!" });
    }

    // check if user exists
    const user = await User.findOne({ email: email });
    if (!user) {
        return res.status(401).json({ msg: "Email não encontrado!" });
    }
    // check if password match
    const checkPassowrd = await bcrypt.compare(password, user.password);

    if (!checkPassowrd) {
        return res.status(401).json({ msg: "Senha inválida!" });
    }

    try {
        const secret = process.env.SECRET;
        // o secret é uma hash definida no env que adiciona complexidade ao jwt,
        // seu algoritmo é livre e sem isso qualquer um conseguiria hackear o sistema,
        // então ele faz as hashs do token baseado nesse secret,
        // é interessante também ter um secret de producao e outro de desenvolvimento para add mais complexidade
        const token = jwt.sign(
            {
                id: user._id,
            },
            secret,
            { expiresIn: "24h" }
        );

        await user.updateOne({ lastToken: token });

        res.status(200).json({
            msg: "Autenticação realizada com sucesso",
            token: token,
            id: user._id,
            type: user.type
        });
    } catch (error) {
        res.status(500).json({
            msg: "Erro interno do servidor" + error,
        });
    }
};

// @desc    checa se o usuário existe e retorna suas informações.
// @route   /user/:id
// @access  public
// @params  id* (passado na URL)
const authenticateUser = async (req, res) => {
    const id = req.params.id;
    if(id == "null"){
        return res.status(404).json({
            msg: "Usuário não encontrado",
        });
    }
    // check if user exists
    const user = await User.findById(id, "-password"); // exclui a senha do usuario do retorno, se não os usuarios conseguem ver a senha de outras pessoas
    if (!user || id == "null") {
        return res.status(404).json({
            msg: "Usuário não encontrado",
        });
    }
    // check if token exists
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ msg: "Acesso negado" });
    }
    // check if token is valid
    try {
        const secret = process.env.SECRET;
        jwt.verify(token, secret); // Verificação padrão do JWT
        if (token != user.lastToken) {
            // Verificação caso o usuário troque o token.
            throw new Error();
        }
    } catch (error) {
        return res.status(401).json({
            msg: "Token inválido",
        });
    }

    return res.status(200).json(user);
};

module.exports = {
    registerUser,
    loginUser,
    authenticateUser,
};
