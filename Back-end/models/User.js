const mongoose = require('mongoose');

const userSchema = mongoose.Schema( 
    {
        type: { type: String, required: [true] },
        name: { type: String, required: [true] },
        email: { type: String, required: [true] },
        password: { type: String, required: [true] },
        cpf: {type: String, required: [true]},
        birthDate: {type: String, required: [true]},
        lastToken: { type: String, required: [false] }
    },
{
    timestamps: true
}
);

module.exports = mongoose.model('User', userSchema)