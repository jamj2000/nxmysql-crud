import mysql from 'serverless-mysql'

// Podemos inicializar la conexión de esta manera
// export const db = mysql({
//     config: {
//         host: 'localhost',
//         user: 'root',
//         password: 'root',
//         port: 3306,
//         database: 'crud'
//     }
// })

// También podemos inicializar la conexión de esta otra manera
export const db = mysql('mysql://root@localhost:3306/crud')