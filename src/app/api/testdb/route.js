import { NextResponse } from "next/server";
import { db } from '@/libs/mysql';

export async function GET () {
    const result= await db.query('SELECT NOW()')
    console.log(result);
    return NextResponse.json(result[0])
}