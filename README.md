# Operaciones CRUD en base de datos

Para probar la aplicación en un entorno local sigue los siguientes pasos:

1. **Configura URL de base de datos**

2. **Instala dependencias**

```sh
npm  install
```

3. **Introduce datos de prueba**

```sh
npm  run  seed
```

4. **Ejecuta entorno de desarrollo**

```sh
npm  run  dev
```

# Streaming de datos desde el servidor al cliente

> [!TIP]
>
> Actualizado a las últimas novedades que incorporan Next.js 16 y React 19

En este proyecto se hace uso de `Suspense` en el servidor y `use()` en el cliente para proporcionar *streaming* de datos. Ejemplo de uso:


**En página en el servidor**

```js
export default function Pagina() {
    const promesa = getArticulos() // no usamos await
    
    return (
        <Suspense fallback="Recuperando lista de artículos...">
            <ComponenteCliente data={promesa} />  {/* Pasamos promesa */}
        </Suspense>
    )
}
```

**En componente en el cliente**

```js
'use client'

export default function ComponenteCliente( {data}) {
    const articulos = use(data)   // Resolvemos promesa

    return (
        <div className="flex flex-wrap gap-4">
            {articulos.map(articulo => <Item key={articulo.id} articulo={articulo} />)}
        </div>
    )
}
```