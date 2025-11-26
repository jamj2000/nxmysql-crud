'use server'
import { pool } from '@/lib/mysql'
import { revalidatePath } from 'next/cache';



export async function createArticulo(prevState, formData) {
  const nombre = formData.get('nombre');
  const descripcion = formData.get('descripcion');
  const precio = formData.get('precio');

  try {
    const connection = await pool.getConnection();

    const sql = 'insert into `articulos` (`nombre`, `descripcion`, `precio`) values (?, ?, ?)'
    const values = [nombre, descripcion, precio];

    const [result, fields] = await connection.execute(sql, values)

    connection.release();
    // console.log(result);
    revalidatePath('/articulos');
    return { success: 'Operación exitosa' }

  } catch (error) {
    console.log(error);
  }

}


export async function updateArticulo(prevState, formData) {
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
    // console.log(result);
    revalidatePath('/articulos');
    return { success: 'Operación exitosa' }

  } catch (error) {
    console.log(error);
  }

}

export async function deleteArticulo(prevState, formData) {
  const id = formData.get('id');

  try {
    const connection = await pool.getConnection();

    const sql = 'delete from articulos where id = ?'
    const values = [id]

    const [result, fields] = await connection.execute(sql, values);

    connection.release();
    // console.log(result);
    revalidatePath('/articulos');
    return { success: 'Operación exitosa' }

  } catch (error) {
    console.log(error);
  }

}
