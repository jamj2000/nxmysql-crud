import { db } from "@/libs/mysql";
import { NextResponse } from "next/server";



export async function GET(request, { params }) {
    try {
        const result = await db.query('select * from articulos where id=?', [params.id])
        if (result.length === 0)
            return NextResponse.json({ error: "Artículo no encontrado" }, { status: 404 })

        return NextResponse.json(result[0])

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

}


export async function PUT(request, { params }) {
    try {
        const data = await request.json()
        const result = await db.query('update articulos set ? where id=?', [data, params.id])

        if (result.length === 0)
            return NextResponse.json({ error: "Artículo no encontrado" }, { status: 404 })

        const updatedArticulo = await db.query('select * from articulos where id=?', [params.id])
        
        return NextResponse.json(updatedArticulo)

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function DELETE(request, { params }) {
    try {
        const result = await db.query('delete from articulos where id=?', [params.id])

        if (result.affectedRows === 0)
            return NextResponse.json({ error: "Artículo no encontrado" }, { status: 404 })

        return new Response(null, { status: 204 })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
