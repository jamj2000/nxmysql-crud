'use server'
// import { db } from '@/lib/mysql'
import { pool } from '@/lib/mysql'
import { redirect } from 'next/navigation';


export async function getArticulos() {
  try {
    const connection = await pool.getConnection();

    const sql = 'select * from `articulos`';
    const [rows] = await connection.execute(sql);

    connection.release();
    return rows;

  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function createArticulo(formData) {
  const nombre = formData.get('nombre');
  const descripcion = formData.get('descripcion');
  const precio = formData.get('precio');

  try {
    const connection = await pool.getConnection();

    const sql = 'insert into `articulos` (`nombre`, `descripcion`, `precio`) values (?, ?, ?)'
    const values = [nombre, descripcion, precio];

    const [result, fields] = await connection.execute(sql, values)

    connection.release();
    console.log(result);

  } catch (error) {
    console.log(error);
  }
  redirect('/articulos');
}


export async function updateArticulo(formData) {
  const id = formData.get('id')
  const nombre = formData.get('nombre')
  const descripcion = formData.get('descripcion')
  const precio = formData.get('precio')

  try {
    const connection = await pool.getConnection();

    const sql = 'update `articulos` set `nombre` = ?, `descripcion` = ?, `precio` = ? where `id` = ?'
    const values = [nombre, descripcion, precio, id];

    const [result, fields] = await connection.execute(sql, values)

    connection.release();
    console.log(result);

  } catch (error) {
    console.log(error);
  }
  redirect('/articulos');
}

export async function deleteArticulo(formData) {
  const id = formData.get('id');

  try {
    const connection = await pool.getConnection();

    const sql = 'delete from articulos where id = ?'
    const values = [id]

    const [result, fields] = await connection.execute(sql, values);

    connection.release();
    console.log(result);

  } catch (error) {
    console.log(error);
  }
  redirect('/articulos');
}
