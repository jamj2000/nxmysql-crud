import Link from 'next/link'
import Articulo from '@/components/Articulo'
import { getArticulos } from '@/lib/actions'

export default async function Home() {
    const articulos = await getArticulos()
    // console.log(articulos);

    return (
        <div>
            <Link className='enlace' href="/articulos/new"> Nuevo artículo </Link>
            {
                articulos.map((articulo) => (
                    <Articulo key={articulo.id} articulo={articulo} >
                        <Link
                            className='enlace'
                            href={{ pathname: '/articulos/edit', query: { id: articulo.id } }}>
                            Editar artículo
                        </Link>
                        <Link
                            className='enlace'
                            href={{ pathname: '/articulos/delete', query: { id: articulo.id } }}>
                            Eliminar artículo
                        </Link>
                    </Articulo>
                ))
            }
        </div>
    )
}
