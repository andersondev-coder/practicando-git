// CORRECCIÓN XSS: Usamos res.json() en lugar de res.send() para mitigar Cross-Site Scripting
app.get('/ejecutar', (req, res) => {
    const comando = req.query.cmd;
    
    const operacionesPermitidas = {
        'saludar': '¡Hola, bienvenido al sistema seguro!',
        'fecha': new Date().toISOString(),
        'estado': 'Servidor operando de forma segura con estándares DevSecOps'
    };

    if (operacionesPermitidas[comando]) {
        // Enviar como JSON es seguro contra inyecciones XSS directas
        res.json({ resultado: operacionesPermitidas[comando] });
    } else {
        res.status(400).json({ error: 'Operación no permitida o inválida.' });
    }
});
