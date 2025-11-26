'use client'
import { notFound } from "next/navigation"
import { use } from "react"



export default function InfoArticulo({ data }) {
    const articulo = use(data)  // Resolvemos promesa
    if (!articulo) notFound()

    return (
        <div className="text-xl border border-slate-200 bg-slate-100 p-8 rounded">
            <strong>{articulo.nombre}</strong>
            <p>{articulo.descripcion}</p>
            <p>{articulo.precio} €</p>
        </div>
    )
}

