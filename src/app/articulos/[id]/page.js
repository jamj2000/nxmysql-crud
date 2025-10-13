import { Suspense } from 'react'
import Articulo from '@/components/articulos/item'
import { getArticulo } from '@/lib/data'
import { notFound } from 'next/navigation'


async function InfoArticulo({ params }) {
    const { id } = await params
    const articulo = await getArticulo(id)

    if (!articulo) notFound()

    return (
        <div>
            <h1 className='text-xl'>Información del artículo</h1>
            <Articulo articulo={articulo} />
        </div>
    )
}

export default InfoArticulo