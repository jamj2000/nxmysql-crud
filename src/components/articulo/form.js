'use client'
import { useActionState, useEffect, useRef } from "react"
import { toast } from "sonner"



export default function Form({ action, title, articulo, disabled = false }) {
    const formRef = useRef(null)
    const [state, faction, pending] = useActionState(action, {})


    useEffect(() => {
        if (state?.success) {
            toast.success(state.success)
            formRef.current.closest('dialog')?.close()
        }
    }, [state])


    return (
        <form ref={formRef} action={faction} className="flex flex-col">
            <input type='hidden' name='id' value={articulo?.id} />

            <h1 className="uppercase text-center text-xl">{title}</h1>

            <fieldset disabled={disabled} className="flex flex-col py-4">
                <label className="mt-4 grid grid-cols-[100px_1fr] items-center">
                    <p>Nombre</p>
                    <input
                        name='nombre'
                        placeholder='Nombre'
                        defaultValue={articulo?.nombre}
                        className="outline-blue-400 p-2"
                    />
                </label>

                <label className="mt-4 grid grid-cols-[100px_1fr] items-center">
                    <p>Descripción</p>
                    <input
                        name='descripcion'
                        placeholder='Descripción'
                        defaultValue={articulo?.descripcion}
                        className="outline-blue-400 p-2"
                    />
                </label>

                <label className="mt-4 grid grid-cols-[100px_1fr] items-center">
                    <p>Precio</p>
                    <input
                        type='number'
                        name='precio'
                        min={0}
                        step={0.01}
                        placeholder='Precio'
                        defaultValue={articulo?.precio}
                        className="outline-blue-400 p-2"
                    />
                </label>
            </fieldset>

            <button
                autoFocus
                type='submit'
                disabled={pending}
                className="self-end rounded-md px-8 py-4 bg-blue-400 text-white hover:cursor-pointer disabled:bg-slate-400 disabled:hover:cursor-default"
            >
                {pending ? 'Realizando operación...' : title}
            </button>
        </form>
    )
}

