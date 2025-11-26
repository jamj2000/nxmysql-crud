'use server'
import { pool } from '@/lib/mysql'


export async function getArticulos() {

    try {
        const connection = await pool.getConnection();

        const sql = 'select * from `articulos`';
        const [rows] = await connection.execute(sql);

        connection.release();
        await new Promise(resolve => setTimeout(resolve, 1000))
        return rows;

    } catch (error) {
        console.log(error);
        return null;
    }
}


export async function getArticulo(id) {
    try {
        const connection = await pool.getConnection();

        const sql = 'select * from `articulos` where id=?';
        const [rows] = await connection.execute(sql, [id]);

        connection.release();
        await new Promise(resolve => setTimeout(resolve, 1000))
        return rows[0];

    } catch (error) {
        console.log(error);
        return null;
    }
}