const path = require('path')

const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '../public')))

const port = 3001;
app.listen(port, () => {
    console.log("El servidor se ha iniciado correctamente: " + 
    port +", bienvenid@.");
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "views/home.html"));
});
app.get('/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, "views/register.html"));
});
app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, "views/login.html"));
});