import Link from "next/link"


function Articulo({ children, articulo }) {
    return (
        <div className="border border-slate-200 bg-slate-100 w-80 p-8 rounded">
            <Link prefetch href={`/articulos/${articulo.id}`}>
                <strong>{articulo.nombre}</strong>
            </Link>
            <p>{articulo.descripcion}</p>
            <p>{articulo.precio} €</p>
            <div className="mt-4 flex gap-4 justify-end">
                {children}
            </div>
        </div>
    )
}

export default Articulo