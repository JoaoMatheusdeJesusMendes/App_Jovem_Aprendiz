// app.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes/routes.js');

// Configuração do JSON Response
app.use(express.json());

// Configuração de Rotas
app.use('/api', routes);

// Rota de status
app.use('/status', (req, res) => {
    res.status(200).json('active');
});

mongoose.set('strictQuery', true);

// Conexão com o banco de dados
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

mongoose
    .connect(
        `mongodb+srv://${dbUser}:${dbPassword}@jaapp.umcir5b.mongodb.net/?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
        console.log('Connected to the database.');
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
        process.exit(1);
    });
