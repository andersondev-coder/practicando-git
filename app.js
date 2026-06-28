const express = require('express');
const app = express();

// VULNERABILIDAD 1: Inyección de código mediante el uso de eval()
app.get('/ejecutar', (req, res) => {
    let codigo = req.query.cmd;
    let resultado = eval(codigo); // Semgrep saltará aquí obligatoriamente
    res.send(resultado);
});

// VULNERABILIDAD 2: Algoritmo de cifrado obsoleto (MD5 no es seguro)
const crypto = require('crypto');
function hashPassword(password) {
    return crypto.createHash('md5').update(password).digest('hex');
}

app.listen(3000, () => {
    console.log('Servidor corriendo para pruebas de seguridad SAST');
});
