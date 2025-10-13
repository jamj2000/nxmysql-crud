'use client'
import { useActionState, useEffect, useId } from "react"

function Form({ action, title, articulo, disabled = false }) {

    const formId = useId()
    const [state, faction, pending] = useActionState(action, {})

    useEffect(() => {
        if (state?.success) {
            // toast.success(state.success)
            document.getElementById(formId)?.closest('dialog')?.close()
        }
    }, [state, formId])

    return (
        <form action={faction} id={formId}>
            <input type='hidden' name='id' value={articulo?.id} />

            <fieldset disabled={disabled} className="flex flex-col py-4">
                <label htmlFor='nombre' className="mt-4">Nombre</label>
                <input
                    name='nombre'
                    placeholder='Nombre'
                    defaultValue={articulo?.nombre} />

                <label htmlFor='descripcion' className="mt-4">Descripción</label>
                <input
                    name='descripcion'
                    placeholder='Descripción'
                    defaultValue={articulo?.descripcion} />

                <label htmlFor='precio' className="mt-4">Precio</label>
                <input
                    type='number'
                    name='precio'
                    min='0'
                    step={0.01}
                    placeholder='precio'
                    defaultValue={articulo?.precio} />
            </fieldset>

            <button type='submit' autoFocus>{title}</button>
        </form>
    )
}

export default Form