import Form from "@/components/Form"
// import { db } from "@/lib/mysql"
import { pool } from '@/lib/mysql'
import { updateArticulo } from "@/lib/actions"

async function page({searchParams}) {
  const connection = await pool.getConnection();

  const sql = 'select * from articulos where id = ?';
  const values = [ searchParams.id ]
  const [rows, fields] = await connection.execute(sql, values);

  connection.release();
  const articulo = rows[0]

  return (
    <div>
        <h3>Editar artículo {searchParams.id}</h3>
        <Form action={updateArticulo} title='Editar artículo' articulo={articulo} disabled={false}  />
    </div>
  )
}


export default page