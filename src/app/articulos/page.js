import { Suspense } from 'react'
import { getArticulos } from '@/lib/data'
import ListaArticulos from '@/components/articulos/lista'



export default function Home() {
    const articulos = getArticulos()

    return (
        <section>
            <h1 className='text-xl'>Artículos</h1>
            <hr />

            <Suspense fallback="Recuperando datos...">
                <ListaArticulos articulos={articulos} />
            </Suspense>
        </section>
    )
}
