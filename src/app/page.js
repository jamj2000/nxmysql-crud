import { db } from '@/libs/mysql'


async function getArticulos() {
  try {
    const results = await db.query('select * from articulos');
    return results
  } catch (error) {
    return null
  }
}




export default async function Home() {
  const articulos = await getArticulos()
  // console.log(articulos);

  return (
    <main>
      {
        articulos.map( (articulo) => (
          <div style={{ 'border' : '1px solid black',  'padding': '50px'}}>
          <p>{articulo.nombre}</p>
          <p>{articulo.descripcion}</p>
          <p>{articulo.precio}</p>          
          </div>
        ))
      }
    </main>
  )
}
