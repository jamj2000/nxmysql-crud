'use client'
import { use, useEffect, useState } from "react"

import Modal from "@/components/modal"
import Form from "@/components/articulo/form"

import { updateArticulo, deleteArticulo } from "@/lib/actions"
import Link from "next/link"
import { getArticulos } from "@/lib/data"


export default function ListaArticulos({ data }) {
    const articulos = use(data)   // Resolvemos promesa
    // const articulos = use(getArticulos())

    // const [articulos, setArticulos] = useState([])
    // async function obtenerDatos() {
    //     const articulos = await getArticulos()
    //     setArticulos(articulos)
    // }

    // useEffect(() => {
    //     // esto equivale a hacer fetch pero sin la necesidad de disponer de una API 
    //     obtenerDatos()
    // }, [])

    // const [articulos, setArticulos] = useState(null);

    // async function cargar() {
    //     const data = await getArticulos(); // OK
    //     setArticulos(data);
    // }

    // use(cargar())
    // if (!articulos) return <p>Cargando...</p>

    return (
        <div className="flex flex-wrap gap-4">
            {articulos.map(articulo => <Item key={articulo.id} articulo={articulo} />)}
        </div>
    )
}


function Item({ articulo }) {
    return (
        <div className="border border-slate-200 bg-slate-100 w-80 p-8 rounded" >
            <Link prefetch href={`/articulos/${articulo.id}`}>
                <strong>{articulo.nombre}</strong>
            </Link>
            <p>{articulo.descripcion}</p>
            <p>{articulo.precio} €</p>
            <div className="mt-4 flex gap-4 justify-end">
                <Modal openElement={
                    <p className='bg-blue-400 text-white px-4 py-1 rounded-md hover:cursor-pointer'>EDITAR</p>
                }>
                    <Form action={updateArticulo} title={"Actualizar artículo"} articulo={articulo} />
                </Modal>
                <Modal openElement={
                    <p className='bg-blue-400 text-white px-4 py-1 rounded-md hover:cursor-pointer'>ELIMINAR</p>
                }>
                    <Form action={deleteArticulo} title={"Eliminar artículo"} articulo={articulo} disabled />
                </Modal>
            </div>
        </div>
    )
}