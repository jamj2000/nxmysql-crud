import mysql from 'mysql2/promise';

// Podemos inicializar la conexión de esta manera
export const db = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'crud',
});

// También podemos inicializar la conexión de esta otra manera
// export const db = mysql.createConnection('mysql://root:root@localhost:3306/crud')

// Podemos inicializar un pool de esta manera
export const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'crud',
});

// También podemos inicializar la conexión de esta otra manera
// export const pool = mysql.createPool('mysql://root:root@localhost:3306/crud');


