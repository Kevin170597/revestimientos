import styles from "./page.module.css"
import { Form } from "@/components"
import type { Metadata } from 'next'
import { addClient } from "@/services"

export const metadata: Metadata = {
    title: 'Guardar datos de cliente'
}

export default function ClientEmail() {

    const clientsFormFields = [
        {
            type: "input",
            inputType: "text",
            name: "name",
            label: "Nombre",
            required: true,
            placeholder: "Nombre o apellido...",
            errorMessage: "Completar campo."
        },
        {
            type: "input",
            inputType: "text",
            name: "email",
            label: "Email",
            placeholder: "Ej: nombre@gmail.com"
        },
        {
            type: "input",
            inputType: "text",
            name: "phone",
            label: "Teléfono",
            placeholder: "Ej: 1122334455",
        },
    ]

    return (
        <div className={styles.addClient}>
            <Form 
                submitFunction={addClient}
                fields={clientsFormFields}
                pushTo="/admin/clientes"
            />
        </div>
    )
}