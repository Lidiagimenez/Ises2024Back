const bcrypt = require('bcrypt');
const { Client } = require('pg');

async function hashPasswordForUser(userId) {
    const client = new Client({
        host: 'localhost',
        user: 'postgres',
        password: '123',
        database: 'bdinscripciones',
        port: 5432
    });

    await client.connect();

    try {
        // Selecciona la contraseña del usuario específico
        const res = await client.query('SELECT clave FROM usuarios WHERE id_usuario = $1', [userId]);
        
        if (res.rows.length > 0) {
            const hashedPassword = await bcrypt.hash(res.rows[0].clave, 10); // Cambia el 10 al costo deseado

            // Actualiza la contraseña hasheada solo para ese usuario
            await client.query('UPDATE usuarios SET clave = $1 WHERE id_usuario = $2', [hashedPassword, userId]);
            console.log(`Contraseña hasheada exitosamente para el usuario con ID ${userId}`);
        } else {
            console.log(`Usuario con ID ${userId} no encontrado`);
        }
    } catch (error) {
        console.error('Error ejecutando la consulta:', error);
    } finally {
        await client.end();
    }
}

// Llama a la función con el ID del usuario deseado
hashPasswordForUser(130).catch(console.error);
