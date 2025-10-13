import mysql from 'mysql2/promise';

const sentencia_eliminar_tabla = `
DROP TABLE IF EXISTS articulos;
`

const sentencia_crear_tabla = `
CREATE TABLE articulos (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    descripcion VARCHAR(200),
    precio DECIMAL(10,2),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ALTER TABLE articulos ADD COLUMN imagen VARCHAR(200) AFTER descripcion;
`


async function load() {
    try {
        // Establecer la conexión con la base de datos
        const db = await mysql.createConnection('mysql://root:root@localhost:3306/crud')
        console.log('Conexión exitosa');

        // Ejecutar consultas
        const [results1] = await db.execute(sentencia_eliminar_tabla);
        console.log('Tabla eliminada:', results1);

        const [results2] = await db.execute(sentencia_crear_tabla);
        console.log('Tabla creada:', results2);

        const sql = 'insert into `articulos` (`nombre`, `descripcion`, `precio`) values (?, ?, ?), (?, ?, ?), (?, ?, ?)'

        const [results3] = await db.execute(sql,
            [
                'PC', 'Ordenador de sobremesa', 999.99,
                'Impresora', 'Impresora Epson', 55.99,
                'Teclado', 'Teclado USB', 19.91
            ])
        console.log('Datos insertados:', results3);

        // Cerrar la conexión
        await db.end();
        console.log('Conexión cerrada correctamente');

    } catch (error) {
        console.error('Error:', error);
    }

}

load();






