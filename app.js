const express = require('express');
const crypto = require('crypto');
const app = express();

// CORRECCIÓN 1: Eliminamos 'eval'. Validamos la entrada ushhkhkjhkjhkjhando una lista blanca segura.
app.get('/ejecutar', (req, res) => {
    const comando = req.query.cmd;
    
    const operacionesPermitidas = {
        'saludar': '¡Hola, bienvenido al sistema seguro!',
        'fecha': new Date().toISOString(),
        'estado': 'Servidor operando de forma segura con estándares DevSecOps'
    };

    if (operacionesPermitidas[comando]) {
        res.send(operacionesPermitidas[comando]);
    } else {
        res.status(400).send('Operación no permitida o inválida.');
    }
});

// CORRECCIÓN 2: Reemplazamos MD5 por scrypt (Algoritmo seguro y resistente)
function hashPasswordSeguro(password, callback) {
    const salt = crypto.randomBytes(16).toString('hex');
    
    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
        if (err) return callback(err);
        callback(null, `${salt}:${derivedKey.toString('hex')}`);
    });
}

app.listen(3000, () => {
    console.log('Servidor seguro corriendo en el puerto 3000');
});
