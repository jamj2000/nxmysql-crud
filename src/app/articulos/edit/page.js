import Form from "@/components/Form"
import { db } from "@/lib/mysql"
import { editArticulo } from "@/lib/actions"

async function page({searchParams}) {
  const [ articulo ] = await db.query('select * from articulos where id = ?', [ searchParams.id ]);

  return (
    <div>
        <h3>Editar artículo {searchParams.id}</h3>
        <Form action={editArticulo} title='Editar artículo' articulo={articulo} disabled={false}  />
    </div>
  )
}


export default page