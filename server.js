const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();
const sequelize = new Sequelize("javaproject", "root", "root", {
    host: "localhost",
    dialect: 'mysql',
    // query: { raw: true }
});

const alunos = sequelize.define("alunos", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: true
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    diaPagamento: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
}, {
    timestamps: false,
});

app.get("/", (request, response) => {
    let listaAlunos = alunos.findAll();
    listaAlunos.then(data => {
        response.send(data);
    })
});

app.listen(3000, () => {
    console.log("Servidor iniciado!")
});