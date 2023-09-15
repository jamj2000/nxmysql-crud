import { db } from "@/libs/mysql";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const results = await db.query('select * from articulos');
 
        return NextResponse.json(results)
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

}

export async function POST(request) {
    try {
        const { nombre, descripcion, precio } = await request.json()

        const result = await db.query('insert into articulos set ?', {
            nombre, descripcion, precio
        })
  
        return NextResponse.json({ id: result.insertId, nombre, descripcion, precio })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}