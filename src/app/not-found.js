import Link from "next/link"

function notFound() {
    return (
        <section className="not-found">
            <h1>Contenido no encontrado </h1>
            <hr />
            <img src="/not-found.webp"></img>
            <p>El contenido que estás buscando no se ha encontrado. </p>
            <p>Puedes volver al inicio pulsando <Link href={"/"}> aquí</Link>.</p>
        </section>
    )
}

export default notFound