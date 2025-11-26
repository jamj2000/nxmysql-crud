import { Suspense } from 'react'
import { getArticulos } from '@/lib/data'
import { createArticulo } from '@/lib/actions'
import ListaArticulos from '@/components/articulos/lista'
import Modal from '@/components/modal'
import Form from '@/components/articulo/form'




export default function PaginaArticulos() {

    return (
        <section>
            <div className='flex gap-4 items-center mb-4'>
                <h1 className='text-2xl'>Artículos </h1>
                <Modal openElement={
                    <p className='bg-blue-400 text-white px-4 py-1 rounded-md hover:cursor-pointer'>NUEVO</p>
                }>
                    <Form action={createArticulo} title={"Crear artículo"} articulo={null} />
                </Modal>
            </div>


            <Suspense fallback="Recuperando lista de artículos...">
                <ListaArticulos data={getArticulos()} />  {/* Pasamos promesa */}
            </Suspense>
        </section>
    )
}
