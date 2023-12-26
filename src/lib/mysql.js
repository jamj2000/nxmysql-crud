import mysql from 'serverless-mysql'

export const db = mysql({
    config: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: 3306,
        database: 'datos'
    }
})