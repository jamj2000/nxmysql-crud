import { getArticulos } from '@/lib/actions'
import Link from 'next/link'


export default async function Home() {
  return (
    <section className='not-found'>
      <h1>Página de inicio</h1>
      <hr />
      <Link href={"/articulos"}>Listado de artículos</Link>      
    </section>
  )
}
