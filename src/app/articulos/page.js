import Link from 'next/link'
import Articulo from '@/components/Articulo'
import { getArticulos } from '@/lib/actions'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const articulos = await getArticulos()
    // console.log(articulos);

    return (
        <div>
            <Link className='enlace' href="/articulos/create"> Nuevo artículo </Link>
            {
                articulos.map((articulo) => (
                    <Articulo key={articulo.id} articulo={articulo} >
                        <Link href={`/articulos/update?id=${articulo.id}`} className='enlace'>
                            Editar artículo
                        </Link>
                        <Link href={`/articulos/delete?id=${articulo.id}`} className='enlace'>
                            Eliminar artículo
                        </Link>
                    </Articulo>
                ))
            }
        </div>
    )
}
