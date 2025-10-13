'use client'

import { useRef, useEffect, useState } from 'react'

export default function Modal({ openElement, children }) {
    const [isOpen, setIsOpen] = useState(false)
    const modalRef = useRef(null)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)


    useEffect(() => {
        // Cierre al hacer clic fuera del modal
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal()
            }
        }

        // Cierre al presionar Escape
        function handleEscapeKey(event) {
            if (event.key === 'Escape') {
                closeModal()
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
            document.addEventListener('keydown', handleEscapeKey)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleEscapeKey)
        }
    }, [isOpen])

    return (
        <>
            <div onClick={openModal}>
                {openElement}
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div
                        ref={modalRef}
                        className="absolute bg-white w-[90%] lg:w-[60%] max-h-[90vh] overflow-y-auto rounded-md shadow-lg py-8 px-4 md:px-10"
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-xl font-bold hover:text-red-600"
                            aria-label="Cerrar modal"
                        >
                            ❌
                        </button>

                        {children}
                    </div>
                </div>
            )}
        </>
    )
}