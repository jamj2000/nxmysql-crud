'use client'
import { useActionState, useEffect, useId } from "react"



export default function Form({ action, title, articulo, disabled = false }) {
    const formId = useId()
    const [state, faction, pending] = useActionState(action, {})

    useEffect(() => {
        if (state?.success) {
            // toast.success(state.success)
            document.getElementById(formId)?.closest('dialog')?.close()
        }
    }, [state, formId])

    return (
        <form id={formId} action={faction} className="flex flex-col">
            <input type='hidden' name='id' value={articulo?.id} />

            <h1 className="uppercase text-center text-xl">{title}</h1>

            <fieldset disabled={disabled} className="flex flex-col py-4">
                <label htmlFor={`${formId}-nombre`} className="mt-4">Nombre</label>
                <input
                    id={`${formId}-nombre`}
                    name='nombre'
                    placeholder='Nombre'
                    defaultValue={articulo?.nombre}
                />

                <label htmlFor={`${formId}-descripcion`} className="mt-4">Descripción</label>
                <input
                    id={`${formId}-descripcion`}
                    name='descripcion'
                    placeholder='Descripción'
                    defaultValue={articulo?.descripcion}
                />

                <label htmlFor={`${formId}-precio`} className="mt-4">Precio</label>
                <input
                    type='number'
                    id={`${formId}-precio`}
                    name='precio'
                    min='0'
                    step={0.01}
                    placeholder='precio'
                    defaultValue={articulo?.precio}
                />
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

