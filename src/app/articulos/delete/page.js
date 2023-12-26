import Form from "@/components/Form"
import { db } from "@/lib/mysql"
import { deleteArticulo } from "@/lib/actions"

async function page({ searchParams }) {
  const [articulo] = await db.query('select * from articulos where id = ?', [searchParams.id]);
  return (
    <div>
      <h3>Eliminar artículo {searchParams.id}</h3>
      <Form action={deleteArticulo} title='Eliminar artículo' articulo={articulo} disabled={true} />
    </div>
  )
}

export default page