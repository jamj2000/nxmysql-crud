import { getArticulo } from '@/lib/data'
import { Suspense } from 'react'
import Articulo from '@/components/articulo/info'


export default async function PaginaArticulo({ params }) {
    const { id } = await params

    return (
        <section>
            <h1 className='text-2xl pb-2 border-b-2 border-blue-400'>Artículo {id}</h1>

            <Suspense fallback="Recuperando info de artículo ...">
                <Articulo data={getArticulo(id)} />  {/* Pasamos promesa */}
            </Suspense>
        </section>
    )
}


