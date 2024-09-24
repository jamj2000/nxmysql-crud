import Form from "@/components/Form"
import { createArticulo } from "@/lib/actions"

function page() {
  return (
    <div>
        <h3>Nuevo artículo</h3>
        <Form action={createArticulo} title='Crear artículo' articulo={null} disabled={false}  />
    </div>
  )
}

export default page