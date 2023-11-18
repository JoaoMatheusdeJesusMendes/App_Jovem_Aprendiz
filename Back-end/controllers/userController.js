const User = require("../models/User");

const getUsers = async (req, res) => {
    const users = await User.find().select("-password -lastToken -__v -requests -createdAt -updatedAt");

    res.status(200).json(users);
};

const getUserById = async (req, res) => {
    const id = req.params.id;
    if (id == "null") {
        return res.status(400).json({
            msg: "Paramêtros incorretos",
        });
    }
    try {
        const user = await User.findById(id)
            .select("-password -lastToken -__v -requests -createdAt -updatedAt")
          
            .exec()
            ;
        if (!user) {
            return res.status(404).json({ msg: "Usuário não encontrado" });
        }
        res.status(200).json(user);
    } catch (error) {
        return res.status(404).json({ msg: "Usuário não encontrado" });
    }
};

const deleteUser = async(req,res) => {
    const id = req.params.id;
    if(id == "null")
    {
        return res.status(400).json({msg: "Parâmetros Incorretos"});
    }
    try
    {
        const user = await User.findById(id)
        if(!user)
            {
                return res.status(404).json({ msg:"Usuário não encontrado"})
            }
            await user.deleteOne()
            res.json({msg:"Usuário removido com sucesso!"});
    }catch (error) {
        return res.status(404).json({ msg: "Usuário não encontrado" });
    }
}



module.exports = { 
    getUsers, 
    getUserById,
    deleteUser 
};