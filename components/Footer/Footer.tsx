import Link from "next/link"
import { FBIcon } from "../Icons/FBIcon"
import { IGIcon } from "../Icons/IGIcon"

export const Footer = () => {

    return (
        <footer className="flex justify-between bg-primary border-t py-5 px-10">
            <div>
                <h3 className="mb-4">Seguinos</h3>
                <Link className="mb-4" target="_blank" href={"https://instagram.com/kevin170597"}>
                    <FBIcon fill="#fff" />
                </Link>
                <Link className="mb-4"  target="_blank" href={"https://instagram.com/kevin170597"}>
                    <IGIcon fill="#fff" />
                </Link>
            </div>
            <div>
                <h3 className="mb-4">Contacto</h3>
                <p className="mb-4">+5411-62087463</p>
                <p className="mb-4">revestimientos34@gmail.com</p>
            </div>
            <div>
                <h3 className="mb-4">Recibí ofertas</h3>
                <input placeholder="Email" className="border rounded-l-full bg-inherit h-10 px-3 focus:outline-none placeholder:text-font-white-2" type="text" />
                <button className="bg-primary-light h-10 rounded-r-full px-4">Enviar</button>
            </div>
        </footer>
    )
}